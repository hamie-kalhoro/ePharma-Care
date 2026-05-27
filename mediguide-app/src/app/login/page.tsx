'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate login delay for UI demo
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Demo: show success for any input
    setIsLoading(false);
    alert('🎉 Login successful! Welcome to MediGuide Store.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: '#F8F8F6' }}>
      
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-30 animate-[blobFloat_18s_ease-in-out_infinite]"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.25) 0%, transparent 70%)' }}
        />
        <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] rounded-full opacity-25 animate-[blobFloat_22s_ease-in-out_infinite_reverse]"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)' }}
        />
        <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] rounded-full opacity-20 animate-[blobFloat_15s_ease-in-out_infinite_2s]"
          style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 70%)' }}
        />
      </div>

      {/* Main Login Card */}
      <div className="relative z-10 w-full px-4" style={{ maxWidth: '28rem' }}>

        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 group no-underline">
            <div className="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-600/20 group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-2xl">local_pharmacy</span>
            </div>
            <span className="text-2xl font-bold font-hanken tracking-tight text-slate-800">
              MediGuide<span className="text-emerald-600">Store</span>
            </span>
          </Link>
          <p className="text-sm text-slate-500 mt-3 font-medium">Sign in to your healthcare account</p>
        </div>

        {/* Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl shadow-slate-200/60 border border-white/60 p-7 md:p-9 space-y-6">
          
          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button 
              type="button"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold uppercase tracking-wider transition-all hover:shadow-sm active:scale-[0.98] cursor-pointer outline-none"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Google
            </button>
            <button 
              type="button"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold uppercase tracking-wider transition-all hover:shadow-sm active:scale-[0.98] cursor-pointer outline-none"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.18 0-.36-.02-.53-.06-.01-.18-.04-.56-.04-.95 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.44zm4.565 17.07c0 .12-.01.24-.03.36-.66 1.96-2.02 3.58-3.55 4.7-.92.67-2.04 1.07-3.18 1.14-.33.02-.67 0-1-.06-1-.19-2.03-.57-3.04-.98-.62-.25-1.26-.48-1.93-.48-.7 0-1.35.24-1.99.5-.99.4-2 .77-3.02.93-.36.06-.72.08-1.08.06-2.34-.16-4.38-2.06-5.58-4.42C.85 18.18 0 15.38 0 12.88c0-3.16 1.58-5.9 4.06-7.26A7.5 7.5 0 0 1 7.86 4.5c1.04 0 2.06.4 3.04.78.66.26 1.3.53 1.92.53.52 0 1.05-.22 1.6-.45 1.09-.46 2.33-.98 3.78-.85 2.08.18 3.85 1.18 4.85 3.02-1.66 1.08-2.78 2.86-2.78 5.02 0 2.56 1.52 4.56 3.64 5.35z"/></svg>
              Apple
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-slate-200"></div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">or continue with email</span>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            
            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="login-email" className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-slate-400">mail</span>
                Email Address
              </label>
              <input 
                id="login-email"
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8F8F6] text-sm text-slate-800 placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all font-medium"
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label htmlFor="login-password" className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-slate-400">lock</span>
                Password
              </label>
              <div className="relative">
                <input 
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8F8F6] text-sm text-slate-800 placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all font-medium pr-12"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors outline-none cursor-pointer"
                >
                  <span className="material-symbols-outlined text-xl">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input 
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer accent-emerald-600"
                />
                <span className="text-xs text-slate-500 font-medium group-hover:text-slate-700 transition-colors">Remember me</span>
              </label>
              <Link 
                href="#" 
                className="text-xs text-emerald-600 font-bold hover:text-emerald-700 transition-colors no-underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2 p-3 bg-rose-50 border border-rose-200 rounded-xl">
                <span className="material-symbols-outlined text-rose-500 text-sm">error</span>
                <span className="text-xs text-rose-700 font-semibold">{error}</span>
              </div>
            )}

            {/* Submit */}
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-emerald-600/20 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer outline-none flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <span className="material-symbols-outlined text-lg animate-spin">progress_activity</span>
                  Signing in...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-lg">login</span>
                  Sign In
                </>
              )}
            </button>
          </form>

          {/* Signup Link */}
          <p className="text-center text-sm text-slate-500 font-medium mb-0">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-emerald-600 font-bold hover:text-emerald-700 transition-colors no-underline">
              Create Account
            </Link>
          </p>
        </div>

        {/* Bottom Trust Strip */}
        <div className="mt-6 flex items-center justify-center gap-5 text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">verified_user</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">HIPAA Secure</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-slate-300"></div>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">lock</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">256-bit SSL</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-slate-300"></div>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">shield</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Encrypted</span>
          </div>
        </div>

        {/* Back to Store */}
        <div className="mt-5 text-center">
          <Link href="/" className="inline-flex items-center gap-1 text-xs text-slate-400 font-semibold hover:text-emerald-600 transition-colors no-underline group">
            <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-0.5 transition-transform">arrow_back</span>
            Back to Store
          </Link>
        </div>
      </div>

      {/* Keyframe Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blobFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
      `}} />
    </div>
  );
}
