import SearchPage from '../pages/index';
import DetailPage from '../pages/detail';

export const MainRoutes = [
  {
    path: '/',
    exact: true,
    component: SearchPage,
  },
  {
    path: '/detail/:id',
    exact: true,
    component: DetailPage,
  },
];
