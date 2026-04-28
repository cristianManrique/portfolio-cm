import { connectDB }                        from './lib/db.js';
import { Project }                          from './lib/models.js';
import { verifyToken, unauthorized, ok, err } from './lib/auth.js';

export const handler = async (event) => {
  if (event.httpMethod !== 'PATCH') return err('Method not allowed', 405);
  if (!verifyToken(event))          return unauthorized();

  const id = event.queryStringParameters?.id;
  if (!id) return err('id required', 400);

  let body;
  try { body = JSON.parse(event.body); }
  catch { return err('Invalid JSON', 400); }

  const { title, description, images, tags, github, demo, order } = body;
  if (!title?.en || !title?.fr)             return err('title.en and title.fr required', 400);
  if (!description?.en || !description?.fr) return err('description.en and description.fr required', 400);

  try {
    await connectDB();
    const updated = await Project.findByIdAndUpdate(
      id,
      { title, description, images, tags, github, demo, order },
      { new: true }
    );
    if (!updated) return err('Project not found', 404);
    return ok(updated);
  } catch (e) {
    console.error('projects-update error:', e);
    return err('Database error', 500);
  }
};
