"use client";

import { AlertTriangle, ArrowRight, CheckCircle2, ChevronRight, HelpCircle, Network, ShieldAlert, XCircle } from "lucide-react";

export default function DecisionEnginePage() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-10">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">AI Decision & Recommendation Engine</h1>
        <p className="text-sm text-slate-400">Intelligent scoring, business rules, and technical guardrails</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-800 shadow-sm p-6 overflow-hidden">
          <h3 className="text-sm font-semibold text-white tracking-tight mb-6">Decision Pipeline Architecture</h3>
          
          <div className="flex flex-col gap-2 relative">
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-200 -z-10"></div>
            
            <PipelineNode icon={Network} title="Material Pair Input" desc="Legacy CPSE codes mapped" />
            <PipelineNode icon={CheckCircle2} title="NLP Evidence" desc="Structured attributes generated" />
            <PipelineNode icon={CheckCircle2} title="Semantic Similarity" desc="Cosine distance evaluated" />
            <PipelineNode icon={CheckCircle2} title="ML Prediction" desc="Probability model output" />
            <PipelineNode icon={CheckCircle2} title="Technical Attributes" desc="Exact schema matching" />
            <PipelineNode icon={ShieldAlert} title="Engineering Rules" desc="Hard conflict validation constraints" active color="border-brand-accent text-brand-accent bg-brand-accent/5" />
            
            <div className="ml-16 my-4 p-4 rounded-lg bg-brand-secondary text-white text-center shadow-lg w-48 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full h-4 w-px bg-slate-300"></div>
              <div className="text-[10px] font-bold text-brand-secondary mb-1">FINAL CONFIDENCE</div>
              <div className="text-3xl font-extrabold">96.4%</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-800 shadow-sm p-6">
            <h3 className="text-sm font-semibold text-white tracking-tight mb-4">Decision Bands</h3>
            <div className="space-y-3">
              <DecisionState threshold="≥92%" action="RECOMMEND AUTO-HARMONIZATION" color="bg-brand-success" />
              <DecisionState threshold="75–91%" action="HUMAN EXPERT REVIEW" color="bg-brand-warning" />
              <DecisionState threshold="<75%" action="UNIQUE / DIFFERENT" color="bg-slate-300" textColor="text-slate-300" />
            </div>
            <div className="mt-4 text-[10px] text-slate-400 bg-slate-900 p-2 rounded italic flex items-start gap-2">
              <HelpCircle className="w-3 h-3 shrink-0 mt-0.5" />
              Initial proposed thresholds — require calibration on real CPSE data.
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-md rounded-xl border border-brand-critical/30 shadow-[0_0_15px_rgba(239,68,68,0.1)] p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-10 pointer-events-none text-brand-critical">
              <ShieldAlert className="w-32 h-32" />
            </div>
            
            <h3 className="text-sm font-bold text-brand-critical flex items-center gap-2 mb-4 relative z-10">
              <AlertTriangle className="w-4 h-4" />
              HARD CONFLICT DEMO
            </h3>
            
            <p className="text-xs text-slate-400 mb-6 relative z-10">
              Critical engineering attributes cannot be averaged away. The engine blocks auto-mapping despite high ML scores.
            </p>

            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center bg-slate-900 p-2 rounded text-xs">
                <span className="font-mono text-slate-400">Steel Pipe 4 inch 150 PSI</span>
                <span className="font-mono text-slate-400">Steel Pipe 4 inch 300 PSI</span>
              </div>
              
              <div className="space-y-2">
                <ScoreRow label="Semantic Sim." score="97%" status="pass" />
                <ScoreRow label="Dimension" score="100%" status="pass" />
                <ScoreRow label="Metallurgy" score="100%" status="pass" />
                <div className="p-2 border border-brand-critical bg-brand-critical/5 rounded-md flex justify-between items-center text-sm">
                  <span className="font-semibold text-brand-critical">Pressure Rating</span>
                  <span className="font-mono font-bold text-brand-critical">150 PSI ≠ 300 PSI</span>
                </div>
              </div>
              
              <div className="mt-4 border-t border-slate-800 pt-4">
                <div className="text-[10px] font-bold text-slate-400 mb-1">DECISION OVERRIDE</div>
                <div className="font-bold text-brand-critical text-sm bg-brand-critical/10 py-2 px-3 rounded text-center">
                  DO NOT AUTO-MAP
                </div>
                <div className="text-center text-xs text-slate-400 mt-2 flex items-center justify-center gap-1">
                  <ArrowRight className="w-3 h-3" /> Route to HUMAN EXPERT REVIEW
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PipelineNode({ icon: Icon, title, desc, active = false, color = "border-slate-800 text-slate-400 bg-slate-900/50 backdrop-blur-md" }: any) {
  return (
    <div className="flex items-center gap-4 relative">
      <div className={`w-12 h-12 rounded-full border-2 ${color} flex items-center justify-center bg-slate-900/50 backdrop-blur-md z-10 shrink-0`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className={`flex-1 p-3 rounded-lg border ${active ? 'border-brand-accent shadow-sm' : 'border-slate-800'} bg-slate-900/50 backdrop-blur-md`}>
        <div className={`font-semibold text-sm ${active ? 'text-brand-accent' : 'text-slate-200'}`}>{title}</div>
        <div className="text-xs text-slate-400">{desc}</div>
      </div>
    </div>
  );
}

function DecisionState({ threshold, action, color, textColor = "text-white" }: { threshold: string, action: string, color: string, textColor?: string }) {
  return (
    <div className={`rounded-lg p-3 ${color} ${textColor} flex justify-between items-center shadow-sm`}>
      <span className="font-bold text-lg">{threshold}</span>
      <span className="text-xs font-bold tracking-wider">{action}</span>
    </div>
  );
}

function ScoreRow({ label, score, status }: { label: string, score: string, status: string }) {
  return (
    <div className="flex justify-between items-center text-sm px-2">
      <span className="text-slate-400">{label}</span>
      <div className="flex items-center gap-2">
        <span className="font-semibold text-white">{score}</span>
        {status === 'pass' ? <CheckCircle2 className="w-4 h-4 text-brand-success" /> : <XCircle className="w-4 h-4 text-brand-critical" />}
      </div>
    </div>
  );
}
