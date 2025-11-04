import React, { useState } from "react";

export default function Chat(){
  const [text, setText] = useState("");
  const [msgs, setMsgs] = useState([
    { id:1, from: "bot", text: "Hello! Ask about prices, gold, diamonds or custom design." }
  ]);
  const send = () => {
    if(!text.trim()) return;
    setMsgs(prev => [...prev, { id: Date.now(), from:"user", text }]);
    setText("");
    // simulate bot failure/success:
    setTimeout(() => {
      setMsgs(prev => [...prev, { id: Date.now()+1, from:"bot", text: "Chat failed. Try again later." }]);
    }, 700);
  };

  return (
    <section className="chat-wrap">
      <h3 className="chat-title">Jewelry Assistant</h3>
      <div className="chat-window">
        {msgs.map(m => (
          <div key={m.id} className={`chat-bubble ${m.from}`}>
            {m.text}
          </div>
        ))}
      </div>

      <div className="chat-input-row">
        <input
          value={text}
          onChange={(e)=>setText(e.target.value)}
          placeholder="Type your question..."
          onKeyDown={(e)=> e.key === "Enter" && send()}
        />
        <button onClick={send} className="btn-outline">Send</button>
      </div>
    </section>
  );
      }
