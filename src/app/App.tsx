import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

/*
  Root app component. Houses global providers and router.
*/
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
