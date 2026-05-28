"use client";

import React, { useState } from 'react';

const availableDoctors = [
  { name: 'Dr. Sarah Jenkins', spec: 'Cardiologist', status: 'Available', time: '10 min wait' },
  { name: 'Dr. Michael Chen', spec: 'General Physician', status: 'In Session', time: '45 min wait' },
  { name: 'Dr. Emily Rostova', spec: 'Dermatologist', status: 'Available', time: 'No wait' },
];

export default function FloatingConsultation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    alert(`Consultation Request Sent: "${inputValue}"\n\n(A doctor will review your symptoms shortly)`);
    setInputValue('');
  };

  const handleBook = (docName: string) => {
    alert(`Booking consultation with ${docName}...`);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start pointer-events-none" style={{ zIndex: 9999 }}>
      {/* Chat/Booking Window Overlay */}
      <div 
        className={`mb-4 w-[350px] max-w-[calc(100vw-3rem)] pointer-events-auto bg-white rounded-3xl shadow-2xl border border-blue-100 overflow-hidden flex flex-col transition-all duration-300 origin-bottom-left ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 pointer-events-none translate-y-4'}`}
        style={{ height: '480px', maxHeight: 'calc(100vh - 8rem)' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
              <span className="material-symbols-outlined text-white text-lg">stethoscope</span>
            </div>
            <div>
              <h3 className="font-bold text-sm">Live Consultation</h3>
              <p className="text-[10px] text-blue-100 uppercase tracking-widest">Connect with Doctors</p>
            </div>
          </div>
          <button 
            onClick={toggleOpen}
            className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 bg-slate-50 flex flex-col gap-4">
          <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 text-sm text-slate-700 leading-relaxed rounded-tr-none">
            Hello! I can help you find an available specialist or book a consultation right now. What kind of doctor are you looking for?
          </div>
          
          <div className="mt-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Available Now</h4>
            {availableDoctors.map((doc, idx) => (
              <div key={idx} className="w-full bg-white border border-slate-200 p-3 rounded-xl flex items-center justify-between shadow-sm group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-800">{doc.name}</h5>
                    <p className="text-xs text-slate-500">{doc.spec}</p>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end">
                  <div className={`text-[10px] font-bold uppercase tracking-wider ${doc.status === 'Available' ? 'text-emerald-600' : 'text-amber-500'}`}>
                    {doc.status}
                  </div>
                  <button 
                    onClick={() => handleBook(doc.name)}
                    className="text-[10px] bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white px-2 py-1 rounded-md mt-1 transition-colors font-bold"
                  >
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => alert("Opening full schedule...")}
            className="w-full mt-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-sm py-3 rounded-xl transition-colors border border-blue-200 shadow-sm flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            Schedule for Later
          </button>
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-slate-100 shrink-0">
          <div className="bg-[#F8F8F6] border border-slate-200 rounded-xl p-1.5 flex items-center gap-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
              placeholder="Describe symptoms..." 
              className="flex-1 bg-transparent border-none outline-none text-sm text-slate-800 placeholder:text-slate-400 px-2"
            />
            <button 
              onClick={handleSend}
              className="w-8 h-8 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center shadow-sm shrink-0"
            >
              <span className="material-symbols-outlined text-[16px]">send</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={toggleOpen}
        className={`pointer-events-auto flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl hover:shadow-blue-600/30 transition-all duration-300 relative focus:outline-none focus:ring-4 focus:ring-blue-500/30 w-16 h-16`}
      >
        <span 
          className={`material-symbols-outlined text-[28px] transition-transform duration-500 absolute ${isOpen ? 'rotate-180 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
        >
          stethoscope
        </span>
        <span 
          className={`material-symbols-outlined text-[28px] transition-transform duration-500 absolute ${!isOpen ? '-rotate-180 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
        >
          close
        </span>

        {/* Pulse Effect */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full border-2 border-blue-500/50 animate-ping z-[-1]"></span>
        )}
      </button>
    </div>
  );
}
