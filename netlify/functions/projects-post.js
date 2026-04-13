import { connectDB }                        from './lib/db.js';
import { Project }                          from './lib/models.js';
import { verifyToken, unauthorized, ok, err } from './lib/auth.js';

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') return err('Method not allowed', 405);
  if (!verifyToken(event))         return unauthorized();

  let body;
  try { body = JSON.parse(event.body); }
  catch { return err('Invalid JSON', 400); }

  const { title, description, images, tags, github, order } = body;

  if (!title?.en || !title?.fr)             return err('title.en and title.fr required', 400);
  if (!description?.en || !description?.fr) return err('description.en and description.fr required', 400);

  try {
    await connectDB();
    const project = await Project.create({
      title, description,
      images: images || [],
      tags:   tags   || [],
      github: github || null,
      order:  order  ?? 0,
    });
    return ok(project);
  } catch (e) {
    console.error('projects-post error:', e);
    return err('Database error', 500);
  }
};
