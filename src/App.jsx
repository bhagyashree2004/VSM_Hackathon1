import './App.css'
import Navbar from './components/Navbar.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home.jsx'
import Compare from  './components/Compare.jsx'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar/><Home/></>
    },
    {
      path: '/compare',
      element: <><Navbar/><Compare/></>
    },
   
  ])

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App


