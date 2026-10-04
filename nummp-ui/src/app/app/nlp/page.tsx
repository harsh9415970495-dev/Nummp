"use client";

import { ArrowRight, Box, Check, Copy, Settings, Zap, Terminal, FileJson, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Bolts & Fasteners", "Valves", "Pipes & Fittings", "Bearings", "Gaskets"];

export default function NlpPage() {
  const [activeCategory, setActiveCategory] = useState("Valves");
  const [isScanning, setIsScanning] = useState(true);

  // Simulate scanning effect
  useEffect(() => {
    const timer = setInterval(() => {
      setIsScanning(prev => !prev);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8 max-w-6xl mx-auto pb-10"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-brand-accent animate-pulse" />
            AI NLP Pipeline
          </h1>
          <p className="text-slate-400 mt-1">Transforming raw unstructured ERP text into verified semantic schemas.</p>
        </div>
      </div>

      <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800 shadow-xl overflow-hidden relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="p-6 border-b border-slate-800/60 bg-slate-900/60 flex items-center justify-between">
          <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
            <Terminal className="w-4 h-4 text-brand-secondary" />
            Live Extraction Feed
          </h3>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-success"></span>
            </span>
            <span className="text-xs font-semibold text-brand-success tracking-wider uppercase">Processing Active</span>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 p-6 items-stretch relative z-10">
          
          {/* Left Side: Pipeline */}
          <div className="flex-1 bg-slate-950/80 rounded-xl border border-slate-800 flex flex-col justify-center relative overflow-hidden shadow-inner group">
            <div className={clsx(
              "absolute top-0 left-0 h-1 w-full transition-all duration-1000",
              isScanning ? "bg-gradient-to-r from-transparent via-brand-accent to-transparent translate-x-full" : "-translate-x-full"
            )}></div>
            
            <div className="p-6">
              <div className="text-[10px] font-bold text-slate-500 mb-2 uppercase tracking-widest">Unstructured Input</div>
              <div className="font-mono text-xl font-bold text-white bg-slate-900 p-5 rounded-lg border border-slate-800/80 shadow-sm relative overflow-hidden">
                <div className="relative z-10">
                  <span className="text-brand-secondary">BALL VALVE</span>{" "}
                  <span className="text-amber-400">SS316</span>{" "}
                  <span className="text-emerald-400">2 INCH</span>{" "}
                  <span className="text-purple-400">150#</span>{" "}
                  <span className="text-rose-400">RF</span>
                </div>
                {/* Scanner line effect */}
                <motion.div 
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 w-full h-[2px] bg-brand-accent/50 shadow-[0_0_8px_currentColor] z-20"
                ></motion.div>
              </div>
              
              <div className="mt-8 space-y-3">
                <PipelineStep name="Tokenization" delay={0.1} />
                <PipelineStep name="Abbreviation Expansion" delay={0.2} />
                <PipelineStep name="Transformer NER Model" active delay={0.3} />
                <PipelineStep name="Attribute Schema Mapping" delay={0.4} />
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex flex-col items-center justify-center">
            <motion.div 
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-12 h-12 rounded-full bg-brand-secondary/10 text-brand-secondary flex items-center justify-center border border-brand-secondary/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          </div>
          
          {/* Right Side: Extraction Output */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex-[1.5] bg-slate-950/90 border border-slate-700/50 shadow-2xl rounded-xl p-0 overflow-hidden flex flex-col relative"
          >
            <div className="absolute top-0 right-0 p-3 opacity-10 pointer-events-none">
              <FileJson className="w-32 h-32 text-brand-secondary" />
            </div>

            <div className="bg-slate-900 border-b border-slate-800 p-4">
              <div className="flex justify-between items-center">
                <div className="text-xs font-bold text-slate-400 tracking-wider">STRUCTURED JSON OUTPUT</div>
                <div className="text-[10px] bg-brand-success/10 text-brand-success px-2 py-0.5 rounded border border-brand-success/20 font-mono">CONFIDENCE: 98.4%</div>
              </div>
            </div>
            
            <div className="p-4 flex-1">
              <table className="w-full text-sm text-left">
                <thead className="text-[10px] text-slate-500 uppercase tracking-widest border-b border-slate-800/50">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Entity Map</th>
                    <th className="px-4 py-3 font-semibold">Normalized Value</th>
                    <th className="px-4 py-3 font-semibold text-right">Probability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  <ExtractionRow attr="Item Type" val="BALL VALVE" conf={99} color="text-brand-secondary" />
                  <ExtractionRow attr="Metallurgy" val="SS316" conf={96} color="text-amber-400" />
                  <ExtractionRow attr="Dimension" val="2 INCH" conf={98} color="text-emerald-400" />
                  <ExtractionRow attr="Pressure Rating" val="150 LBS" conf={99} color="text-purple-400" />
                  <ExtractionRow attr="End Connection" val="RAISED FACE" conf={92} color="text-rose-400" />
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800 shadow-xl overflow-hidden"
      >
        <div className="bg-slate-900/80 p-5 border-b border-slate-800">
          <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
            <Settings className="w-5 h-5 text-brand-secondary" />
            Category-Specific Schema Validation
          </h3>
        </div>
        
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-64 border-r border-slate-800 bg-slate-950/50 p-4 flex flex-col gap-2">
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                whileHover={{ x: 4 }}
                onClick={() => setActiveCategory(cat)}
                className={clsx(
                  "text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all",
                  activeCategory === cat 
                    ? "bg-slate-800 border border-slate-700 shadow-md text-white shadow-brand-secondary/5" 
                    : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 border border-transparent"
                )}
              >
                {cat}
              </motion.button>
            ))}
          </div>
          
          <div className="flex-1 p-8 bg-slate-900/20">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
              Required Schema: <span className="text-white">{activeCategory}</span>
            </h4>
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {getCategoryAttributes(activeCategory).map((attr, i) => (
                  <motion.div 
                    key={attr} 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 shadow-sm hover:shadow-lg hover:border-brand-secondary/40 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-success/10 text-brand-success flex items-center justify-center shrink-0 group-hover:bg-brand-success group-hover:text-slate-950 transition-colors shadow-[0_0_10px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                        <Check className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-slate-200 mb-1">{attr}</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider">Mandatory Field</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function PipelineStep({ name, active = false, delay }: { name: string, active?: boolean, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className={clsx(
        "flex items-center gap-4 p-3 rounded-lg border text-sm transition-all",
        active ? "bg-brand-secondary/10 border-brand-secondary/50 text-white font-bold shadow-[0_0_15px_rgba(59,130,246,0.1)]" : "bg-slate-900/30 border-slate-800/50 text-slate-400"
      )}
    >
      <div className={clsx(
        "w-2.5 h-2.5 rounded-full shrink-0", 
        active ? "bg-brand-secondary animate-pulse shadow-[0_0_8px_var(--color-brand-secondary)]" : "bg-slate-700"
      )} />
      {name}
      {active && <div className="ml-auto text-[10px] bg-brand-secondary/20 text-brand-secondary px-2 py-0.5 rounded border border-brand-secondary/30 uppercase tracking-widest">Active</div>}
    </motion.div>
  );
}

function ExtractionRow({ attr, val, conf, color }: { attr: string, val: string, conf: number, color: string }) {
  return (
    <tr className="hover:bg-slate-900/50 transition-colors group">
      <td className="px-4 py-4 font-semibold text-slate-300 text-sm">{attr}</td>
      <td className="px-4 py-4 font-mono font-bold">
        <span className={clsx("px-2 py-1 rounded bg-slate-900 border border-slate-800 shadow-inner", color)}>
          {val}
        </span>
      </td>
      <td className="px-4 py-4 text-right">
        <div className="flex items-center justify-end gap-3">
          <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${conf}%` }}
              transition={{ duration: 1, delay: 0.5 }}
              className={clsx("h-full rounded-full", conf > 95 ? "bg-brand-success" : "bg-brand-warning")} 
            ></motion.div>
          </div>
          <span className="text-xs font-bold text-slate-300 w-8">{conf}%</span>
        </div>
      </td>
    </tr>
  );
}

function getCategoryAttributes(cat: string) {
  switch (cat) {
    case "Bolts & Fasteners": return ["Type", "Thread / Size", "Length", "Material Grade", "Coating", "Standard"];
    case "Valves": return ["Type", "Size", "Pressure Class", "Body Material", "End Connection", "Standard"];
    case "Pipes & Fittings": return ["Nominal Size", "Schedule / Wall", "Material Grade", "Seamless / Welded", "End Type"];
    case "Bearings": return ["Series / Model", "Bore", "Outer Diameter", "Width", "Seal / Clearance"];
    case "Gaskets": return ["Type", "Size", "Pressure Rating", "Material", "Facing"];
    default: return ["Type", "Size", "Material"];
  }
}
