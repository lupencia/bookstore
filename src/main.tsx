import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router';
import './index.css'
import { Home } from './Home.tsx';
import Card from './components/Card.tsx';
import App from './App.tsx';

const router = createBrowserRouter([
  {
  path: '/',
  Component: App,
  children:[
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/card',
      element: <Card/>
    },
  ] 
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
