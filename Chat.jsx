import React, { useState } from "react";

export default function Chat() {
  const [text, setText] = useState("");
  const [msgs, setMsgs] = useState([
    { id: 1, from: "bot", text: "Hi 👋! How can I help you today? Ask about gold, diamonds, or custom jewellery." },
  ]);

  const send = () => {
    if (!text.trim()) return;
    setMsgs((prev) => [...prev, { id: Date.now(), from: "user", text }]);
    setText("");
    setTimeout(() => {
      setMsgs((prev) => [
        ...prev,
        { id: Date.now() + 1, from: "bot", text: "Thanks for your query. Our team will reach you shortly 💎" },
      ]);
    }, 800);
  };

  return (
    <section className="fixed bottom-4 right-4 bg-white shadow-xl rounded-2xl w-80">
      <div className="p-3 bg-yellow-500 text-white rounded-t-2xl font-semibold">
        💬 Jewelry Assistant
      </div>
      <div className="p-3 h-64 overflow-y-auto space-y-2">
        {msgs.map((m) => (
          <div
            key={m.id}
            className={`p-2 rounded-xl text-sm ${
              m.from === "user" ? "bg-yellow-100 text-right" : "bg-gray-100 text-left"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 border-t p-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ask something..."
          className="flex-1 border rounded-full px-3 py-1 text-sm"
          onKeyDown={(e) => e.key === "Enter" && send()}
        />
        <button onClick={send} className="text-yellow-600 font-bold">
          ➤
        </button>
      </div>
    </section>
  );
}
