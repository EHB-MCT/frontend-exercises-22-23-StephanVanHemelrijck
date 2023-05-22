import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Content, { loader as studentLoader } from './components/Content';
import { action as sidebarAction, loader as sidebarLoader } from './components/Sidebar';
import './index.css';
import About from './routes/About';
import Error from './routes/Error';
import Home from './routes/Home';
import StudentForm, { action as formAction } from './routes/StudentForm';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
        loader: sidebarLoader,
        action: sidebarAction,
        children: [
            {
                path: '/student/:id',
                element: <Content />,
                loader: studentLoader,
            },
            {
                path: '/newStudent',
                element: <StudentForm />,
                action: formAction,
            },
        ],
    },
    {
        path: '/about',
        element: <About />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
