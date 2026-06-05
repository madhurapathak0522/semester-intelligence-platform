import React, { useState } from 'react';

const AIChat = () => {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "Hello! I am your SiliconPath Advising Assistant. Ask me anything about B.Tech ECE subjects, prerequisite pathways, or semester syllabus audits."
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  // Interactive B.Tech ECE query response matches
  const getAIResponse = (userText) => {
    const text = userText.toLowerCase();
    
    if (text.includes('dsp') || text.includes('digital signal processing')) {
      return "DSP (Digital Signal Processing) is a key Semester 6 core subject. Its main prerequisite is PTSP (Probability Theory & Stochastic Processes) from Semester 3. Make sure you are comfortable with Z-transforms and Fourier transforms before starting DSP.";
    }

    if (text.includes('mpmc') || text.includes('microprocessor') || text.includes('microcontroller')) {
      return "MPMC (Microprocessors & Microcontrollers) is scheduled in Semester 5. You must clear DS/DSD (Digital System Design/Digital Electronics) in Semester 3 & 4 before taking MPMC, as it builds directly on logic registers and bus timings.";
    }
    
    if (text.includes('vlsi') || text.includes('ddvl') || text.includes('hdl')) {
      return "For the Digital Systems & VLSI track, the pathway is: DS (Sem 3) -> DSD (Sem 4) -> DDVL (Digital Design using HDL, Sem 5) -> Advanced VLSI Design (Sem 7). Learning Verilog/VHDL during Semester 4 will give you a major head start.";
    }

    if (text.includes('prereq') || text.includes('prerequisite') || text.includes('pathway')) {
      return "B.Tech ECE has tight prerequisite chains. For example, EMTL (Electromagnetics, Sem 4) is a prerequisite for AWP (Antennas & Wave Propagation, Sem 6). Similarly, ADC (Communications, Sem 4) leads directly to FOC (Fiber Optic Communications, Sem 6).";
    }

    if (text.includes('credits') || text.includes('credit load')) {
      return "In B.Tech ECE, a standard semester load ranges between 18 to 22 credits, containing 5 theory subjects and 2 to 3 lab sessions. Balancing high-lab load semesters (like Semester 5 with MPMC & LDIC labs) is crucial to keeping a high CGPA.";
    }

    return "Interesting question! For B.Tech ECE curriculum planning, I suggest looking into prerequisite chains like DS -> MPMC or EMTL -> AWP. Let me know if you want detailed recommendations for any specific subject or track!";
  };

  const handleSend = (textToSend) => {
    if (!textToSend.trim()) return;

    const userMsg = { sender: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');

    setTimeout(() => {
      const responseText = getAIResponse(textToSend);
      setMessages(prev => [...prev, { sender: 'ai', text: responseText }]);
    }, 400);
  };

  const suggestions = [
    "What are the prereqs for DSP?",
    "Which subjects lead to VLSI / DDVL?",
    "Prerequisite pathway for AWP?"
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '24px', height: 'calc(100vh - 180px)' }}>
      
      {/* Left Column: Context Info */}
      <div className="dashboard-card" style={{ animation: 'none', display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
        <div className="card-label">B.TECH ADVISER SCOPE</div>
        <h3 style={{ fontSize: '1rem', fontWeight: '800' }}>Quick Context</h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
          This adviser tracks B.Tech ECE syllabus listings, prerequisite sequences (e.g. EMTL to AWP), and active credit distributions.
        </p>
        
        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px', marginTop: 'auto' }}>
          <span className="badge" style={{ display: 'block', textAlign: 'center', backgroundColor: 'var(--primary)' }}>
            AI Advisory Beta
          </span>
        </div>
      </div>

      {/* Right Column: Chat window */}
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '16px' }}>
        
        {/* Chat History */}
        <div className="dashboard-card" style={{ animation: 'none', flexGrow: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px', backgroundColor: 'var(--bg-surface-hover)' }}>
          <div className="card-label">CONVERSATION LOG</div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1, minHeight: '200px' }}>
            {messages.map((msg, index) => (
              <div 
                key={index} 
                style={{
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '75%',
                  backgroundColor: msg.sender === 'user' ? 'var(--primary)' : 'var(--bg-surface)',
                  color: msg.sender === 'user' ? '#ffffff' : 'var(--text-primary)',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  border: msg.sender === 'ai' ? '1px solid var(--border-color)' : 'none',
                  fontSize: '0.85rem',
                  lineHeight: '1.5'
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>
        </div>

        {/* Suggestion Chips */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {suggestions.map((sug, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(sug)}
              style={{
                fontSize: '0.75rem',
                color: 'var(--primary)',
                border: '1px solid rgba(47, 98, 255, 0.2)',
                backgroundColor: 'rgba(47, 98, 255, 0.04)',
                padding: '6px 12px',
                borderRadius: 'var(--radius-full)'
              }}
            >
              {sug}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }} 
          style={{ display: 'flex', gap: '10px' }}
        >
          <input
            type="text"
            placeholder="Type your B.Tech advising question (e.g. What are the prereqs for DSP?)..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{
              flexGrow: 1,
              padding: '14px',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--text-primary)',
              fontSize: '0.85rem',
              outline: 'none'
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: 'var(--primary)',
              color: 'white',
              padding: '0 24px',
              borderRadius: 'var(--radius-sm)',
              fontWeight: '700',
              fontSize: '0.85rem'
            }}
          >
            Send
          </button>
        </form>

      </div>

    </div>
  );
};

export default AIChat;
