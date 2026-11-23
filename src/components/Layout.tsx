/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Trophy, 
  Settings, 
  Users, 
  Calendar, 
  FileText, 
  ShieldAlert, 
  LayoutDashboard,
  DollarSign,
  ChevronRight,
  Menu,
  X,
  Zap
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Command Center', icon: LayoutDashboard, path: '/' },
  { name: 'Driver Hub', icon: Users, path: '/drivers' },
  { name: 'Weekend Plan', icon: Calendar, path: '/weekend' },
  { name: 'AI War Room', icon: Zap, path: '/ai' },
  { name: 'Tech & Parts', icon: Settings, path: '/tech' },
  { name: 'Sponsorship', icon: Trophy, path: '/sponsorship' },
  { name: 'Budget', icon: DollarSign, path: '/budget' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const { user, loading, login, logout } = useAuth();

  return (
    <div className="min-h-screen bg-[#08080A] text-slate-200 flex font-sans selection:bg-red-600 selection:text-white">
      {/* Sidebar */}
      <aside className={cn(
        "bg-[#0D0D10] border-r border-slate-800/40 transition-all duration-500 flex flex-col fixed inset-y-0 left-0 z-50",
        isOpen ? "w-64" : "w-20"
      )}>
        <div className="p-8 flex items-center gap-4">
          <div className="min-w-[48px] h-12 bg-red-600 rounded-xl flex items-center justify-center font-black text-2xl italic tracking-tighter text-white shadow-lg shadow-red-600/30">
            PW
          </div>
          {isOpen && (
            <div className="flex flex-col">
              <span className="font-black tracking-tighter text-xl text-white">PITWALL</span>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest -mt-1">Management OS</span>
            </div>
          )}
        </div>

        <nav className="flex-1 px-4 py-8 space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => cn(
                "flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 group",
                isActive 
                  ? "bg-red-600/10 text-red-500 border border-red-500/10" 
                  : "text-slate-500 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon className={cn("w-6 h-6", isOpen ? "" : "mx-auto")} />
              {isOpen && <span className="text-sm font-bold tracking-tight">{item.name}</span>}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800/40">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-center p-3 hover:bg-white/5 rounded-2xl text-slate-500 transition-all"
          >
            {isOpen ? <X className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={cn(
        "flex-1 transition-all duration-500",
        isOpen ? "ml-64" : "ml-20"
      )}>
        {/* Header */}
        <header className="h-20 border-b border-slate-800/40 bg-[#0D0D10]/60 backdrop-blur-xl sticky top-0 z-40 flex items-center justify-between px-10">
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Telemetry Status</span>
              <div className="flex items-center gap-2">
                <span className={cn("w-2 h-2 rounded-full animate-pulse", user ? "bg-green-500" : "bg-red-500")} />
                <span className="text-sm font-mono font-bold text-white tracking-tight uppercase">
                  {user ? "SPA-FRANCORCHAMPS // GREEN" : "CONNECTION OFFLINE"}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            {user ? (
              <div className="flex items-center gap-6">
                <div className="hidden lg:flex flex-col items-end">
                  <span className="text-white font-bold text-sm">{user.email?.split('@')[0]}</span>
                  <span className="text-[9px] font-mono text-slate-500 uppercase">Team Principal</span>
                </div>
                <button 
                  onClick={logout}
                  className="text-[10px] font-black text-slate-500 hover:text-red-500 transition-colors uppercase tracking-widest"
                >
                  Logout
                </button>
                <div className="w-10 h-10 rounded-2xl border-2 border-red-600/40 p-0.5 overflow-hidden shadow-xl shadow-red-600/10">
                   {user.photoURL ? (
                     <img src={user.photoURL} alt="profile" className="w-full h-full rounded-xl object-cover" referrerPolicy="no-referrer" />
                   ) : (
                     <div className="w-full h-full rounded-xl bg-slate-800 flex items-center justify-center font-black">
                       {user.email?.[0].toUpperCase()}
                     </div>
                   )}
                </div>
              </div>
            ) : (
              <button 
                onClick={login}
                className="bg-red-600 hover:bg-neutral-100 hover:text-black text-white px-8 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-red-600/30"
              >
                Live Command Login
              </button>
            )}
          </div>
        </header>

        <div className="p-10 max-w-7xl mx-auto min-h-[calc(100vh-80px)]">
          {children}
        </div>
      </main>
    </div>
  );
}
