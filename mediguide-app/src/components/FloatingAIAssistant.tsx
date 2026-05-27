"use client";

import React, { useState } from 'react';

const aiActions = [
  { label: 'Summarize reports', icon: 'summarize' },
  { label: 'Check interactions', icon: 'medication' },
  { label: 'Draft counselling', icon: 'clinical_notes' },
];

export default function FloatingAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {/* Chat Window Overlay */}
      <div 
        className={`mb-4 w-[350px] max-w-[calc(100vw-3rem)] bg-white rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden flex flex-col transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 pointer-events-none translate-y-4'}`}
        style={{ height: '500px', maxHeight: 'calc(100vh - 8rem)' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-4 text-white flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
              <span className="material-symbols-outlined text-white text-lg">smart_toy</span>
            </div>
            <div>
              <h3 className="font-bold text-sm">Doctor AI Assistant</h3>
              <p className="text-[10px] text-emerald-100 uppercase tracking-widest">Clinical Support</p>
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
          <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 text-sm text-slate-700 leading-relaxed rounded-tl-none">
            Welcome to your AI workspace. Ask for a report summary, medication interaction check, SOAP note, or patient-friendly counselling draft.
          </div>
          
          <div className="bg-rose-50 border border-rose-100 p-3 rounded-xl shadow-sm text-sm text-rose-800">
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-rose-600 text-base">warning</span>
              <span className="font-bold text-xs uppercase tracking-widest">Important</span>
            </div>
            AI output is support only and requires licensed clinician approval.
          </div>

          <div className="mt-2 space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Quick Actions</h4>
            {aiActions.map((action) => (
              <button key={action.label} className="w-full bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 p-3 rounded-xl text-left flex items-center gap-3 transition-colors shadow-sm group">
                <span className="material-symbols-outlined text-emerald-600 group-hover:scale-110 transition-transform">{action.icon}</span>
                <span className="text-sm font-semibold text-slate-800">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-slate-100 shrink-0">
          <div className="bg-[#F8F8F6] border border-slate-200 rounded-xl p-1.5 flex items-center gap-2 focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500 transition-all">
            <button className="p-1.5 text-slate-400 hover:text-emerald-600 rounded-lg hover:bg-white transition-colors">
              <span className="material-symbols-outlined text-lg">attach_file</span>
            </button>
            <input 
              type="text" 
              placeholder="Ask anything..." 
              className="flex-1 bg-transparent border-none outline-none text-sm text-slate-800 placeholder:text-slate-400 px-1"
            />
            <button className="w-8 h-8 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors flex items-center justify-center shadow-sm shrink-0">
              <span className="material-symbols-outlined text-[16px]">send</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={toggleOpen}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl hover:shadow-emerald-600/30 transition-all duration-300 relative focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
      >
        <span 
          className={`material-symbols-outlined text-2xl transition-transform duration-500 ${isOpen ? 'rotate-180 scale-0 opacity-0 absolute' : 'rotate-0 scale-100 opacity-100'}`}
        >
          smart_toy
        </span>
        <span 
          className={`material-symbols-outlined text-2xl transition-transform duration-500 ${!isOpen ? '-rotate-180 scale-0 opacity-0 absolute' : 'rotate-0 scale-100 opacity-100'}`}
        >
          close
        </span>
        
        {/* Expandable Text (only shown when closed and hovered/initially) */}
        <div className={`overflow-hidden transition-all duration-300 whitespace-nowrap ${isHovered && !isOpen ? 'max-w-[120px] ml-1' : 'max-w-0'}`}>
          <span className="font-bold text-sm tracking-wide">AI Assistant</span>
        </div>

        {/* Pulse Effect */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full border-2 border-emerald-500/50 animate-ping z-[-1]"></span>
        )}
      </button>
    </div>
  );
}
