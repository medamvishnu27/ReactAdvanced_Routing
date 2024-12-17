import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Footer from './components/Footer'
import Pagenotfound from './pages/Pagenotfound'

const App = () => {
  return (
    <>
      {/*nav bar components */}
      <Navbar/>
      {/*Routing setup for the app */}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Products" element={<Products />} />
        <Route path="*" element={<Pagenotfound />} />

        

      </Routes>
    </>
  )
}

export default App