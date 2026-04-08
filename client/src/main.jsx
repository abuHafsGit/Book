import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './routes/Routers.jsx'
import { BookContextProvider } from './context/BookContext.jsx'



createRoot(document.getElementById('root')).render(
  <BookContextProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </BookContextProvider>
)
