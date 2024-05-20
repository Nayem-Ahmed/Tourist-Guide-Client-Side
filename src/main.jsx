import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router.jsx'
import AuthProviders from './Providers/AuthProviders.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ParallaxProvider } from 'react-scroll-parallax'
import { QueryClientProvider,QueryClient} from '@tanstack/react-query'
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <QueryClientProvider client={queryClient}>

        <ParallaxProvider>
          <RouterProvider router={router}></RouterProvider>
          <ToastContainer />
        </ParallaxProvider>
      </QueryClientProvider>
    </AuthProviders>
  </React.StrictMode>,
)
