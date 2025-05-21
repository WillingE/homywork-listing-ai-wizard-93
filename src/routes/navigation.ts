import { useNavigate } from 'react-router-dom';
import { ROUTES } from './index';

/**
 * 导航Hook，提供应用内导航便捷方法
 */
export const useAppNavigation = () => {
  const navigate = useNavigate();

  return {
    /**
     * 导航到首页
     */
    goToHome: () => navigate(ROUTES.HOME),

    /**
     * 导航到指定路径
     */
    goTo: (path: string) => navigate(path),

    /**
     * 返回上一页
     */
    goBack: () => navigate(-1),
  };
}; 