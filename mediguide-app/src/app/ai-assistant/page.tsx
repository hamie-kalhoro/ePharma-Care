import Link from 'next/link';

const aiActions = [
  { label: 'Summarize reports', icon: 'summarize' },
  { label: 'Check interactions', icon: 'medication' },
  { label: 'Draft counselling', icon: 'clinical_notes' },
];

const recentCases = [
  { id: 'RX-88492', label: 'Lisinopril + Ibuprofen', status: 'Interaction review' },
  { id: 'PT-442', label: 'Lab report summary', status: 'Ready' },
];

export default function AIAssistant() {
  return (
    <div className="bg-[#F8F8F6] text-slate-800 font-body antialiased min-h-screen">
      <header className="bg-white/95 border-b border-slate-200 shadow-sm fixed top-0 w-full z-50 backdrop-blur-xl grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4 md:px-8 h-14">
        <div className="flex items-center gap-3 min-w-0">
          <span className="material-symbols-outlined text-emerald-600 text-2xl">ecg_heart</span>
          <span className="text-xl font-hanken font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-700 whitespace-nowrap">
            MediGuide Pro
          </span>
        </div>
        <div className="hidden xl:flex items-center justify-center gap-2 min-w-0">
          <Link href="/" className="px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-emerald-700 hover:bg-emerald-50 text-[11px] font-bold uppercase tracking-wider transition-colors whitespace-nowrap">Storefront</Link>
          <Link href="/patient" className="px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-emerald-700 hover:bg-emerald-50 text-[11px] font-bold uppercase tracking-wider transition-colors whitespace-nowrap">Patient Portal</Link>
          <Link href="/admin" className="px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-emerald-700 hover:bg-emerald-50 text-[11px] font-bold uppercase tracking-wider transition-colors whitespace-nowrap">Admin Control</Link>
        </div>
        <div className="flex items-center justify-end gap-2 text-slate-600">
          <button className="hidden md:block font-jetbrains text-xs text-emerald-600 hover:bg-emerald-50 transition-colors px-3 py-1.5 rounded-full border border-emerald-200 uppercase whitespace-nowrap">
            Role Switch
          </button>
          <button className="hover:bg-emerald-50 transition-colors rounded-full p-1"><span className="material-symbols-outlined text-2xl">notifications</span></button>
          <button className="hover:bg-emerald-50 transition-colors rounded-full p-1"><span className="material-symbols-outlined text-2xl">account_circle</span></button>
        </div>
      </header>

      <nav className="hidden md:flex bg-white/85 fixed left-0 top-14 h-[calc(100vh-56px)] w-56 backdrop-blur-xl border-r border-slate-200 shadow-sm flex-col p-4 gap-2 z-40">
        <div className="mb-4 px-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">S</div>
            <div>
              <h2 className="text-sm font-bold text-slate-800">Dr. Sterling</h2>
              <p className="font-jetbrains text-[10px] uppercase text-slate-500">Clinical Director</p>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-1">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all duration-300">
            <span className="material-symbols-outlined">dashboard</span> <span className="font-medium">Dashboard</span>
          </Link>
          <Link href="/patient" className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all duration-300">
            <span className="material-symbols-outlined">group</span> <span className="font-medium">Patients</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2.5 text-sm text-emerald-700 font-bold bg-emerald-50 rounded-xl transition-all duration-300 border border-emerald-100">
            <span className="material-symbols-outlined">smart_toy</span> <span className="font-medium">AI Assistant</span>
          </Link>
        </div>
      </nav>

      <main className="ml-0 md:ml-56 mt-14 min-h-[calc(100vh-56px)] p-4 md:p-6">
        <section className="grid grid-cols-1 xl:grid-cols-[1fr_20rem] gap-5 max-w-7xl mx-auto">
          <div className="bg-white border border-slate-100 shadow-sm rounded-2xl overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-emerald-700 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-xs font-bold uppercase tracking-widest">Doctor AI Workspace</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-hanken font-extrabold text-slate-900">Clinical review assistant</h1>
                <p className="text-sm text-slate-500 mb-0 mt-1">Summaries, interaction checks, SOAP drafts, and counselling support for licensed clinicians.</p>
              </div>
              <button className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-2 w-fit">
                <span className="material-symbols-outlined text-[18px]">upload_file</span>
                Upload File
              </button>
            </div>

            <div className="p-5 grid grid-cols-1 lg:grid-cols-[1fr_18rem] gap-5">
              <div className="space-y-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-xl">smart_toy</span>
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-slate-900">Ready for clinical review</h2>
                      <p className="text-sm text-slate-600 leading-relaxed mb-0 mt-1">
                        Ask for a report summary, medication interaction check, SOAP note, or patient-friendly counselling draft. AI output is support only and requires clinician approval.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-rose-100 bg-rose-50 p-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-rose-600 shrink-0">warning</span>
                    <div>
                      <h3 className="text-sm font-bold text-rose-900">Interaction risk example</h3>
                      <p className="text-sm text-rose-900/80 leading-relaxed mb-0 mt-1">
                        Lisinopril with Ibuprofen may reduce antihypertensive effect and increase renal risk. Review renal history and consider safer analgesic options when appropriate.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {aiActions.map((action) => (
                    <button key={action.label} className="rounded-xl border border-slate-200 bg-white hover:bg-emerald-50 hover:border-emerald-200 p-4 text-left transition-colors">
                      <span className="material-symbols-outlined text-emerald-600">{action.icon}</span>
                      <span className="block mt-2 text-sm font-bold text-slate-800">{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <aside className="rounded-xl border border-slate-200 bg-white p-4 h-fit">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Recent work</h2>
                <div className="space-y-2">
                  {recentCases.map((item) => (
                    <div key={item.id} className="rounded-lg border border-slate-100 bg-slate-50 p-3">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">{item.id}</div>
                      <div className="text-sm font-semibold text-slate-800 mt-1">{item.label}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{item.status}</div>
                    </div>
                  ))}
                </div>
              </aside>
            </div>

            <div className="p-5 border-t border-slate-100 bg-white">
              <div className="rounded-xl border border-slate-200 bg-[#F8F8F6] p-2 flex items-center gap-2">
                <button className="p-2 text-slate-400 hover:text-emerald-600 rounded-lg hover:bg-white transition-colors">
                  <span className="material-symbols-outlined">attach_file</span>
                </button>
                <input
                  className="flex-1 bg-transparent border-none outline-none text-sm text-slate-800 placeholder:text-slate-400"
                  placeholder="Ask for report summary, SOAP draft, interaction check, or counselling note..."
                />
                <button className="p-2 text-slate-400 hover:text-emerald-600 rounded-lg hover:bg-white transition-colors">
                  <span className="material-symbols-outlined">mic</span>
                </button>
                <button className="w-10 h-10 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-colors flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
              <p className="text-[10px] text-center font-jetbrains text-slate-400 uppercase tracking-widest mt-3 mb-0">
                AI support only. Diagnosis, prescriptions, and dispensing require licensed human approval.
              </p>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-4">
              <h2 className="text-sm font-bold text-slate-900">Safety status</h2>
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Emergency flags</span>
                  <span className="font-bold text-emerald-700">0</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Pending handoffs</span>
                  <span className="font-bold text-amber-600">1</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Audit mode</span>
                  <span className="font-bold text-slate-700">On</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-4">
              <h2 className="text-sm font-bold text-slate-900">Allowed outputs</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><span className="material-symbols-outlined text-emerald-600 text-base">check_circle</span> Summaries</li>
                <li className="flex gap-2"><span className="material-symbols-outlined text-emerald-600 text-base">check_circle</span> SOAP drafts</li>
                <li className="flex gap-2"><span className="material-symbols-outlined text-emerald-600 text-base">check_circle</span> Interaction flags</li>
                <li className="flex gap-2"><span className="material-symbols-outlined text-rose-600 text-base">block</span> No autonomous prescribing</li>
              </ul>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
