import React, {useState, useRef, useEffect} from 'react'

export default function Chat(){
  const [open,setOpen] = useState(false)
  const [messages,setMessages] = useState([{role:'ai',text:'Hello! Ask about prices, gold, diamonds or custom design.'}])
  const inputRef = useRef()
  const bodyRef = useRef()

  useEffect(()=>{ if(bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight },[messages,open])

  async function send(text){
    if(!text) return
    setMessages(prev=>[...prev,{role:'user',text}])
    inputRef.current.value=''
    try{
      const res = await fetch('/api/openai', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({prompt: text})
      })
      const data = await res.json()
      setMessages(prev=>[...prev,{role:'ai',text: data.text || 'Sorry, no response.'}])
    }catch(e){
      setMessages(prev=>[...prev,{role:'ai',text: 'Chat failed. Try again later.'}])
    }
  }

  return (
    <>
      <div className="chat-toggle" onClick={()=>setOpen(!open)}>💬</div>
      <div className={`chat-widget ${open? 'open': ''}`} role="dialog" aria-label="Chat assistant">
        <div style={{background:'linear-gradient(90deg,var(--gold),#b8932f)',padding:12,color:'#111',fontWeight:700}}>Jewelry Assistant</div>
        <div style={{padding:12,flex:1,overflow:'auto',display:'flex',flexDirection:'column',gap:8}} ref={bodyRef}>
          {messages.map((m,i)=> (<div key={i} style={{alignSelf: m.role==='user'? 'flex-end':'flex-start', background: m.role==='user'? 'var(--gold)':'#f4f4f6', color:'#111', padding:8, borderRadius:8}}>{m.text}</div>))}
        </div>
        <div style={{padding:12,borderTop:'1px solid #eee',display:'flex',gap:8}}>
          <input ref={inputRef} onKeyDown={(e)=>{ if(e.key==='Enter') send(e.target.value) }} placeholder="Type your question..." style={{flex:1,padding:8,borderRadius:8,border:'1px solid #eee'}} />
          <button className="btn" onClick={()=>send(inputRef.current.value)}>Send</button>
        </div>
      </div>
    </>
  )
}
