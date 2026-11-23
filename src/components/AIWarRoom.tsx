
import React, { useState } from 'react';
import { Zap, Send, FileText, Download, Copy, Sparkles, MessageSquare, History, ChevronRight } from 'lucide-react';
import { generateRacingReport } from '../lib/gemini';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'motion/react';

const templates = [
  { id: 'incident', name: 'Incident Report', prompt: 'Write an incident report for stewards. Describe a collision or penalty.' },
  { id: 'sponsor', name: 'Sponsor Deck', prompt: 'Draft a sponsor deck for a new prospective team partner in the logistics industry.' },
  { id: 'pr', name: 'Press Release', prompt: 'Create a race results press release for a double podium finish at Monza.' },
  { id: 'debrief', name: 'Team Debrief', prompt: 'Synthesize handling issues into a technical debrief report for the engineers.' },
];

export default function AIWarRoom() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<{title: string, date: string}[]>([]);

  const handleGenerate = async (customPrompt?: string) => {
    setIsLoading(true);
    try {
      const prompt = customPrompt || input;
      const res = await generateRacingReport(prompt, "Team context: GT3 Endurance Team, Car #72, Drivers: Rossi, Volkov, Smith.");
      setResult(res || '');
      setHistory([{ title: prompt.slice(0, 30) + '...', date: new Date().toLocaleTimeString() }, ...history]);
    } catch (error) {
      console.error(error);
      setResult("Error generating report. Please check API configuration.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-10">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-5xl font-black tracking-tighter mb-2 text-white uppercase italic">AI WAR ROOM</h1>
          <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em]">Neural Incident Analysis & Strategy Simulation</p>
        </div>
        <div className="flex items-center gap-4 bg-slate-900/50 px-4 py-2 rounded-2xl border border-slate-800/40">
          <History size={16} className="text-red-500" />
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{history.length} Logs Saved</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Input Panel */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bento-card bg-red-600/5 border-red-600/20 shadow-lg shadow-red-600/5">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase text-red-500 tracking-[0.2em] mb-6">
              <Zap size={14} className="animate-pulse" /> Neural Input Terminal
            </div>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe scenario (e.g., 'T4 collision with #88 after late lunge...')"
              className="w-full bg-black/60 border border-slate-800/60 rounded-2xl p-6 text-sm text-slate-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none min-h-[250px] resize-none font-mono placeholder:text-slate-700"
            />
            <button
              onClick={() => handleGenerate()}
              disabled={isLoading || !input}
              className="mt-6 w-full bg-red-600 hover:bg-neutral-100 hover:text-black disabled:bg-slate-900 disabled:text-slate-600 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 transition-all uppercase text-xs tracking-widest shadow-xl shadow-red-600/20"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              ) : (
                <>Execute Analysis <Zap size={16} /></>
              )}
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em] pl-4">Optimization Templates</h3>
            <div className="grid grid-cols-1 gap-3">
              {templates.map((t) => (
                <button
                  key={t.id}
                  onClick={() => { setInput(t.prompt); handleGenerate(t.prompt); }}
                  className="bg-slate-900/40 hover:bg-slate-800/60 border border-slate-800/40 p-5 rounded-2xl text-left flex items-center justify-between group transition-all"
                >
                  <span className="text-xs font-black text-slate-300 group-hover:text-white uppercase tracking-tight">{t.name}</span>
                  <ChevronRight size={16} className="text-slate-700 group-hover:text-red-500 transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Output Panel */}
        <div className="lg:col-span-8">
          <div className="bento-card h-[calc(100vh-280px)] flex flex-col p-0 overflow-hidden relative border-slate-800/40 group">
            <div className="p-5 border-b border-slate-800/50 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-slate-950 rounded-xl border border-slate-800">
                  <FileText className="text-red-500" size={18} />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-white">Processed Strategy Output</span>
                  <div className="text-[9px] font-mono text-slate-500 uppercase tracking-tighter">Ready for steward submission // v4.2</div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-400 transition-all" title="Secure Copy">
                  <Copy size={16} />
                </button>
                <button className="p-2.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-400 transition-all" title="Export PDF">
                  <Download size={16} />
                </button>
              </div>
            </div>
            
            <div className="flex-1 p-10 prose prose-invert prose-red max-w-none overflow-y-auto font-sans">
              {!result && !isLoading && (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-20 select-none grayscale group-hover:grayscale-0 transition-all duration-700">
                  <div className="w-24 h-24 bg-red-600/10 rounded-full flex items-center justify-center mb-6">
                    <MessageSquare size={48} className="text-red-600" />
                  </div>
                  <p className="font-mono text-xs uppercase tracking-widest max-w-[280px] leading-relaxed">
                    System Idle. Awaiting neural input. <br/> Draft an incident or choose an optimization path.
                  </p>
                </div>
              )}
              {isLoading && (
                <div className="space-y-6 font-mono text-[11px] text-slate-500">
                  <div className="flex items-center gap-2 text-white">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                    SYSTEM: SCANNING TELEMETRY...
                  </div>
                  <div className="h-3 bg-slate-800/50 rounded-full w-full animate-pulse" />
                  <div className="h-3 bg-slate-800/30 rounded-full w-5/6 animate-pulse" />
                  <div className="h-3 bg-slate-800/50 rounded-full w-11/12 animate-pulse" />
                  <div className="h-3 bg-slate-800/20 rounded-full w-2/3 animate-pulse" />
                  <div className="mt-8 text-red-500 animate-pulse uppercase tracking-[0.3em] font-black">Building Narrative...</div>
                </div>
              )}
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="markdown-body"
                >
                  <ReactMarkdown>{result}</ReactMarkdown>
                </motion.div>
              )}
            </div>
            
            <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
              <Zap size={200} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
