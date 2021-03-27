import SearchPage from '../pages/index';
import NganuPage from '../pages/detail';

export const MainRoutes = [
  {
    path: '/',
    exact: true,
    component: SearchPage,
  },
  {
    path: '/detail/:id',
    exact: true,
    component: NganuPage,
  },
];
