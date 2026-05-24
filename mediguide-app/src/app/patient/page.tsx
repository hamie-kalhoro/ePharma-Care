import Link from 'next/link';

export default function PatientDashboard() {
  return (
    <div className="font-body text-slate-800 min-h-screen bg-[#f8fafc]">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/95 border-b border-slate-200 shadow-sm flex justify-between items-center px-4 md:px-8 h-14 transition-all duration-300">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-emerald-600 text-2xl">ecg_heart</span>
          <span className="text-xl font-hanken font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-700 tracking-tight">
            MediGuide Pro
          </span>
        </div>
        <div className="hidden lg:flex items-center gap-2">
          <Link href="/" className="px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-emerald-700 hover:bg-emerald-50 text-[11px] font-bold uppercase tracking-wider transition-colors">Storefront</Link>
          <Link href="/admin" className="px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-emerald-700 hover:bg-emerald-50 text-[11px] font-bold uppercase tracking-wider transition-colors">Admin Control</Link>
          <Link href="/ai-assistant" className="px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-emerald-700 hover:bg-emerald-50 text-[11px] font-bold uppercase tracking-wider transition-colors">AI Consultation</Link>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-emerald-600 hover:bg-emerald-50 transition-colors active:scale-95 duration-200 p-2 rounded-full border border-transparent hover:border-emerald-100 flex items-center justify-center">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-emerald-600 hover:bg-emerald-50 transition-colors active:scale-95 duration-200 p-2 rounded-full border border-transparent hover:border-emerald-100 flex items-center justify-center">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </nav>

      {/* Main Layout Container */}
      <div className="flex pt-14 min-h-screen">
        {/* SideNavBar */}
        <aside className="hidden md:flex flex-col p-4 gap-2 fixed left-0 top-14 h-[calc(100vh-56px)] w-60 backdrop-blur-xl bg-white/85 border-r border-slate-200 shadow-sm transition-all duration-300 ease-in-out z-40 overflow-y-auto custom-scrollbar">
          <div className="mb-5 pt-2 min-w-0">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-50 flex items-center justify-center overflow-hidden border border-emerald-100 shadow-sm">
                <span className="material-symbols-outlined text-3xl text-emerald-600">person</span>
              </div>
              <div className="min-w-0">
                <h2 className="text-lg font-bold text-slate-800 tracking-tight truncate">Elena Rostova</h2>
                <p className="text-[10px] font-semibold tracking-wider text-slate-500 mt-0.5 uppercase whitespace-nowrap">Patient ID PT-884-2A</p>
              </div>
            </div>
            <button className="mt-4 w-full min-h-11 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px] shrink-0">calendar_month</span>
              <span className="whitespace-nowrap">Book Doctor</span>
            </button>
          </div>
          
          <nav className="flex-1 flex flex-col gap-2">
            <a className="flex items-center gap-3 px-3 py-2.5 text-sm text-emerald-700 font-bold bg-emerald-50 rounded-xl border border-emerald-100 transition-all duration-300 ease-in-out" href="#">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-base">Dashboard</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all duration-300 ease-in-out" href="#">
              <span className="material-symbols-outlined">upload_file</span>
              <span className="text-base">Reports</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all duration-300 ease-in-out" href="#">
              <span className="material-symbols-outlined">medication</span>
              <span className="text-base">Prescriptions</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all duration-300 ease-in-out" href="#">
              <span className="material-symbols-outlined">smart_toy</span>
              <span className="text-base">AI Assistant</span>
            </a>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 md:ml-60 p-4 md:p-6 w-full min-w-0">
          <div className="max-w-7xl mx-auto w-full">
          {/* Welcome & Quick Actions */}
          <section className="mb-12">
            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm mb-6">
              <div className="grid min-h-[240px] lg:grid-cols-[minmax(32rem,40rem)_1fr]">
                <div className="p-5 md:p-7 flex items-center">
                  <div className="w-full max-w-[42rem]">
                    <div className="flex items-center gap-2 text-emerald-700 mb-3">
                      <span className="material-symbols-outlined text-[20px] shrink-0">favorite</span>
                      <span className="text-xs font-bold uppercase tracking-widest whitespace-nowrap">Patient Portal</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-hanken font-extrabold text-slate-800 mb-3 tracking-tight leading-tight">
                      Good Morning, Elena.
                    </h1>
                    <p className="text-base text-slate-600 leading-relaxed mb-0 max-w-[38rem]">
                      Continue your care plan: upload reports, review prescriptions, book a doctor consultation, or ask the AI assistant for educational guidance while you wait.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <button className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all active:scale-95 flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">upload_file</span>
                        Upload Reports
                      </button>
                      <button className="px-5 py-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold uppercase tracking-wider shadow-sm transition-all active:scale-95 flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                        Book Consultation
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block relative min-h-[240px] bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop"
                    alt="Patient care dashboard"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Quick Action Cards */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                  <span className="material-symbols-outlined text-emerald-600 text-[24px]">document_scanner</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Upload Case Files</h3>
                <p className="text-sm text-slate-500 mb-4 flex-1">Add prescriptions, lab reports, symptoms, and medication history for clinical review.</p>
                <span className="text-emerald-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Start Upload <span className="material-symbols-outlined text-[16px]">arrow_forward</span></span>
              </div>
              
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  <span className="material-symbols-outlined text-blue-600 text-[24px]">calendar_month</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Book Doctor Review</h3>
                <p className="text-sm text-slate-500 mb-4 flex-1">Find an available doctor for prescription, counselling, and follow-up.</p>
                <span className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Find Slots <span className="material-symbols-outlined text-[16px]">arrow_forward</span></span>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center mb-4 group-hover:bg-rose-100 transition-colors">
                  <span className="material-symbols-outlined text-rose-500 text-[24px]">alarm</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">AI Guidance</h3>
                <p className="text-sm text-slate-500 mb-4 flex-1">Get medicine timing help, simple education, and urgent-care warnings.</p>
                <span className="text-rose-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Ask Safely <span className="material-symbols-outlined text-[16px]">arrow_forward</span></span>
              </div>
            </div>
          </section>

          {/* Dashboard Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-10">
            <div className="lg:col-span-8 flex flex-col gap-5">
              {/* Blood Pressure Chart */}
              <div className="bg-white rounded-2xl p-5 relative overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="relative z-10 flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-slate-800 flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-600">favorite</span> Blood Pressure
                    </h3>
                    <p className="text-xs font-semibold tracking-wider text-slate-500 mt-1 uppercase">LAST 7 DAYS</p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">118<span className="text-2xl text-slate-500">/76</span></div>
                    <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full text-xs font-semibold mt-1">
                      <span className="material-symbols-outlined text-[14px]">trending_down</span> Optimal
                    </div>
                  </div>
                </div>
                
                <div className="h-48 w-full relative z-10 mt-4 flex items-end justify-between px-2">
                  <div className="w-8 bg-slate-100 rounded-t-sm h-[60%] relative group cursor-pointer hover:bg-emerald-50 transition-colors"></div>
                  <div className="w-8 bg-slate-100 rounded-t-sm h-[65%] relative group cursor-pointer hover:bg-emerald-50 transition-colors"></div>
                  <div className="w-8 bg-slate-100 rounded-t-sm h-[58%] relative group cursor-pointer hover:bg-emerald-50 transition-colors"></div>
                  <div className="w-8 bg-slate-100 rounded-t-sm h-[62%] relative group cursor-pointer hover:bg-emerald-50 transition-colors"></div>
                  <div className="w-8 bg-slate-100 rounded-t-sm h-[55%] relative group cursor-pointer hover:bg-emerald-50 transition-colors"></div>
                  <div className="w-8 bg-slate-100 rounded-t-sm h-[59%] relative group cursor-pointer hover:bg-emerald-50 transition-colors"></div>
                  <div className="w-8 bg-emerald-500 rounded-t-sm h-[57%] relative shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                    <div className="absolute bottom-full mb-2 w-full text-center text-[10px] text-emerald-600 font-bold">118/76</div>
                  </div>
                  <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path className="sparkline" d="M5,60 L20,55 L35,62 L50,58 L65,65 L80,61 L95,63" fill="none" stroke="#e2e8f0" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                  </svg>
                </div>
              </div>

              {/* Sugar Levels */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-semibold text-slate-800 flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-600">water_drop</span> Glucose Levels
                  </h3>
                </div>
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-24 h-24 rounded-full border-4 border-blue-100 border-t-blue-500 flex items-center justify-center relative shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                    <div className="text-center">
                      <div className="text-2xl text-slate-800 font-bold">92</div>
                      <div className="text-[10px] text-slate-500">mg/dL</div>
                    </div>
                  </div>
                  <div>
                    <p className="text-base text-slate-500 mb-1">Fasting Reading</p>
                    <p className="text-sm font-semibold text-emerald-600 flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">check_circle</span> In Range</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Medication Schedule Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-white rounded-2xl p-5 flex-1 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-emerald-700"></div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-slate-800">Today's Regimen</h3>
                  <span className="bg-amber-50 text-amber-600 px-3 py-1 rounded-full text-[10px] font-semibold">2 LEFT</span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-rose-50 border border-rose-200 relative overflow-hidden group">
                    <div className="absolute left-0 top-0 w-1 h-full bg-rose-500"></div>
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="material-symbols-outlined text-rose-500 text-[18px]">warning</span>
                          <h4 className="text-sm text-slate-800 font-bold">Metformin (500mg)</h4>
                        </div>
                        <p className="text-sm text-slate-500">Missed 8:00 AM dose</p>
                      </div>
                      <button className="bg-white rounded-lg border border-slate-200 px-3 py-1 text-sm font-semibold hover:bg-rose-500 hover:text-white transition-colors hover:border-rose-500">Take Now</button>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-white border border-slate-200 relative flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <span className="material-symbols-outlined text-emerald-600 text-3xl">medication_liquid</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm text-slate-800 font-bold">Lisinopril (10mg)</h4>
                      <p className="text-sm text-slate-500">1:00 PM - With food</p>
                    </div>
                    <div>
                      <label className="relative flex items-center cursor-pointer">
                        <input className="sr-only squishy-checkbox peer" type="checkbox" />
                        <div className="w-6 h-6 border-2 border-slate-200 rounded-full peer-checked:bg-emerald-500 peer-checked:border-emerald-500 transition-all flex items-center justify-center">
                          <span className="material-symbols-outlined text-white text-[16px] opacity-0 peer-checked:opacity-100">check</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-semibold text-slate-500 mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">local_pharmacy</span> REFILLS NEEDED SOON
                  </h4>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm text-slate-800">Lisinopril</span>
                    <span className="text-sm font-semibold text-amber-500">4 Days Left</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-amber-400 h-full w-[15%] rounded-full shadow-[0_0_10px_rgba(251,191,36,0.5)]"></div>
                  </div>
                  <button className="mt-4 w-full py-2 border border-slate-200 text-slate-600 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition-colors">Request Refill</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </main>
      </div>
    </div>
  );
}
