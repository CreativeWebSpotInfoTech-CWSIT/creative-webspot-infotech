import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from '../layouts/MainLayout';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Services = lazy(() => import('../pages/Services'));
const Projects = lazy(() => import('../pages/Projects'));
const Contact = lazy(() => import('../pages/Contact'));

const Loader = () => (
    <div className="h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const withSuspense = (Component) => (
    <Suspense fallback={<Loader />}>
        <Component />
    </Suspense>
);

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: withSuspense(Home) },
            { path: 'about', element: withSuspense(About) },
            { path: 'services', element: withSuspense(Services) },
            { path: 'projects', element: withSuspense(Projects) },
            { path: 'contact', element: withSuspense(Contact) },
        ],
    },
]);