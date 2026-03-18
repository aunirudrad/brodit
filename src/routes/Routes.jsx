import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';

async function servicesLoader() {
  const res = await fetch('/services.json');
  if (!res.ok) throw new Error('Failed to load services');
  return res.json();
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: servicesLoader
      }
    ]
  }
]);

export default router;