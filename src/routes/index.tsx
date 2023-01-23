import { Navigate } from 'react-router-dom';

import MainLayout from 'src/layouts/MainLayout';
import AccountLayout from 'src/layouts/AccountLayout';

import NotFoundPage from 'src/pages/error/NotFoundPage';
import AboutPage from 'src/pages/about';

import AccountDetailPage from 'src/pages/account/detail';
import NotesListPage from 'src/pages/notes/list';
import NoteCreatePage from 'src/pages/notes/create';
import DashboardPage from 'src/pages/dashboard';

const routes = [
    {
        path: '/',
        element: <MainLayout />,
        errorElement: (<div>Error Page Component</div>),
        children: [
            {path: '*', element: <Navigate to='/404' />},
            // {path: '/', element: <div>Main View</div>},
            {path: '/', element: <NotesListPage />},
            {path: '/create', element: <NoteCreatePage />},
            {path: '/dashboard', element: <DashboardPage />},
            {path: '404', element: <NotFoundPage />},
            {path: 'account', element: <Navigate to='/account/list' />},
        ],
    },
    {
        path: 'account',
        element: <AccountLayout />,
        children: [
          {path: '*', element: <Navigate to='/404' />},
          {path: ':id', element: <AccountDetailPage />},
          {path: 'add', element: <div>Account Add View</div>},
          {path: 'list', element: <div>Account List View</div>},
        ],
    },
    {
        path: '/about',
        element: <AboutPage />,
    },
    {
        path: '/hello',
        element: <div>Hello world!</div>,
    }
];

export default routes;

