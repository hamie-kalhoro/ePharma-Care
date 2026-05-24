import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="bg-[#f8fafc] text-slate-800 font-body antialiased min-h-screen flex flex-col relative selection:bg-emerald-500/30 selection:text-emerald-900">
      
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-slate-200 shadow-sm bg-white/95 flex justify-between items-center px-4 md:px-8 h-14 transition-all">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-emerald-600 text-2xl">ecg_heart</span>
          <span className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-700 font-bold font-hanken">MediGuide Pro</span>
        </div>
        <div className="hidden lg:flex items-center gap-2">
          <Link href="/" className="px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-emerald-700 hover:bg-emerald-50 text-[11px] font-bold uppercase tracking-wider transition-colors">Storefront</Link>
          <Link href="/patient" className="px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-emerald-700 hover:bg-emerald-50 text-[11px] font-bold uppercase tracking-wider transition-colors">Patient Portal</Link>
          <Link href="/ai-assistant" className="px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-emerald-700 hover:bg-emerald-50 text-[11px] font-bold uppercase tracking-wider transition-colors">AI Consultation</Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:block font-jetbrains text-[11px] uppercase text-emerald-600 border border-emerald-600/30 px-3 py-1.5 rounded-full hover:bg-emerald-50 transition-colors active:scale-95 duration-200">Role Switch</button>
          <div className="flex gap-4">
            <button className="text-slate-600 hover:bg-emerald-50 transition-colors rounded-full p-2 active:scale-95 duration-200">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="text-slate-600 hover:bg-emerald-50 transition-colors rounded-full p-2 active:scale-95 duration-200">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </div>
      </header>

      {/* App Container */}
      <div className="flex flex-1 pt-14 h-full">
        {/* SideNavBar */}
        <nav className="hidden md:flex flex-col p-4 gap-2 fixed left-0 top-14 h-[calc(100vh-56px)] w-60 backdrop-blur-xl border-r border-slate-200 shadow-sm bg-white/85 z-40">
          <div className="mb-6 flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 overflow-hidden border border-emerald-100 flex items-center justify-center">
              <span className="material-symbols-outlined text-xl text-emerald-600">person</span>
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-800">System Admin</h3>
              <p className="text-[12px] font-jetbrains uppercase text-slate-500">Operations Control</p>
            </div>
          </div>
          <button className="w-full mb-5 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">verified_user</span> Audit Queue
          </button>
          <div className="flex-1 flex flex-col gap-1">
            <Link href="/admin" className="flex items-center gap-3 px-3 py-2.5 text-sm text-emerald-700 font-bold bg-emerald-50 rounded-xl border border-emerald-100 transition-all duration-300">
              <span className="material-symbols-outlined">dashboard</span> Dashboard
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all duration-300">
              <span className="material-symbols-outlined">badge</span> Provider Verification
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all duration-300">
              <span className="material-symbols-outlined">receipt_long</span> Prescription Audits
            </Link>
            <Link href="/ai-assistant" className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all duration-300">
              <span className="material-symbols-outlined">smart_toy</span> AI Moderation
            </Link>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 md:ml-60 p-4 md:p-6 bg-transparent min-h-[calc(100vh-56px)] overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-5 pb-10">
            <div className="flex justify-between items-end mb-5">
              <div>
                <div className="flex items-center gap-2 text-emerald-700 mb-2">
                  <span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
                  <span className="text-xs font-bold uppercase tracking-widest">Admin Control</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-hanken font-extrabold text-slate-800 mb-2">Overview</h1>
                <p className="text-base text-slate-500">Operations, provider verification, prescription audits, and AI safety monitoring.</p>
              </div>
              <div className="hidden sm:flex gap-2">
                <button className="bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-xl font-jetbrains text-[12px] hover:bg-slate-50 transition-colors flex items-center gap-2 uppercase shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span> Today
                </button>
              </div>
            </div>

            {/* Bento Grid: Top Analytics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <span className="material-symbols-outlined">group</span>
                  </div>
                  <span className="flex items-center gap-1 text-emerald-600 font-jetbrains text-[12px] bg-emerald-50 px-2 py-1 rounded-full uppercase">
                    <span className="material-symbols-outlined text-[14px]">trending_up</span> +12%
                  </span>
                </div>
                <h3 className="text-base text-slate-500 mb-1">Verified Users</h3>
                <p className="text-3xl font-hanken font-bold text-slate-800">1,248</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <span className="material-symbols-outlined">vital_signs</span>
                  </div>
                  <span className="flex items-center gap-1 text-rose-500 font-jetbrains text-[12px] bg-rose-50 px-2 py-1 rounded-full uppercase">
                    <span className="material-symbols-outlined text-[14px]">arrow_upward</span> 4 pending
                  </span>
                </div>
                <h3 className="text-base text-slate-500 mb-1">Pending Reviews</h3>
                <p className="text-3xl font-hanken font-bold text-slate-800">34</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <span className="flex items-center gap-1 text-slate-600 font-jetbrains text-[12px] bg-slate-100 px-2 py-1 rounded-full uppercase">
                    <span className="material-symbols-outlined text-[14px]">sync</span> Live
                  </span>
                </div>
                <h3 className="text-base text-slate-500 mb-1">Revenue (MTD)</h3>
                <p className="text-3xl font-hanken font-bold text-slate-800">$142.5k</p>
              </div>
            </div>

            {/* AI & Patients Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start mt-5">
              <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-[#f8fafc]">
                  <div>
                    <h2 className="text-xl font-hanken font-semibold text-slate-800">Safety Review Queue</h2>
                    <p className="text-sm text-slate-500">Escalations that need admin or clinical governance review.</p>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#f8fafc] font-jetbrains text-[12px] text-slate-500 border-b border-slate-100 uppercase">
                        <th className="px-6 py-4 font-medium">Case</th>
                        <th className="px-6 py-4 font-medium">Status</th>
                        <th className="px-6 py-4 font-medium">Wait Time</th>
                        <th className="px-6 py-4 font-medium text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-base text-slate-800 divide-y divide-slate-100">
                      <tr className="hover:bg-[#f8fafc] transition-colors group cursor-pointer">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-semibold text-sm">ER</div>
                            <div>
                              <p className="font-semibold">Prescription Audit</p>
                              <p className="text-xs text-slate-500 font-jetbrains">RX: 884-2A</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-medium border border-amber-100">Needs Review</span>
                        </td>
                        <td className="px-6 py-4 text-slate-500">14 mins</td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-emerald-600 font-jetbrains text-xs hover:underline opacity-0 group-hover:opacity-100 transition-opacity uppercase">Review</button>
                        </td>
                      </tr>
                      {/* More rows omitted for brevity */}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* AI Monitoring Panel */}
              <div className="lg:col-span-1 bg-white rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden hover:shadow-lg transition-shadow">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-emerald-700"></div>
                <div className="p-6 border-b border-slate-100 flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="material-symbols-outlined text-emerald-600 text-xl">psychology</span>
                      <h2 className="text-2xl font-hanken font-semibold text-slate-800">AI Monitoring</h2>
                    </div>
                    <p className="text-sm text-slate-500">Escalations, unsafe prompt attempts, and handoff logs.</p>
                  </div>
                  <span className="relative flex h-3 w-3 mt-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                </div>
                <div className="p-4 space-y-3">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-rose-200 transition-colors cursor-pointer group">
                    <div className="flex justify-between items-start mb-2">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-rose-100 text-[10px] font-jetbrains bg-rose-50 text-rose-600 uppercase">High Priority</span>
                      <span className="text-xs text-slate-500 font-jetbrains">Just now</span>
                    </div>
                    <p className="text-sm text-slate-800 mb-2"><span className="font-semibold">Doctor Handoff Required:</span> Patient AI detected symptoms that require licensed clinician review.</p>
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
