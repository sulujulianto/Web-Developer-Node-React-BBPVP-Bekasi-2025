const mongoose = require('mongoose');

const TrainingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    shortDescription: { type: String },
    description: { type: String },
    level: { type: String },
    duration: { type: String },
    price: { type: Number },
    coverImagePath: { type: String },
    isActive: { type: Boolean, default: true },
    materials: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Material' }],
    instructors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Instructor' }]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Training', TrainingSchema);
