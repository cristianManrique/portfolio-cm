import mongoose from 'mongoose';

// ── Project ───────────────────────────────────────────────────────────────────
const ProjectSchema = new mongoose.Schema({
  title: {
    en: { type: String, required: true },
    fr: { type: String, required: true },
  },
  description: {
    en: { type: String, required: true },
    fr: { type: String, required: true },
  },
  images:  { type: [String], default: [] },   // Cloudinary URLs
  tags:    { type: [String], default: [] },
  github:  { type: String,  default: null },
  demo:    { type: String,  default: null },
  order:   { type: Number,  default: 0 },
}, { timestamps: true });

// ── Experience ────────────────────────────────────────────────────────────────
const ExperienceSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: {
    en: { type: String, required: true },
    fr: { type: String, required: true },
  },
  description: {
    en: { type: String, required: true },
    fr: { type: String, required: true },
  },
  period: { type: String, required: true },
  order:  { type: Number, default: 0 },
}, { timestamps: true });

// Guard against model re-registration in Lambda warm starts
export const Project    = mongoose.models.Project    || mongoose.model('Project',    ProjectSchema);
export const Experience = mongoose.models.Experience || mongoose.model('Experience', ExperienceSchema);
