const fs = require('fs');
const path = require('path');
const multer = require('multer');

const createMulterUpload = (folderName = '') => {
  const uploadsRoot = path.join(__dirname, '..', '..', 'uploads');
  const targetDir = path.join(uploadsRoot, folderName);

  fs.mkdirSync(targetDir, { recursive: true });

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, targetDir);
    },
    filename: (req, file, cb) => {
      const timestamp = Date.now();
      const random = Math.round(Math.random() * 1e9);
      const original = (file.originalname || 'file').replace(/\s+/g, '-');
      cb(null, `${timestamp}-${random}-${original}`);
    }
  });

  const allowed = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  const fileFilter = (req, file, cb) => {
    if (!allowed.includes(file.mimetype)) {
      return cb(new Error('Only image files are allowed'));
    }
    cb(null, true);
  };

  return multer({
    storage,
    fileFilter,
    limits: { fileSize: 2 * 1024 * 1024 }
  });
};

module.exports = { createMulterUpload };
