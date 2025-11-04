import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(){  
  return (
    <header className="topbar">
      <div className="container nav">
        <div style={{display:'flex',alignItems:'center',gap:12,cursor:'pointer'}} onClick={()=>window.location.href='/' }>
          <div className="logo-mark">A</div>
          <div>
            <div style={{fontWeight:700}}>Amidip Jewellers</div>
            <div style={{fontSize:12,color:'var(--muted)'}}>Varachha Road, Surat</div>
          </div>
        </div>
        <nav>
          <div className="nav-links">
            <NavLink to="/" end className={({isActive})=> isActive? 'active':''}>Home</NavLink>
            <NavLink to="/catalog" className={({isActive})=> isActive? 'active':''}>Catalog</NavLink>
            <NavLink to="/about" className={({isActive})=> isActive? 'active':''}>About</NavLink>
            <NavLink to="/contact" className={({isActive})=> isActive? 'active':''}>Contact</NavLink>
            <NavLink to="/admin" className={({isActive})=> isActive? 'active':''}>Admin</NavLink>
          </div>
        </nav>
      </div>
    </header>
  )
}
