const express = require('express');
const authRoutes = require('./authRoutes');
const profileRoutes = require('./profileRoutes');
const adminProfileRoutes = require('./adminProfileRoutes');
const contactRoutes = require('./contactRoutes');

const router = express.Router();

// Placeholder routers for modules not yet implemented
const createPlaceholderRouter = (name) => {
  const r = express.Router();
  r.get('/', (req, res) => res.json({ success: true, message: `${name} route placeholder` }));
  return r;
};

const servicesRoutes = createPlaceholderRouter('services');
const trainingsRoutes = createPlaceholderRouter('trainings');
const categoriesRoutes = createPlaceholderRouter('categories');
const galleryRoutes = createPlaceholderRouter('gallery');
const testimonialsRoutes = createPlaceholderRouter('testimonials');
const partnersRoutes = createPlaceholderRouter('partners');
const instructorsRoutes = createPlaceholderRouter('instructors');
const adminRoutes = createPlaceholderRouter('admin');

router.use('/api/auth', authRoutes);
router.use('/api/profile', profileRoutes);
router.use('/api/admin/profile', adminProfileRoutes);
router.use('/api/services', servicesRoutes);
router.use('/api/trainings', trainingsRoutes);
router.use('/api/categories', categoriesRoutes);
router.use('/api/gallery', galleryRoutes);
router.use('/api/testimonials', testimonialsRoutes);
router.use('/api/partners', partnersRoutes);
router.use('/api/instructors', instructorsRoutes);
router.use('/api/contact', contactRoutes);
router.use('/api/admin', adminRoutes);

module.exports = router;
