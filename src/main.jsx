import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import ErroPage from './pages/404.jsx'
import ProductsPage from './pages/products.jsx'


const router = createBrowserRouter ([

  {
    path: "/",
    element: <LoginPage/>,
    errorElement:<ErroPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/products",
    element: <ProductsPage />
  },
  

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
