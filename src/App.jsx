import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
       path: '/',
       element: <h1>Accounting System </h1>
    }
  ])

  return (
    
   <RouterProvider router ={router}>

   </RouterProvider>
  )
}

export default App
