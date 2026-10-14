import React, { useState, useEffect, useRef } from 'react';
import { X, Send, PhoneCall, Sparkles, Mail, ChevronRight } from 'lucide-react';

export default function AiSalesBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatStage, setChatStage] = useState<'COLLECT' | 'CHAT' | 'HANDOFF'>('COLLECT');
  
  // Lead Capture State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');
  
  // Chat State
  const [messages, setMessages] = useState<{sender: 'bot'|'user', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [turnCount, setTurnCount] = useState(0);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const WHATSAPP_NUMBER = '2348067802410';
  const SALES_EMAIL = 'sales@candelaenergygroup.com';

  const productCategories = [
    "Smart Meters & CIU",
    "HES & AMI Software",
    "Telemetry & IIoT",
    "Power Share Vending",
    "Distributed Solar & Mini-Grids",
    "Transformer Services",
    "General Inquiry"
  ];

  // Auto-scroll chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, chatStage]);

  // Listen for clicks from the Catalogue page ("Talk to Naya" buttons)
  useEffect(() => {
    const handleOpenNaya = (e: any) => {
      setIsOpen(true);
      if (e.detail?.product) {
        if (chatStage === 'COLLECT') {
          setInterest(e.detail.product);
        } else {
          handleInboundMessage(`I would like more information about the ${e.detail.product}`);
        }
      }
    };
    window.addEventListener('open-naya', handleOpenNaya);
    return () => window.removeEventListener('open-naya', handleOpenNaya);
  }, [chatStage]);

  const handleStartChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !interest) return;
    
    // 1. Instantly transition to the chat interface
    setChatStage('CHAT');
    const firstName = name.split(' ')[0];
    setMessages([
      { sender: 'bot', text: `Thanks, ${firstName}! I see you're interested in ${interest}. What specific details or requirements are you looking for today?` }
    ]);

    // 2. Silent background lead capture via Formspree
    try {
      await fetch('https://formspree.io/f/mqpeyvpo', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          subject: `🔥 New AI Lead: ${name} is interested in ${interest}`,
          name: name,
          email: email,
          interest: interest,
          status: 'Captured via Naya Pre-Chat'
        })
      });
    } catch (error) {
      console.error("Silent lead capture failed, but chat continues.", error);
    }
  };

  const handleInboundMessage = (text: string) => {
    if (!text.trim()) return;
    
    setMessages(prev => [...prev, { sender: 'user', text }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const newTurnCount = turnCount + 1;
      setTurnCount(newTurnCount);

      if (newTurnCount >= 3) {
        // Trigger handoff after 3 user replies
        setChatStage('HANDOFF');
        setMessages(prev => [...prev, { sender: 'bot', text: "It sounds like you have specific technical requirements. To ensure you get accurate pricing and engineering specs, I'm going to pass this chat over to our human sales team. Please use the secure links below to continue!" }]);
      } else {
        // Dynamic conversational filler for turns 1 and 2
        let botReply = "";
        if (newTurnCount === 1) {
          botReply = `Got it. Our ${interest || 'solutions'} are fully customizable for the Nigerian market. Are you looking to deploy this for a single facility, or is this a larger multi-site rollout?`;
        } else {
          botReply = "Understood. That's a scenario our engineering team handles frequently. Do you have an estimated timeline or capacity requirement mapped out yet?";
        }
        setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
      }
    }, 1200);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    handleInboundMessage(input);
  };

  const redirectToWhatsApp = () => {
    const text = encodeURIComponent(`Hello Candela Team. My name is ${name} (${email}). I was speaking with your AI regarding ${interest}, and I would like to discuss my project further.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const redirectToEmail = () => {
    const subject = encodeURIComponent(`Website Inquiry: ${interest} - ${name}`);
    const body = encodeURIComponent(`Hello Candela Sales Team,\n\nI was browsing your website and speaking with Naya regarding ${interest}.\n\nName: ${name}\nEmail: ${email}\n\nI would like to request more technical details and pricing regarding my project.\n\nThank you.`);
    window.location.href = `mailto:${SALES_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl flex items-center gap-3 transition-all transform hover:scale-105 border border-red-500/30 group"
          aria-label="Open Naya Assistant"
        >
          <Sparkles className="w-6 h-6 animate-pulse" />
          <span className="font-medium hidden md:inline text-sm">Chat with Naya</span>
        </button>
      ) : (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-80 md:w-96 flex flex-col overflow-hidden transition-all">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-4 border-b border-slate-700 flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
              <div>
                <h3 className="font-semibold text-sm text-slate-100">Naya</h3>
                <p className="text-xs text-slate-400">Virtual Sales Assistant</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* STAGE 1: Lead Capture Form */}
          {chatStage === 'COLLECT' && (
            <div className="p-6 bg-slate-950 flex flex-col gap-4">
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 text-sm text-slate-300 mb-2">
                Hello! I can help you explore Candela's solutions. Before we begin, please share your details so I can assist you better.
              </div>
              <form onSubmit={handleStartChat} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-red-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-red-500 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">Primary Interest</label>
                  <select 
                    required
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-red-500 transition-colors appearance-none"
                  >
                    <option value="" disabled>Select a product category...</option>
                    {productCategories.map((cat, i) => (
                      <option key={i} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <button 
                  type="submit"
                  className="mt-2 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm shadow-lg shadow-red-600/20"
                >
                  Start Conversation <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}

          {/* STAGE 2 & 3: Chat Interface */}
          {chatStage !== 'COLLECT' && (
            <>
              <div className="p-4 h-80 overflow-y-auto flex flex-col gap-4 bg-slate-950 text-sm">
                {messages.map((m, idx) => (
                  <div key={idx} className={`p-3 rounded-xl max-w-[85%] leading-relaxed ${m.sender === 'user' ? 'bg-slate-700 text-white self-end ml-auto' : 'bg-slate-800 border border-slate-700 text-slate-200 self-start shadow-md'}`}>
                    {m.text}
                  </div>
                ))}
                
                {isTyping && (
                  <div className="bg-slate-800 border border-slate-700 text-slate-400 p-3 rounded-xl max-w-[85%] self-start flex items-center gap-1.5 shadow-md w-16 h-10">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Handoff Buttons appear prominently when chatStage is HANDOFF */}
              {chatStage === 'HANDOFF' && (
                <div className="px-4 py-4 bg-slate-900 border-t border-slate-700 flex flex-col gap-3 z-10 shadow-[0_-10px_20px_rgba(0,0,0,0.3)]">
                  <span className="text-xs text-slate-300 text-center font-medium block">
                    Tap below to transfer this context to our team:
                  </span>
                  <div className="flex gap-2 justify-center">
                    <button onClick={redirectToWhatsApp} className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-3 px-3 rounded-lg transition-colors shadow-lg shadow-emerald-900/50">
                      <PhoneCall className="w-4 h-4" /> WhatsApp Team
                    </button>
                    <button onClick={redirectToEmail} className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-3 px-3 rounded-lg transition-colors shadow-lg shadow-blue-900/50">
                      <Mail className="w-4 h-4" /> Email Sales
                    </button>
                  </div>
                </div>
              )}

              {/* Chat Input (Disabled during HANDOFF) */}
              <form onSubmit={handleSend} className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={chatStage === 'HANDOFF' ? "Chat ended." : "Type your reply..."}
                  className="flex-grow bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-red-500 disabled:opacity-50"
                  disabled={isTyping || chatStage === 'HANDOFF'}
                />
                <button 
                  type="submit" 
                  disabled={!input.trim() || isTyping || chatStage === 'HANDOFF'}
                  className="bg-red-600 hover:bg-red-500 disabled:opacity-50 disabled:hover:bg-red-600 text-white p-2 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
}