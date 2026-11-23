
import React from 'react';
import { Users, CreditCard, HeartPulse, Trophy, Plus, FileBadge, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const drivers = [
  { 
    name: 'Marco Rossi', 
    id: 'Rossi-72', 
    car: '#72', 
    rating: 'Gold', 
    license: 'A-124982', 
    licenseExpiry: '2026-12-31', 
    med: 'OK', 
    blood: 'O+', 
    image: 'MR' 
  },
  { 
    name: 'Alex Volkov', 
    id: 'Volkov-91', 
    car: '#72', 
    rating: 'Silver', 
    license: 'B-883293', 
    licenseExpiry: '2026-06-15', 
    med: 'Warning', 
    blood: 'A-', 
    image: 'AV' 
  },
];

export default function DriverHub() {
  return (
    <div className="space-y-10">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-5xl font-black tracking-tighter mb-2 text-white">DRIVER HUB</h1>
          <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em]">Compliance, Performance & Neural Roster Management</p>
        </div>
        <button className="bg-white text-black px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-red-600 hover:text-white transition-all shadow-xl shadow-black/20">
          <Plus size={18} /> Enroll NEW Driver
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {drivers.map((driver, i) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            key={driver.id}
            className="bento-card group relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border-2 border-red-600/20 flex items-center justify-center text-3xl font-black text-white italic shadow-2xl group-hover:border-red-600 transition-all">
                    {driver.image}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white tracking-tighter">{driver.name.toUpperCase()}</h3>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-[10px] font-black bg-red-600 text-white px-3 py-1 rounded-lg uppercase tracking-widest shadow-md shadow-red-600/20">
                        {driver.rating}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em]">
                        CAR ENTRY {driver.car}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 text-slate-700 group-hover:text-red-500 transition-colors">
                  <ChevronRight size={24} />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 border-t border-slate-800/50 pt-8">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">
                    <CreditCard size={12} className="text-red-500" /> License
                  </div>
                  <div className="text-base font-black text-white tracking-tight">{driver.license}</div>
                  <div className={cn(
                    "text-[10px] font-mono mt-1 uppercase font-bold",
                    driver.licenseExpiry.includes('2026') ? 'text-green-500' : 'text-red-500'
                  )}>
                    EXP: {driver.licenseExpiry}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">
                    <HeartPulse size={12} className="text-red-500" /> Medical
                  </div>
                  <div className="text-base font-black text-white tracking-tight flex items-center gap-2">
                    {driver.med}
                    <span className={cn("w-2 h-2 rounded-full", driver.med === 'OK' ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-yellow-500 animate-pulse shadow-[0_0_10px_rgba(234,179,8,0.5)]')} />
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 mt-1 uppercase font-bold">TYPE {driver.blood}</div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">
                    <Trophy size={12} className="text-red-500" /> Season
                  </div>
                  <div className="text-base font-black text-white tracking-tight italic">2 PODIUMS</div>
                  <div className="text-[10px] font-mono text-slate-500 mt-1 uppercase font-bold tracking-tighter">RD 04 // GTWCE</div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-800/50">
                <button className="w-full py-4 bg-slate-950/50 hover:bg-red-600/10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-red-500 rounded-2xl border border-slate-800/50 transition-all">
                  Compile Racing Resume Log
                </button>
              </div>
            </div>
            
            <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
               <Users size={180} />
            </div>
          </motion.div>
        ))}
        
        {/* Empty Slot */}
        <div className="bento-card border-dashed border-slate-800/60 flex flex-col items-center justify-center min-h-[350px] group cursor-pointer hover:border-slate-700 transition-all">
           <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center text-slate-700 group-hover:text-white group-hover:bg-slate-800 transition-all mb-4">
             <Plus size={32} />
           </div>
           <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">Await Seat Assignment</span>
        </div>
      </div>
    </div>
  );
}
