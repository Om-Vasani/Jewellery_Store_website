import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
  const [open,setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <button className="nav-toggle" aria-label="menu" onClick={()=>setOpen(!open)}>
            ☰
          </button>
          <div className="brand">
            <span style={{fontSize:20}}>💎</span>
            <div>
              <Link to="/" style={{textDecoration:'none',color:'#111'}}>Amidip Jewellers</Link>
              <span className="subtitle">Varachha Road, Surat</span>
            </div>
          </div>
        </div>

        <nav className="nav-links" aria-hidden={!open ? true : false}>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </div>

      {/* mobile menu */}
      {open && (
        <div style={{background:'rgba(255,255,255,0.95)', padding:'10px 16px'}}>
          <Link to="/" onClick={()=>setOpen(false)} style={{display:'block',padding:'8px 0'}}>Home</Link>
          <Link to="/catalog" onClick={()=>setOpen(false)} style={{display:'block',padding:'8px 0'}}>Catalog</Link>
          <Link to="/about" onClick={()=>setOpen(false)} style={{display:'block',padding:'8px 0'}}>About</Link>
          <Link to="/contact" onClick={()=>setOpen(false)} style={{display:'block',padding:'8px 0'}}>Contact</Link>
          <Link to="/admin" onClick={()=>setOpen(false)} style={{display:'block',padding:'8px 0'}}>Admin</Link>
        </div>
      )}
    </header>
  )
          }
