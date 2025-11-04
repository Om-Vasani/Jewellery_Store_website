import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Catalog from './Catalog'
import About from './About'
import Contact from './Contact'
import Admin from './Admin'
import Footer from './Footer'

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
      <div style={{fontFamily: 'sans-serif', padding: 20}}>
      <h1>Jewellery Store Demo App</h1>
      <p>If you see this page, build entry is correct.</p>
    </div>
      <Footer />
    </div>
  )
}
