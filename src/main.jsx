import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignInPage from './auth/sign-in'
import HomePage from './Home'
import DashboardPage from './Dashboard'
import { ClerkProvider } from '@clerk/clerk-react'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const router  = createBrowserRouter([
  {
    element:<App/> , 
    children:[
      
      {
        path:'/dashboard',
        element:<DashboardPage/>
      }
    ]
  },
  {
    path:'/',
    element:<HomePage/>
  },
  {
    path:'/auth/sign-in',
    element:<SignInPage/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
   <RouterProvider router={router}/>
   </ClerkProvider>
  </StrictMode>,
)
