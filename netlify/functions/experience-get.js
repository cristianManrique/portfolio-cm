import { connectDB }   from './lib/db.js';
import { Experience }  from './lib/models.js';
import { ok, err }     from './lib/auth.js';

export const handler = async () => {
  try {
    await connectDB();
    const experience = await Experience.find().sort({ order: 1, createdAt: 1 });
    return ok(experience);
  } catch (e) {
    console.error('experience-get error:', e);
    return err('Database error', 500);
  }
};
