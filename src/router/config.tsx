import { type RouteObject } from 'react-router-dom'; // FIXED: Imported as a type
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/home/page'));
const ServicesPage = lazy(() => import('../pages/services/page'));
const GalleryPage = lazy(() => import('../pages/gallery/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const PoliciesPage = lazy(() => import('../pages/policies/page'));
const TrainingPage = lazy(() => import('../pages/training/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Use 'type RouteObject' here
const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/services',
    element: <ServicesPage />,
  },
  {
    path: '/gallery',
    element: <GalleryPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/policies',
    element: <PoliciesPage />,
  },
  {
    path: '/training',
    element: <TrainingPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;