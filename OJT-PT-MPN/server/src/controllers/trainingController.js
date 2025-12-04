import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Training from '../models/Training.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsBase = path.join(__dirname, '..', '..');

const buildImagePath = (filename) => `/uploads/trainings/${filename}`;

const removeFileIfExists = (filePath) => {
  try {
    if (filePath && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  } catch (err) {
    console.warn('Could not remove file', filePath, err.message);
  }
};

export const getPublicTrainings = async (req, res) => {
  try {
    const trainings = await Training.find({ published: true }).sort({ createdAt: -1 }).lean();
    res.json(trainings);
  } catch (err) {
    res.status(500).json({ message: 'Failed to load trainings' });
  }
};

export const listTrainings = async (req, res) => {
  try {
    const trainings = await Training.find().sort({ createdAt: -1 }).lean();
    res.json(trainings);
  } catch (err) {
    res.status(500).json({ message: 'Failed to list trainings' });
  }
};

export const createTraining = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) {
      data.imageUrl = buildImagePath(req.file.filename);
    }
    const training = await Training.create({
      title: data.title,
      summary: data.summary,
      description: data.description,
      category: data.category,
      level: data.level,
      price: data.price,
      duration: data.duration,
      startDate: data.startDate,
      endDate: data.endDate,
      location: data.location,
      imageUrl: data.imageUrl,
      tags: data.tags ? data.tags.split(',').map((tag) => tag.trim()).filter(Boolean) : [],
      published: data.published !== 'false'
    });
    res.status(201).json(training);
  } catch (err) {
    console.error('Create training error', err);
    res.status(500).json({ message: 'Failed to create training' });
  }
};

export const updateTraining = async (req, res) => {
  const { id } = req.params;
  try {
    const existing = await Training.findById(id);
    if (!existing) {
      return res.status(404).json({ message: 'Training not found' });
    }

    if (req.file) {
      const relativePath = existing.imageUrl?.startsWith('/')
        ? existing.imageUrl.slice(1)
        : existing.imageUrl;
      const absolutePath = existing.imageUrl ? path.join(uploadsBase, relativePath || '') : null;
      removeFileIfExists(absolutePath);
      existing.imageUrl = buildImagePath(req.file.filename);
    }

    if (req.body.tags) {
      existing.tags = req.body.tags.split(',').map((tag) => tag.trim()).filter(Boolean);
    }

    const updatableFields = ['title', 'summary', 'description', 'category', 'level', 'price', 'duration', 'startDate', 'endDate', 'location', 'published'];
    updatableFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        existing[field] = req.body[field];
      }
    });

    await existing.save();
    res.json(existing);
  } catch (err) {
    console.error('Update training error', err);
    res.status(500).json({ message: 'Failed to update training' });
  }
};

export const deleteTraining = async (req, res) => {
  const { id } = req.params;
  try {
    const training = await Training.findById(id);
    if (!training) {
      return res.status(404).json({ message: 'Training not found' });
    }

    const relativePath = training.imageUrl?.startsWith('/') ? training.imageUrl.slice(1) : training.imageUrl;
    const absolutePath = training.imageUrl ? path.join(uploadsBase, relativePath || '') : null;
    await training.deleteOne();
    removeFileIfExists(absolutePath);

    res.json({ message: 'Training removed' });
  } catch (err) {
    console.error('Delete training error', err);
    res.status(500).json({ message: 'Failed to delete training' });
  }
};
