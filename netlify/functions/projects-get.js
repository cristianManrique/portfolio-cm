import { connectDB }  from './lib/db.js';
import { Project }    from './lib/models.js';
import { ok, err }    from './lib/auth.js';

export const handler = async () => {
  try {
    await connectDB();
    const projects = await Project.find().sort({ order: 1, createdAt: 1 });
    return ok(projects);
  } catch (e) {
    console.error('projects-get error:', e);
    return err('Database error', 500);
  }
};
