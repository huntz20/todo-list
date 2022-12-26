import React from 'react'
import { createRoot } from "react-dom/client";
import App from './App'
import './assets/main.css'
import {
    createBrowserRouter,
    RouterProvider,
    Navigate
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '',
        element:  <Navigate to='/v1' />
    },
    {
        path: "/v1",
        element: <App />,
    },
]);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
