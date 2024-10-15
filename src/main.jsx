import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Coursepage from './pages/Coursepage';
import Login from './components/Login';
import Signup from './components/Signup';
import CourseDetail from './components/CourseDetail'
import Contact from './components/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="" element={<Homepage />}/>
        <Route path="/courses" element={<Coursepage />}/>
        <Route path="/courses/:courseId" element={<CourseDetail />}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>  
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
