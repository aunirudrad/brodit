import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import Services from '../components/Services';
import ServicesPage from '../pages/ServicesPage';
import AboutUs from '../pages/AboutUs';

async function servicesLoader() {
  const res = await fetch('/servicesUpdated.json');
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
      },
      {
        path: '/services',
        element: <ServicesPage></ServicesPage>,
        loader: servicesLoader
      },
      {
        path: '/about-us',
        element: <AboutUs></AboutUs>
  
      }
    ]
  }
]);

export default router;