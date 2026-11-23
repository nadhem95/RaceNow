
import React from 'react';
import { Settings, Hash, Info, Plus, ChevronRight, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const parts = [
  { name: 'Brake Caliper Front Left', cat: 'Brakes', mileage: 842, max: 2000, status: 'good' },
  { name: 'Gearbox Assembly Stage 2', cat: 'Drivetrain', mileage: 2840, max: 3000, status: 'warning' },
  { name: 'Front Splitter Carbon', cat: 'Aero', mileage: 120, max: 500, status: 'good' },
  { name: 'Wheel Bearing Rear Right', cat: 'Chassis', mileage: 1800, max: 1800, status: 'replace' },
];

export default function TechTracker() {
  return (
    <div className="space-y-10">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-5xl font-black tracking-tighter mb-2 text-white">TECH & SPARES</h1>
          <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em]">Maintenance Schedules & Neural Mileage Logs</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-red-600/10 text-red-500 border border-red-500/20 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-red-600 hover:text-white transition-all">
            <Activity size={18} /> Log Part Work
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-neutral-100 transition-all">
            <Plus size={18} /> Catalog Spares
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {parts.map((part, i) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            key={part.name}
            className="bento-card group flex items-center justify-between hover:bg-slate-900/60 transition-all"
          >
            <div className="flex items-center gap-10">
              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center border shadow-2xl",
                part.status === 'replace' ? "bg-red-600/10 border-red-600/40 text-red-500" :
                part.status === 'warning' ? "bg-yellow-600/10 border-yellow-600/40 text-yellow-500" :
                "bg-blue-600/10 border-blue-600/40 text-blue-500"
              )}>
                <Settings size={28} className={part.status === 'replace' ? 'animate-spin-slow' : ''} />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-black text-white text-xl tracking-tight uppercase italic">{part.name}</span>
                  <span className="text-[10px] font-black bg-slate-800 text-slate-400 px-3 py-1 rounded-lg uppercase tracking-widest border border-slate-700/50">
                    {part.cat}
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <div className="w-80 h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800 shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min((part.mileage / part.max) * 100, 100)}%` }}
                      className={cn(
                        "h-full rounded-full transition-all duration-1000",
                        part.status === 'replace' ? "bg-red-600 shadow-[0_0_10px_#ef4444]" :
                        part.status === 'warning' ? "bg-yellow-600 shadow-[0_0_10px_#ca8a04]" :
                        "bg-blue-600 shadow-[0_0_10px_#2563eb]"
                      )}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">{Math.round((part.mileage / part.max) * 100)}% WEAR</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-16">
              <div className="text-right">
                <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1 italic">Duty Life Log</div>
                <div className="text-xl font-black text-white font-mono tracking-tighter">
                  {part.mileage.toLocaleString()}km <span className="text-slate-600 text-xs font-normal">/ {part.max.toLocaleString()}km</span>
                </div>
              </div>
              <div className="text-right min-w-[120px]">
                <div className={cn(
                  "text-[10px] font-black uppercase tracking-[0.2em] mb-1 px-4 py-1.5 rounded-xl border flex items-center gap-2 justify-center",
                   part.status === 'replace' ? 'bg-red-600/10 border-red-600/20 text-red-500' : 
                   part.status === 'warning' ? 'bg-yellow-600/10 border-yellow-600/20 text-yellow-500' : 
                   'bg-blue-600/10 border-blue-600/20 text-blue-500'
                )}>
                   {part.status === 'replace' ? 'CRITICAL' : part.status === 'warning' ? 'SERVICE' : 'OPTIMAL'}
                </div>
              </div>
              <ChevronRight size={24} className="text-slate-800 group-hover:text-red-500 transition-all cursor-pointer" />
            </div>
          </motion.div>
        ))}
      </div>
      
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}


