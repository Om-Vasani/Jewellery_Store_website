import React, {useState} from 'react'
import { addProduct } from './firebase'

export default function Admin(){
  const [status,setStatus] = useState('')
  async function handleAdd(e){
    e.preventDefault()
    const fd = new FormData(e.target)
    const product = { name: fd.get('name'), price: fd.get('price'), desc: fd.get('desc'), icon: '💍' }
    setStatus('Adding...')
    try{
      await addProduct(product)
      setStatus('Product added')
      e.target.reset()
    }catch(e){
      setStatus('Failed')
    }
    setTimeout(()=>setStatus(''),2000)
  }
  return (
    <section className="section container">
      <h2>Admin Panel</h2>
      <form onSubmit={handleAdd} style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,maxWidth:720}}>
        <input name="name" placeholder="Product name" />
        <input name="price" placeholder="Price (₹)" />
        <input name="desc" placeholder="Short description" style={{gridColumn:'1 / -1'}} />
        <select name="category" style={{gridColumn:'1 / -1'}}>
          <option value="rings">Rings</option><option value="necklaces">Necklaces</option><option value="earrings">Earrings</option><option value="bracelets">Bracelets</option>
        </select>
        <div style={{gridColumn:'1 / -1'}}><button className="btn" type="submit">Add Product</button></div>
      </form>
      {status && <div style={{marginTop:8}}>{status}</div>}
    </section>
  )
}
