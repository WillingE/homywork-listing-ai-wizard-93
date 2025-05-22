
import { RouteObject } from 'react-router-dom';
import Index from '@/pages/Index';
import About from '@/pages/About';
import NotFound from '@/pages/NotFound';
import Products from '@/pages/Products';
import CaseStudies from '@/pages/CaseStudies';
import AboutUs from '@/pages/AboutUs';
import Pricing from '@/pages/Pricing';

/**
 * 应用路由配置
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
    path: '/case-studies',
    element: <CaseStudies />,
  },
  {
    path: '/about-us',
    element: <AboutUs />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
  {
    path: '/about',
    element: <About />,
  },
  // 捕获所有未匹配的路由，显示404页面
  {
    path: '*',
    element: <NotFound />,
  },
];

/**
 * 路由路径常量
 */
export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  CASE_STUDIES: '/case-studies',
  ABOUT_US: '/about-us',
  PRICING: '/pricing',
  ABOUT: '/about',
};
