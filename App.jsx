import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import About from './pages/About'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/catalog" element={<Catalog/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
