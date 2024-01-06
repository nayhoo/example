import { useRoutes } from 'react-router-dom';

import { Landing, NotFound } from '@/features/misc';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

import { useAuthStore } from '@/stores/auth';

export const AppRoutes = () => {
  const auth = useAuthStore();

  const commonRoutes = [
    { path: '/', element: <Landing /> },
    { path: '*', element: <NotFound /> },
  ];

  const routes = auth.getIsAuthenticated() ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
