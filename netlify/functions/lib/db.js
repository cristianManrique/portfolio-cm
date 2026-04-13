import mongoose from 'mongoose';

let cached = null;

export const connectDB = async () => {
  if (cached && mongoose.connection.readyState === 1) return cached;
  cached = await mongoose.connect(process.env.MONGODB_URI, {
    dbName:                   process.env.MONGODB_DATABASE || 'portfolio_cm',
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS:          10000,
  });
  return cached;
};
