
import React from 'react';
import { Trophy, Share2, TrendingUp, Calendar, ArrowUpRight, BarChart3, ChevronRight, Target, PieChart } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const sponsors = [
  { name: 'RedLine Performance', tier: 'Title Partner', status: 'ACTIVE', value: '750k', renewal: '2026-12-31' },
  { name: 'Castrol Edge', tier: 'Technical Partner', status: 'ACTIVE', value: '420k', renewal: '2027-01-15' },
  { name: 'Akrapovič', tier: 'Official Supplier', status: 'ACTIVE', value: '180k', renewal: '2026-06-30' },
];

export default function SponsorshipMachine() {
  return (
    <div className="space-y-10">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-5xl font-black tracking-tighter mb-2 text-white italic uppercase">PARTNER GRID</h1>
          <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em]">Activation Tracking & Partner Retention OS</p>
        </div>
        <button className="bg-red-600 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-neutral-100 hover:text-black transition-all shadow-xl shadow-red-600/20">
          <TrendingUp size={18} /> Run Season Audit
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 flex flex-col">
          <div className="bento-card p-0 overflow-hidden flex-1 border-slate-800/60">
            <div className="p-8 border-b border-slate-800/50 flex items-center justify-between bg-white/[0.02]">
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-3">
                <Trophy className="text-red-500" size={16} /> Partner Portfolio
              </h2>
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">03 ACTIVE ENTRIES</div>
            </div>
            <div className="divide-y divide-slate-800/40">
              {sponsors.map((s, i) => (
                <div key={s.name} className="p-8 flex items-center justify-between hover:bg-white/[0.03] transition-all group cursor-pointer relative">
                  <div className="flex items-center gap-8">
                    <div className="w-16 h-16 rounded-2xl bg-slate-950 border-2 border-slate-800 flex items-center justify-center font-black italic text-2xl text-red-600 group-hover:border-red-600 transition-all shadow-xl">
                      {s.name[0]}
                    </div>
                    <div>
                      <div className="font-black text-white text-lg tracking-tight uppercase italic group-hover:text-red-500 transition-all">{s.name}</div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-1">{s.tier}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-12">
                    <div className="text-right">
                      <div className="text-[10px] text-slate-600 uppercase font-black tracking-widest mb-1 italic">Value / YR</div>
                      <div className="text-base font-black text-white font-mono tracking-tighter">€{s.value}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-slate-600 uppercase font-black tracking-widest mb-1 italic">Renewal</div>
                      <div className="text-xs font-black text-slate-400 uppercase">{s.renewal}</div>
                    </div>
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-slate-700 group-hover:text-white transition-all">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                  {s.tier.includes('Title') && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bento-card group relative overflow-hidden bg-gradient-to-br from-slate-900/60 to-slate-950/60">
             <div className="relative z-10">
               <div className="flex items-center justify-between mb-8">
                 <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">Activation Log</h3>
                 <PieChart size={18} className="text-red-500" />
               </div>
               <div className="space-y-8">
                 {[
                   { label: 'Network Exposure', val: 82, color: 'bg-red-600' },
                   { label: 'Hospitality Assets', val: 45, color: 'bg-slate-700' },
                   { label: 'Neural Sentiment', val: 95, color: 'bg-green-600' },
                 ].map(item => (
                   <div key={item.label}>
                     <div className="flex justify-between text-[10px] font-black uppercase mb-3 tracking-widest">
                       <span className={cn(item.val < 50 ? "text-slate-500" : "text-white")}>{item.label}</span>
                       <span className="text-slate-500 font-mono italic">{item.val}%</span>
                     </div>
                     <div className="h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800 shadow-inner">
                       <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${item.val}%` }}
                        className={cn("h-full transition-all duration-1000", item.color, item.val > 90 && "shadow-[0_0_10px_#10b981]")}
                       />
                     </div>
                   </div>
                 ))}
               </div>
               <button className="w-full mt-10 py-4 bg-white text-black rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-xl">
                 Generate Performance Deck
               </button>
             </div>
             <BarChart3 className="absolute -bottom-8 -right-8 text-white/[0.02] w-48 h-48" />
          </div>

          <button className="w-full py-6 bg-[#0D0D10] border-2 border-dashed border-slate-800/40 rounded-3xl text-slate-600 text-[10px] font-black uppercase tracking-[0.3em] hover:border-red-600/40 hover:text-red-500 transition-all flex items-center justify-center gap-3">
            <Share2 size={18} /> Asset Distribution
          </button>
        </div>
      </div>
    </div>
  );
}
