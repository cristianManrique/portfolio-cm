import { connectDB }                        from './lib/db.js';
import { Project }                          from './lib/models.js';
import { verifyToken, unauthorized, ok, err } from './lib/auth.js';

export const handler = async (event) => {
  if (event.httpMethod !== 'DELETE') return err('Method not allowed', 405);
  if (!verifyToken(event))           return unauthorized();

  const id = event.queryStringParameters?.id;
  if (!id) return err('id required', 400);

  try {
    await connectDB();
    const deleted = await Project.findByIdAndDelete(id);
    if (!deleted) return err('Project not found', 404);
    return ok({ deleted: true, id });
  } catch (e) {
    console.error('projects-delete error:', e);
    return err('Database error', 500);
  }
};
