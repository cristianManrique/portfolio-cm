import { connectDB }                        from './lib/db.js';
import { Project }                          from './lib/models.js';
import { verifyToken, unauthorized, ok, err } from './lib/auth.js';

// PATCH /.netlify/functions/projects-reorder
// Body: [{ id: string, order: number }, ...]
export const handler = async (event) => {
  if (event.httpMethod !== 'PATCH') return err('Method not allowed', 405);
  if (!verifyToken(event))          return unauthorized();

  let items;
  try { items = JSON.parse(event.body); }
  catch { return err('Invalid JSON', 400); }

  if (!Array.isArray(items) || items.length === 0)
    return err('Expected non-empty array of { id, order }', 400);

  try {
    await connectDB();
    await Project.bulkWrite(
      items.map(({ id, order }) => ({
        updateOne: {
          filter: { _id: id },
          update: { $set: { order } },
        },
      }))
    );
    return ok({ updated: items.length });
  } catch (e) {
    console.error('projects-reorder error:', e);
    return err('Database error', 500);
  }
};
