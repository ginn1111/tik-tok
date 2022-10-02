// Layouts
import HeaderOnly from '../Layout/HeaderOnly';

// Pages
import HomePage from '../pages/Home';
import FollowingPage from '../pages/Following';
import UploadPage from '../pages/Upload';

// Types
import type { publicRoute } from '../models';

// Public routes
export const publicRoutes: publicRoute[] = [
  { path: '/', component: HomePage },
  { path: '/following', component: FollowingPage },
  { path: '/upload', component: UploadPage, layout: HeaderOnly },
];

export const privateRoutes = [];
