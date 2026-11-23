
import React from 'react';
import { 
  Trophy, 
  Flag, 
  Timer, 
  MapPin, 
  Users, 
  Activity,
  AlertTriangle,
  ChevronRight,
  Calendar
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const stats = [
  { label: 'Next Event', value: 'Silverstone 500', sub: 'Endurance Cup', icon: MapPin, color: 'text-blue-500' },
  { label: 'Car Status', value: 'Ready', sub: 'Chassis #004', icon: Activity, color: 'text-green-500' },
  { label: 'Driver Stints', value: 'Optimized', sub: '3-Driver Rotation', icon: Timer, color: 'text-red-500' },
  { label: 'BOP Status', value: 'Warning', sub: '+15kg Weight Penalty', icon: AlertTriangle, color: 'text-yellow-500' },
];

const sessions = [
  { time: '09:00', type: 'Free Practice 1', duration: '90m', status: 'Upcoming' },
  { time: '14:30', type: 'Pre-Qualifying', duration: '60m', status: 'Upcoming' },
  { time: '17:00', type: 'Driver Briefing', duration: '30m', status: 'Upcoming' },
];

export default function CommandCenter() {
  return (
    <div className="space-y-10">
      {/* Hero Header */}
      <section>
        <div className="flex items-end justify-between mb-10">
          <div>
            <h1 className="text-5xl font-black tracking-tighter mb-2 text-white">COMMAND CENTER</h1>
            <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em]">Live Weekend Logistics & Team Health OS</p>
          </div>
          <div className="text-right flex flex-col items-end">
            <div className="text-3xl font-black text-red-600 tracking-tighter italic">LAPS: --</div>
            <div className="text-[10px] text-slate-500 font-mono flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
               P1 TARGET: 1:58.420
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={stat.label}
              className="bento-card relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={cn("p-2 rounded-xl bg-white/5 border border-white/5", stat.color)}>
                    <stat.icon size={20} />
                  </div>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
                </div>
                <div className="text-2xl font-black text-white mb-1 tracking-tight">{stat.value}</div>
                <div className="text-[10px] text-slate-500 font-mono uppercase tracking-tighter">{stat.sub}</div>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <stat.icon size={100} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Weekend Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
        <div className="lg:col-span-8 flex flex-col space-y-6">
          <div className="bento-card flex-1">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-3">
                <Calendar className="text-red-500" size={16} />
                Session Schedule
              </h2>
              <div className="bg-slate-950/80 px-3 py-1 rounded-lg text-[10px] font-mono border border-slate-800/50">RD 04 // SILVERSTONE</div>
            </div>
            
            <div className="space-y-3">
              {sessions.map((session, i) => (
                <div 
                  key={i}
                  className="flex items-center justify-between p-5 bg-slate-950/50 border border-slate-800/40 rounded-2xl hover:border-red-600/30 transition-all group"
                >
                  <div className="flex items-center gap-8">
                    <div className="font-mono text-lg font-black text-red-500">{session.time}</div>
                    <div className="w-px h-8 bg-slate-800/50" />
                    <div>
                      <div className="font-bold text-white text-base group-hover:text-red-500 transition-colors uppercase tracking-tight">{session.type}</div>
                      <div className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">{session.duration} • AMB: 18°C / TRACK: 24°C</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-[10px] bg-red-600/10 text-red-500 px-3 py-1 rounded-lg border border-red-500/20 font-black uppercase tracking-widest">
                      {session.status}
                    </span>
                    <ChevronRight size={18} className="text-slate-700 group-hover:text-white transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bento-card h-full">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-3 mb-8">
              <Users className="text-red-500" size={16} />
              Active Roster
            </h2>
            <div className="space-y-4">
              {[1, 2].map((d) => (
                <div key={d} className="bg-slate-950/50 p-5 rounded-2xl border border-slate-800/40 flex items-center gap-5 hover:bg-slate-950 transition-colors cursor-pointer group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 flex items-center justify-center text-red-600 text-xl font-black italic shadow-lg">
                    #{d === 1 ? '72' : '91'}
                  </div>
                  <div className="flex-1">
                    <div className="font-black text-white text-lg tracking-tight">{d === 1 ? 'M. ROSSI' : 'A. VOLKOV'}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[9px] font-black bg-red-600/10 text-red-500 px-2 py-0.5 rounded border border-red-500/20 uppercase">GOLD</span>
                      <span className="text-[9px] font-mono text-slate-500 uppercase">Stint active</span>
                    </div>
                  </div>
                   <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-800/50">
               <button className="w-full bg-white text-black py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all shadow-xl shadow-black/20">
                 Pre-Grid Protocol
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
