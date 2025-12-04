import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const uploadRoot = process.env.UPLOAD_ROOT || 'uploads';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const trainingDir = path.join(__dirname, '..', '..', uploadRoot, 'trainings');
ensureDir(trainingDir);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, trainingDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const base = path.basename(file.originalname, ext).replace(/\s+/g, '-').toLowerCase();
    cb(null, `${base}-${Date.now()}${ext}`);
  }
});

const fileFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith('image/')) {
    cb(new Error('Only image uploads are allowed'));
  } else {
    cb(null, true);
  }
};

export const trainingUpload = multer({ storage, fileFilter, limits: { fileSize: 3 * 1024 * 1024 } });
