'use client';
import React, { useState } from 'react';

export default function CyberSecurityLogin() {
  const [status, setStatus] = useState('AWAITING_BIOMETRICS');

  return (
    <main className="min-h-screen bg-gray-950 flex items-center justify-center p-4 overflow-hidden relative font-mono">
      {/* Background Animation - Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030712_100%)]" />

      {/* Main Login Card */}
      <div className="relative z-10 w-full max-w-md bg-gray-900/50 backdrop-blur-md border border-green-500/30 rounded-2xl p-8 shadow-[0_0_40px_rgba(34,197,94,0.1)]">
        
        {/* Company Logo and Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 border border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.5)] mb-6">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-widest">NEXUS SECURE</h1>
          <p className="text-xs text-green-500 mt-2 uppercase tracking-widest">Global Authentication Gateway</p>
        </div>

        {/* Passwordless Authentication - Passkey Button */}
        <button
          onClick={() => setStatus('AUTHENTICATING...')}
          className="w-full relative group flex items-center justify-center gap-3 bg-green-500/10 hover:bg-green-500/20 border border-green-500/50 text-green-400 px-6 py-4 rounded-lg transition-all duration-300"
        >
          <span className="absolute inset-0 rounded-lg bg-green-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
          <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="relative z-10 font-bold tracking-wider">INITIATE PASSKEY</span>
        </button>

        {/* System Status and Technical Info - Terminal Footer */}
        <div className="mt-8 bg-black/40 rounded p-4 border border-gray-800">
          <div className="flex justify-between text-xs">
            <span className="text-gray-500">SYSTEM STATUS:</span>
            <span className="text-green-400 animate-pulse">{status}</span>
          </div>
          <div className="flex justify-between text-xs mt-2">
            <span className="text-gray-500">ENCRYPTION:</span>
            <span className="text-gray-300">AES-256-GCM</span>
          </div>
          <div className="flex justify-between text-xs mt-2">
            <span className="text-gray-500">CONNECTION:</span>
            <span className="text-gray-300">SECURE TUNNEL</span>
          </div>
        </div>

      </div>
    </main>
  );
}

