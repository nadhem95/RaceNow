
import React, { useState } from 'react';
import { Calendar, Clock, User, ChevronRight, Plus, Map, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const schedule = [
  { time: '08:00', event: 'Technical Scrutineering', type: 'compliance' },
  { time: '10:00', event: 'Free Practice 1', type: 'session' },
  { time: '13:00', event: 'Team Lunch / Strategy', type: 'crew' },
  { time: '15:30', event: 'Free Practice 2', type: 'session' },
  { time: '18:00', event: 'Driver Briefing', type: 'compliance' },
];

const stints = [
  { driver: 'Marco Rossi', start: '00:00:00', end: '01:05:00', status: 'completed' },
  { driver: 'Alex Volkov', start: '01:05:00', end: '02:10:00', status: 'current' },
  { driver: 'Sam Smith', start: '02:10:00', end: '03:00:00', status: 'upcoming' },
];

export default function WeekendPlan() {
  const [activeTab, setActiveTab] = useState<'schedule' | 'stints'>('schedule');

  return (
    <div className="space-y-10">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-5xl font-black tracking-tighter mb-2 text-white italic">WEEKEND PLAN</h1>
          <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em]">Strategy, Stints & Event Timeline OS</p>
        </div>
        <div className="bg-slate-950 p-1.5 rounded-2xl border border-slate-800/60 flex shadow-2xl">
          <button 
            onClick={() => setActiveTab('schedule')}
            className={cn(
              "px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
              activeTab === 'schedule' ? 'bg-red-600 text-white shadow-lg shadow-red-600/30' : 'text-slate-500 hover:text-white'
            )}
          >
            Schedule
          </button>
          <button 
            onClick={() => setActiveTab('stints')}
            className={cn(
              "px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
              activeTab === 'stints' ? 'bg-red-600 text-white shadow-lg shadow-red-600/30' : 'text-slate-500 hover:text-white'
            )}
          >
            Stint Planner
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8">
          {activeTab === 'schedule' ? (
            <div className="bento-card border-slate-800/60 p-0 overflow-hidden">
              <div className="p-8 border-b border-slate-800/50 flex items-center justify-between bg-white/[0.02]">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-slate-950 border border-slate-800 rounded-xl">
                    <Calendar className="text-red-500" size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-tighter text-white">Race Weekend: SILVERSTONE</span>
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Global GT3 Series // Day 1 of 3</div>
                  </div>
                </div>
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0D0D10] bg-slate-800" />
                  ))}
                </div>
              </div>
              <div className="divide-y divide-slate-800/40">
                {schedule.map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={i} 
                    className="p-6 flex items-center justify-between hover:bg-white/[0.03] cursor-pointer relative group transition-all"
                  >
                    <div className="flex items-center gap-10">
                      <div className="w-20 font-mono font-black text-red-600 text-lg italic tracking-tighter">{item.time}</div>
                      <div className="w-px h-8 bg-slate-800/50" />
                      <div>
                        <div className="font-black text-white text-base group-hover:text-red-500 transition-colors uppercase tracking-tight">{item.event}</div>
                        <div className="text-[10px] uppercase font-mono text-slate-500 mt-1 tracking-widest">{item.type} // GARAGE 14A // PRIORITY HIGH</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                       {item.type === 'session' && (
                         <span className="text-[9px] font-black bg-red-600 text-white px-3 py-1 rounded-lg uppercase tracking-widest shadow-md shadow-red-600/20">LIVE DATA</span>
                       )}
                       <ChevronRight size={20} className="text-slate-800 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                    {item.type === 'session' && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
               <div className="bento-card">
                 <div className="flex items-center justify-between mb-10">
                   <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-3">
                     <Clock className="text-red-500" size={16} /> Stint Visualizer
                   </h3>
                   <span className="text-[10px] font-mono text-slate-500 uppercase font-black">Ref: Race Simulation v1.4</span>
                 </div>
                 <div className="relative h-28 bg-slate-950 rounded-2xl border-2 border-slate-800/60 overflow-hidden flex shadow-inner">
                    <div className="absolute top-0 bottom-0 left-[35%] w-px bg-red-500 z-10 shadow-[0_0_10px_#ef4444]">
                      <div className="absolute top-0 -translate-x-1/2 bg-red-600 text-[9px] font-black px-2 py-0.5 rounded-b shadow-lg text-white uppercase tracking-widest">RACE LIVE</div>
                    </div>
                    <div className="w-[35%] h-full bg-slate-800/20 border-r border-slate-800/40 flex items-center justify-center group relative cursor-help">
                      <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.15em] group-hover:text-slate-400 transition-colors">Rossi // 65m</span>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-700" />
                    </div>
                    <div className="w-[35%] h-full bg-red-600/10 border-r border-slate-800/40 flex items-center justify-center relative group">
                      <div className="absolute inset-0 bg-red-600/5 animate-pulse" />
                      <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.15em] relative z-10 italic">Volkov // 65m</span>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 shadow-[0_0_10px_#ef4444]" />
                    </div>
                    <div className="w-[30%] h-full bg-slate-900/10 flex items-center justify-center group relative cursor-help">
                      <span className="text-[10px] font-black text-slate-700 uppercase tracking-[0.15em] group-hover:text-slate-500 transition-colors">Smith // 50m</span>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800" />
                    </div>
                 </div>
                 <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stints.map((stint, i) => (
                      <div key={i} className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800/40 hover:bg-slate-950 transition-all group">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">STINT {i+1}</span>
                          <User size={14} className={stint.status === 'current' ? 'text-red-500' : 'text-slate-700'} />
                        </div>
                        <div className="font-black text-white text-lg tracking-tight mb-2 uppercase italic group-hover:text-red-500 transition-colors">{stint.driver}</div>
                        <div className="font-mono text-[11px] text-slate-400 font-bold tracking-tighter">
                          {stint.start} <span className="text-slate-700">➔</span> {stint.end}
                        </div>
                        <div className={cn(
                          "mt-6 text-[9px] font-black uppercase px-3 py-1 rounded-lg border tracking-[0.2em] inline-block",
                          stint.status === 'completed' ? 'bg-slate-900/50 border-slate-800 text-slate-600' :
                          stint.status === 'current' ? 'bg-red-600/10 border-red-600/40 text-red-500 animate-pulse' :
                          'bg-slate-950 border-slate-800/80 text-slate-700'
                        )}>
                          {stint.status}
                        </div>
                      </div>
                    ))}
                 </div>
               </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bento-card">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-3 mb-8">
              <Map className="text-red-500" size={16} /> Neural Track Status
            </h3>
            <div className="space-y-6">
              <div className="p-6 bg-slate-950/50 rounded-2xl border border-slate-800/40">
                <div className="flex justify-between items-center mb-4">
                   <div className="flex flex-col">
                     <span className="text-[10px] text-slate-600 uppercase font-black tracking-widest mb-1 italic text-right">Air Logistics</span>
                     <span className="text-2xl font-black text-white italic">18°C</span>
                   </div>
                   <div className="w-px h-10 bg-slate-800 mx-4" />
                   <div className="flex flex-col text-right">
                     <span className="text-[10px] text-slate-600 uppercase font-black tracking-widest mb-1 italic">Track Surface</span>
                     <span className="text-2xl font-black text-red-500 italic">24°C</span>
                   </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-800/50 flex justify-between text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                   <span>Humidity: 42%</span>
                   <span>Wind: 14km/h NE</span>
                </div>
              </div>
              <div className="p-6 bg-blue-600/5 rounded-2xl border border-blue-500/20 text-blue-500 relative overflow-hidden group">
                <div className="flex items-center gap-3 text-[10px] font-black mb-3 uppercase tracking-widest relative z-10">
                  <Info size={16} className="animate-bounce" /> METEO ALERT // LVL 2
                </div>
                <p className="text-[11px] font-bold leading-relaxed relative z-10 text-blue-400 italic">
                  Neural forecast indicates rain in 20.4m. <br/>
                  <span className="text-white">Prep: P_ZERO_INT_V2 SETS.</span>
                </p>
                <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                   <Map size={80} />
                </div>
              </div>
            </div>
          </div>

          <button className="w-full py-6 bg-white text-black rounded-3xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-red-600 hover:text-white transition-all shadow-2xl shadow-black/40">
            <Plus size={20} /> Deploy TASK Log
          </button>
        </div>
      </div>
    </div>
  );
}
