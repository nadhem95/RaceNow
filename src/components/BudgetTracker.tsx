
import React from 'react';
import { DollarSign, PieChart, TrendingDown, Receipt, FilePlus, BarChart3, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { cn } from '../lib/utils';

const data = [
  { name: 'Fuel', spent: 12400, budget: 15000 },
  { name: 'Tires', spent: 48000, budget: 45000 },
  { name: 'Entry', spent: 8500, budget: 8500 },
  { name: 'Travel', spent: 15200, budget: 18000 },
  { name: 'Hosp', spent: 6000, budget: 10000 },
];

export default function BudgetTracker() {
  return (
    <div className="space-y-10">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-5xl font-black tracking-tighter mb-2 text-white uppercase italic">FINANCIAL GRID</h1>
          <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em]">Season Burn Rate & Operational Cost Analysis</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-white/5 border border-slate-800 text-slate-400 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:text-white transition-all flex items-center gap-2">
            <Receipt size={18} /> Feed Link
          </button>
          <button className="bg-red-600 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-neutral-100 hover:text-black transition-all shadow-xl shadow-red-600/20">
            <FilePlus size={18} /> New Ledger
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Season Budget', value: '€450,000', icon: PieChart, color: 'text-blue-500', sub: 'Target: €440k' },
          { label: 'Total Spent', value: '€90,100', icon: TrendingDown, color: 'text-red-500', sub: '20% of cap' },
          { label: 'Available', value: '€359,900', icon: DollarSign, color: 'text-green-500', sub: 'Runway: 8 events' },
          { label: 'Avg Weekend Cost', value: '€22,525', icon: BarChart3, color: 'text-purple-500', sub: '+5% vs est' },
        ].map((v, i) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={v.label} 
            className="bento-card group"
          >
            <div className="flex items-center justify-between mb-8">
              <div className={cn("p-2.5 rounded-xl bg-white/5 border border-white/10", v.color)}>
                <v.icon size={16} />
              </div>
              <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{v.label}</span>
            </div>
            <div className="text-3xl font-black text-white tracking-tighter mb-1">{v.value}</div>
            <div className="text-[9px] font-mono text-slate-500 uppercase font-black">{v.sub}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 bento-card">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">Category Burn Log</h3>
            <div className="flex gap-2">
               <div className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
               <span className="text-[10px] font-mono text-slate-600 uppercase font-black tracking-tighter italic">Live audit enabled</span>
            </div>
          </div>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b', fontWeight: 900 }} />
                <Tooltip 
                  cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                  contentStyle={{ backgroundColor: '#0D0D10', border: '1px solid #1e293b', borderRadius: '16px', fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold' }}
                />
                <Bar dataKey="spent" radius={[8, 8, 0, 0]} barSize={40}>
                  {data.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.spent > entry.budget ? '#dc2626' : '#1e293b'}
                      className="transition-all hover:opacity-80"
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-5 bento-card flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">Recent Ledger</h3>
            <button className="text-[10px] font-black text-red-500 hover:text-white uppercase tracking-widest transition-colors mb-2">View Audit</button>
          </div>
          <div className="flex-1 space-y-3 font-mono">
            {[
              { vendor: 'Pirelli Motorsport', type: 'Tires', date: 'MAY 04', amount: '€18,240', status: 'PAID' },
              { vendor: 'Spa-Franchorchamps', type: 'Entry', date: 'MAY 02', amount: '€4,500', status: 'PENDING' },
              { vendor: 'Shell V-Power', type: 'Fuel', date: 'APR 28', amount: '€2,120', status: 'AUDITED' },
            ].map(inv => (
              <div key={inv.vendor} className="p-4 bg-slate-950/50 border border-slate-800/40 rounded-2xl flex items-center justify-between hover:bg-slate-950 transition-all group">
                <div className="flex items-center gap-5">
                  <div className="text-[10px] font-black text-slate-700 group-hover:text-red-500 transition-colors uppercase italic">{inv.date}</div>
                  <div className="w-px h-6 bg-slate-800" />
                  <div>
                    <div className="text-white font-black text-xs uppercase tracking-tight">{inv.vendor}</div>
                    <div className="text-[9px] text-slate-500 uppercase font-black">{inv.type} • {inv.status}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-white font-black text-sm tracking-tighter">{inv.amount}</div>
                  <ChevronRight size={16} className="text-slate-800 group-hover:text-red-500 transition-colors" />
                </div>
              </div>
            ))}
          </div>
          <button className="mt-6 w-full py-4 bg-slate-900 hover:bg-slate-800 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400 transition-all border border-slate-800/40">
             Expand Reconciliation Ledger
          </button>
        </div>
      </div>
    </div>
  );
}
