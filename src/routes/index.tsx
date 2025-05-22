
import { RouteObject } from 'react-router-dom';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Products from '@/pages/Products';
import Cases from '@/pages/Cases';
import Pricing from '@/pages/Pricing';
import NotFound from '@/pages/NotFound';

/**
 * Application route configuration
 */
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/cases',
    element: <Cases />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
  // Catch all unmatched routes, show 404 page
  {
    path: '*',
    element: <NotFound />,
  },
];

/**
 * Route path constants
 */
export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  CASES: '/cases',
  ABOUT: '/about',
  PRICING: '/pricing',
};
