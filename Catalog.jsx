import React, {useEffect, useState} from 'react'
import ProductCard from '../components/ProductCard'
import { fetchProducts } from '../firebase'

export default function Catalog(){
  const [products,setProducts] = useState([])
  useEffect(()=>{
    async function load(){ 
      const p = await fetchProducts().catch(()=>[])
      if(p.length) setProducts(p)
      else setProducts([
        {id:1,name:'Diamond Ring',price:'₹85,000',desc:'Solitaire diamond ring',icon:'💍'},
        {id:2,name:'22K Gold Necklace',price:'₹45,000',desc:'Traditional necklace',icon:'📿'}
      ])
    }
    load()
  },[])
  function handleAsk(name){ alert('AI: ' + name + ' — contact us for price & customization') }
  return (
    <section className="section container" style={{display:'block'}}>
      <h2>Our Collection</h2>
      <div className="grid">{products.map(p=> <ProductCard key={p.id} product={p} onAsk={handleAsk} />)}</div>
    </section>
  )
}
