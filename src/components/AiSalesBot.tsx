import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Send, PhoneCall, Sparkles, Mail } from 'lucide-react';

export default function AiSalesBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! I am Naya, your virtual power solutions assistant. How can I help you explore our smart meters, transformers, or solar systems today?' }
  ]);
  const [input, setInput] = useState('');

  const WHATSAPP_NUMBER = '2348067802410';
  const SALES_EMAIL = 'sales@candelaenergygroup.com';

  // Listen for custom event from Catalogue page to open Naya
  useEffect(() => {
    const handleOpenNaya = (e: any) => {
      setIsOpen(true);
      if (e.detail?.product) {
        setInput(`I would like more information about the ${e.detail.product}`);
      }
    };
    
    window.addEventListener('open-naya', handleOpenNaya);
    return () => window.removeEventListener('open-naya', handleOpenNaya);
  }, []);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');

    setTimeout(() => {
      let botReply = "I can certainly help with that! For detailed pricing, custom specifications, or a formal site assessment, let's connect you directly with our sales team.";
      
      const lower = userMsg.toLowerCase();
      if (lower.includes('meter') || lower.includes('dds') || lower.includes('dtss')) {
        botReply = "We supply single-phase, three-phase, and CT-operated smart meters compliant with NEMSA standards. Would you like to connect with our team to discuss your requirements?";
      } else if (lower.includes('solar') || lower.includes('mini-grid') || lower.includes('battery')) {
        botReply = "Our distributed energy portfolio includes solar home systems, hybrid inverters, and digitally managed mini-grids. Let's connect you with our power systems team for a custom consultation!";
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    }, 800);
  };

  const redirectToWhatsApp = () => {
    const text = encodeURIComponent("Hello Candela Team, I am browsing your website and would like to discuss a power solution / product inquiry.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const redirectToEmail = () => {
    const subject = encodeURIComponent("Website Inquiry: Candela Power Solutions");
    const body = encodeURIComponent("Hello Candela Sales Team,\n\nI am reaching out from your website and would like to request more information regarding...\n\n[Please add your inquiry details here]");
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
        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl w-80 md:w-96 flex flex-col overflow-hidden transition-all">
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
              <div>
                <h3 className="font-semibold text-sm text-slate-100">Naya</h3>
                <p className="text-xs text-slate-400">Online | Instant Support</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 h-72 overflow-y-auto flex flex-col gap-3 bg-slate-950/50 text-sm">
            {messages.map((m, idx) => (
              <div key={idx} className={`p-3 rounded-xl max-w-[85%] ${m.sender === 'user' ? 'bg-red-600 text-white self-end ml-auto' : 'bg-slate-800 text-slate-200 self-start'}`}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="px-4 py-3 bg-slate-900/90 border-t border-slate-800 flex flex-col gap-2">
            <span className="text-xs text-slate-400 text-center">Connect directly with our human sales team:</span>
            <div className="flex gap-2 justify-center">
              <button onClick={redirectToWhatsApp} className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-400 text-xs font-semibold py-2 px-3 rounded-lg border border-emerald-800/40 transition-colors">
                <PhoneCall className="w-3.5 h-3.5" /> WhatsApp
              </button>
              <button onClick={redirectToEmail} className="flex-1 flex items-center justify-center gap-1.5 bg-blue-950/40 hover:bg-blue-900/60 text-blue-400 text-xs font-semibold py-2 px-3 rounded-lg border border-blue-800/40 transition-colors">
                <Mail className="w-3.5 h-3.5" /> Email
              </button>
            </div>
          </div>

          <form onSubmit={handleSend} className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Naya about meters, solar..."
              className="flex-grow bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-red-500"
            />
            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors flex items-center justify-center">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}