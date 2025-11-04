import React, {useState} from 'react'
import { saveMessage } from '../firebase'

export default function Contact(){
  const [status,setStatus] = useState('')
  async function handleSubmit(e){
    e.preventDefault()
    const fd = new FormData(e.target)
    setStatus('Sending...')
    try{
      await saveMessage(fd.get('name'), fd.get('phone'), fd.get('message'))
      setStatus('Message sent!')
      e.target.reset()
    }catch(e){
      setStatus('Failed to send.')
    }
    setTimeout(()=>setStatus(''),3000)
  }
  return (
    <section className="section container">
      <h2>Contact & Bookings</h2>
      <form onSubmit={handleSubmit} style={{display:'grid',gap:8,maxWidth:720}}>
        <div style={{display:'flex',gap:8}}><input name="name" placeholder="Full name" required /><input name="phone" placeholder="Phone" required /></div>
        <textarea name="message" placeholder="Tell us your requirement..." required />
        <div style={{display:'flex',gap:8}}><button className="btn" type="submit">Send Message</button></div>
        {status && <div style={{marginTop:8}}>{status}</div>}
      </form>
    </section>
  )
}
