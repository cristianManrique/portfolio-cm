import { v2 as cloudinary } from 'cloudinary';
import { verifyToken, unauthorized, ok, err } from './lib/auth.js';

// env vars needed (see .env.example):
//   CLOUDINARY_CLOUD_NAME
//   CLOUDINARY_API_KEY
//   CLOUDINARY_API_SECRET

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') return err('Method not allowed', 405);
  if (!verifyToken(event))         return unauthorized();

  let body;
  try { body = JSON.parse(event.body); }
  catch { return err('Invalid JSON', 400); }

  // Expects: { data: "data:image/...;base64,xxx", filename: "myproject.png" }
  const { data, filename } = body;
  if (!data) return err('image data required', 400);

  try {
    const result = await cloudinary.uploader.upload(data, {
      folder:         'portfolio_cm/projects',
      public_id:      filename?.replace(/\.[^.]+$/, '') || undefined,
      overwrite:      false,
      resource_type:  'image',
      transformation: [{ width: 1200, crop: 'limit', quality: 'auto:good', fetch_format: 'webp' }],
    });
    return ok({
      url:      result.secure_url,
      publicId: result.public_id,
      width:    result.width,
      height:   result.height,
    });
  } catch (e) {
    console.error('upload-image error:', e);
    return err('Upload failed: ' + e.message, 500);
  }
};
