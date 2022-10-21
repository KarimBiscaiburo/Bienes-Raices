import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorPage from "./components/ErrorPage";

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Nosotros from './components/Inicio';
import Anuncios from './components/Inicio';
import Blog from './components/Blog';
import Contacto from './components/Contacto';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/nosotros",
        element: <Nosotros />,
      },
      {
        path: "/anuncios",
        element: <Anuncios />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contacto",
        element: <Contacto />,
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

