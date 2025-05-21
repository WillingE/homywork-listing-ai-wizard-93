import { RouteObject } from 'react-router-dom';
import Index from '@/pages/Index';
import About from '@/pages/About';
import NotFound from '@/pages/NotFound';

/**
 * 应用路由配置
 */
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/about',
    element: <About />,
  },
  // 添加其他路由 - 示例:
  // {
  //   path: '/contact',
  //   element: <Contact />,
  // },
  
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
  ABOUT: '/about',
  // 添加其他路由常量
  // CONTACT: '/contact',
}; 