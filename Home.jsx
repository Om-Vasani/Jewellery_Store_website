import React from 'react'
import Chat from './Chat'

export default function Home(){
  return (
    <section className="section container">
      <div style={{display:'flex',gap:24,flexWrap:'wrap',alignItems:'center'}}>
        <div style={{flex:1,minWidth:260}}>
          <h1 style={{fontSize:32,margin:0}}>Timeless craftsmanship. Modern elegance.</h1>
          <p style={{color:'var(--muted)'}}>Amidip Jewellers — handcrafted gold and diamond pieces with hallmark authenticity.</p>
        </div>
        <div style={{width:360}}>
          <div style={{background:'white',padding:16,borderRadius:12,boxShadow:'0 8px 30px rgba(16,16,16,0.06)'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div><div style={{fontSize:12,color:'var(--muted)'}}>Featured</div><div style={{fontWeight:700}}>Solitaire Diamond Ring</div></div>
              <div style={{fontSize:36}}>💍</div>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',marginTop:12}}><div style={{color:'var(--muted)'}}>22K Gold / GIA-certified</div><div style={{fontWeight:700,color:'var(--gold)'}}>₹85,000</div></div>
          </div>
        </div>
      </div>
      <Chat />
    </section>
  )
}
