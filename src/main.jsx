import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootPage from './routes/RootPage.jsx';
import MealPage, { mealLoader } from './routes/MealPage.jsx';

import '/src/assets/styles/reset.css'
import '/src/assets/styles/main.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
  },
  {
    path: '/meals/:mealId',
    element: <MealPage />,
    loader: mealLoader,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
