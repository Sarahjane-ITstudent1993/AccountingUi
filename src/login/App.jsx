import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {
    const router = createBrowserRouter([
      {
         path: '/login',
         element: <h1>Login page </h1>
      }
    ])
  
    return (
      
     <RouterProvider router ={router}>
  
     </RouterProvider>
    )
  }
  
  export default App
  