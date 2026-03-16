"use client";
import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askQuestion = async () => {
    const res = await fetch("http://localhost:5000/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question })
    });

    const data = await res.json();
    setAnswer(data.answer);
  };

  return (
    <div style={{padding:40,fontFamily:"Arial"}}>
      <h2>AI Knowledge Base Assistant</h2>

      <textarea
        style={{width:"100%",height:120}}
        placeholder="Ask a question about uploaded documents"
        value={question}
        onChange={(e)=>setQuestion(e.target.value)}
      />

      <br/><br/>
      <button onClick={askQuestion}>Ask AI</button>

      <div style={{marginTop:30}}>
        <b>Answer:</b>
        <p>{answer}</p>
      </div>
    </div>
  );
}
