import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

import './index.css'
import {RouterProvider, createBrowserRouter,Route, createRoutesFromElements} from 'react-router-dom'

/*const router = createBrowserRouter ([]
  {
  path: '/',
  element: <Layout/>,
  childern: [
  {
  path: '',
  element: <Home/>
  },
  {
    path: "about",
    element: <About/>
  },
  {
    path: "contact",
    element: <Contact/>
  },
]
})*/
const router = createBrowserRouter(

  createRoutesFromElements (

    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      
       
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
