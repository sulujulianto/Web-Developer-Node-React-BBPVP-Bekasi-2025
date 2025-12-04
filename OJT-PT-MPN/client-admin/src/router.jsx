import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import AdminLayout from './layouts/AdminLayout.jsx';
import LoginPage from './pages/LoginPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import ServicesAdminPage from './pages/ServicesAdminPage.jsx';
import ServiceFormPage from './pages/ServiceFormPage.jsx';
import TrainingsAdminPage from './pages/TrainingsAdminPage.jsx';
import TrainingFormPage from './pages/TrainingFormPage.jsx';
import ContactsAdminPage from './pages/ContactsAdminPage.jsx';
import ProfileAdminPage from './pages/ProfileAdminPage.jsx';
import GalleryAdminPage from './pages/GalleryAdminPage.jsx';
import GalleryFormPage from './pages/GalleryFormPage.jsx';
import TestimonialsAdminPage from './pages/TestimonialsAdminPage.jsx';
import TestimonialFormPage from './pages/TestimonialFormPage.jsx';
import PartnersAdminPage from './pages/PartnersAdminPage.jsx';
import PartnerFormPage from './pages/PartnerFormPage.jsx';
import InstructorsAdminPage from './pages/InstructorsAdminPage.jsx';
import InstructorFormPage from './pages/InstructorFormPage.jsx';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'services', element: <ServicesAdminPage /> },
      { path: 'services/new', element: <ServiceFormPage /> },
      { path: 'services/:id', element: <ServiceFormPage /> },
      { path: 'trainings', element: <TrainingsAdminPage /> },
      { path: 'trainings/new', element: <TrainingFormPage /> },
      { path: 'trainings/:id', element: <TrainingFormPage /> },
      { path: 'contacts', element: <ContactsAdminPage /> },
      { path: 'profile', element: <ProfileAdminPage /> },
      { path: 'gallery', element: <GalleryAdminPage /> },
      { path: 'gallery/:id', element: <GalleryFormPage /> },
      { path: 'testimonials', element: <TestimonialsAdminPage /> },
      { path: 'testimonials/:id', element: <TestimonialFormPage /> },
      { path: 'partners', element: <PartnersAdminPage /> },
      { path: 'partners/:id', element: <PartnerFormPage /> },
      { path: 'instructors', element: <InstructorsAdminPage /> },
      { path: 'instructors/:id', element: <InstructorFormPage /> }
    ]
  }
]);

export default router;
