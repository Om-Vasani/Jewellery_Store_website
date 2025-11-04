import React from 'react'
export default function ProductCard({product, onAsk}){
  return (
    <div className="card">
      <div style={{height:140,borderRadius:10,background:'linear-gradient(135deg,var(--gold),#f4e4a6)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:48}}>{product.icon}</div>
      <div style={{marginTop:10}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div style={{fontWeight:700}}>{product.name}</div>
          <div style={{color:'var(--gold)',fontWeight:700}}>{product.price}</div>
        </div>
        <div style={{color:'var(--muted)',marginTop:8}}>{product.desc}</div>
      </div>
      <div style={{marginTop:10,display:'flex',gap:8}}>
        <button className="btn" onClick={()=>alert(`${product.name} — ${product.desc} — ${product.price}`)}>Quick View</button>
        <button className="btn secondary" onClick={()=>onAsk(product.name)}>Ask AI</button>
      </div>
    </div>
  )
}
