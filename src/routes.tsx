import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { NotFoundPage } from './pages/404'
import { Dashboard } from './pages/app/dashboard/dashboard'
import { Transactions } from './pages/app/transactions/transactions'
import { Login } from './pages/auth/login'
import { Register } from './pages/auth/register'
import { Error } from './pages/error'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/transactions', element: <Transactions /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
