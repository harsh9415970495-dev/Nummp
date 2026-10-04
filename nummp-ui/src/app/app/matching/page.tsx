"use client";

import { AlertTriangle, ArrowRight, Check, CheckCircle2, Copy, FileText, Info, AlertOctagon } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

export default function MatchingPage() {
  return (
    <div className="space-y-6 max-w-[1400px] mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">AI Material Matching</h1>
          <p className="text-sm text-slate-400">Semantic similarity + technical attributes + engineering rules</p>
        </div>
        <div className="flex items-center gap-2 bg-brand-secondary text-white px-4 py-2 rounded-md shadow-sm">
          <span className="text-sm font-medium">Auto-Harmonize</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* MATERIAL A */}
        <div className="lg:col-span-5 flex flex-col bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-800 shadow-sm overflow-hidden">
          <div className="bg-slate-900 p-4 border-b border-slate-800 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 tracking-wider">MATERIAL A</span>
              <span className="bg-brand-secondary text-white text-[10px] px-2 py-0.5 rounded uppercase font-bold">CPCL</span>
            </div>
            <div className="text-xs text-slate-400 font-mono">Legacy: MAT00125</div>
          </div>
          <div className="p-6 flex-1">
            <h3 className="text-lg font-bold text-white mb-2 font-mono bg-slate-800 p-3 rounded-md">
              HEX BLT SS316 M12X50
            </h3>
            <p className="text-sm text-slate-400 mb-6 flex items-center gap-1">
              <Info className="w-4 h-4" /> Raw ERP String
            </p>
            
            <div className="space-y-4">
              <AttributeRow label="Category" value="Fastener" />
              <AttributeRow label="Material" value="SS316" />
              <AttributeRow label="Size" value="M12" />
              <AttributeRow label="Length" value="50 MM" />
              <AttributeRow label="UOM" value="PCS" />
            </div>
          </div>
        </div>

        {/* AI CONFIDENCE CENTER */}
        <div className="lg:col-span-2 flex flex-col items-center justify-center relative py-10 lg:py-0">
          <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 -z-10 hidden lg:block"></div>
          <div className="absolute left-1/2 top-0 h-full w-px bg-slate-200 -z-10 block lg:hidden"></div>
          
          <div className="bg-slate-900/50 backdrop-blur-md p-4 rounded-2xl border-2 border-brand-success shadow-lg flex flex-col items-center justify-center relative z-10 w-40 h-40">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 text-center">Confidence</div>
            <div className="text-4xl font-extrabold text-brand-success">96.4%</div>
            <div className="text-[10px] font-medium text-slate-400 mt-2 text-center bg-slate-900 px-2 py-1 rounded-full w-full">
              Potential Same
            </div>
          </div>
        </div>

        {/* MATERIAL B */}
        <div className="lg:col-span-5 flex flex-col bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-800 shadow-sm overflow-hidden">
          <div className="bg-slate-900 p-4 border-b border-slate-800 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 tracking-wider">MATERIAL B</span>
              <span className="bg-brand-secondary text-white text-[10px] px-2 py-0.5 rounded uppercase font-bold">IOCL</span>
            </div>
            <div className="text-xs text-slate-400 font-mono">Legacy: BOLT4521</div>
          </div>
          <div className="p-6 flex-1">
            <h3 className="text-lg font-bold text-white mb-2 font-mono bg-slate-800 p-3 rounded-md">
              BOLT HEXAGONAL SS316 12MM X 50MM
            </h3>
            <p className="text-sm text-slate-400 mb-6 flex items-center gap-1">
              <Info className="w-4 h-4" /> Raw ERP String
            </p>
            
            <div className="space-y-4">
              <AttributeRow label="Category" value="Fastener" />
              <AttributeRow label="Material" value="SS316" />
              <AttributeRow label="Size" value="12 MM" />
              <AttributeRow label="Length" value="50 MM" />
              <AttributeRow label="UOM" value="EA" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-800 shadow-sm overflow-hidden">
          <div className="bg-slate-900 p-4 border-b border-slate-800">
            <h3 className="text-sm font-semibold text-white tracking-tight">Attribute Comparison</h3>
          </div>
          <div className="p-0 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-400 uppercase bg-slate-900 border-b border-slate-800">
                <tr>
                  <th className="px-6 py-3 font-semibold">Attribute</th>
                  <th className="px-6 py-3 font-semibold">Material A</th>
                  <th className="px-6 py-3 font-semibold">Material B</th>
                  <th className="px-6 py-3 font-semibold text-center">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <ComparisonTableRow attr="Category" valA="Fastener" valB="Fastener" status="match" />
                <ComparisonTableRow attr="Material" valA="SS316" valB="SS316" status="match" />
                <ComparisonTableRow attr="Size" valA="M12" valB="12 MM" status="match" />
                <ComparisonTableRow attr="Length" valA="50 MM" valB="50 MM" status="match" />
                <ComparisonTableRow attr="UOM" valA="PCS" valB="EA" status="warning" note="Normalized" />
                <ComparisonTableRow attr="Rating" valA="-" valB="-" status="neutral" />
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-800 shadow-sm overflow-hidden flex flex-col">
          <div className="bg-slate-900 p-4 border-b border-slate-800">
            <h3 className="text-sm font-semibold text-white tracking-tight">Semantic Similarity & Vector Search</h3>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-8 relative">
              <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 -z-10 border-dashed border-t"></div>
              <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-lg p-3 text-center shadow-sm w-32">
                <div className="text-[10px] text-slate-400 font-bold mb-1">VECTOR A</div>
                <div className="text-xs font-mono text-brand-secondary overflow-hidden text-ellipsis">[0.12, 0.45, ...]</div>
              </div>
              <div className="bg-brand-secondary text-white rounded-full px-3 py-1 text-xs font-bold shadow-md relative z-10 flex items-center gap-1">
                Cosine <ArrowRight className="w-3 h-3" /> 94%
              </div>
              <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-lg p-3 text-center shadow-sm w-32">
                <div className="text-[10px] text-slate-400 font-bold mb-1">VECTOR B</div>
                <div className="text-xs font-mono text-brand-accent overflow-hidden text-ellipsis">[0.11, 0.47, ...]</div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-lg p-4 border border-slate-800 flex-1">
              <h4 className="text-xs font-bold text-slate-400 mb-3 flex items-center gap-1 group relative w-fit">
                TOP-K CANDIDATE RETRIEVAL
                <Info className="w-3 h-3 cursor-pointer" />
                <div className="absolute bottom-full left-0 mb-2 w-64 bg-slate-800 text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                  Text ko numerical vectors mein convert karke meaning-based similarity find ki jaati hai.
                </div>
              </h4>
              <div className="space-y-2">
                <CandidateRow rank={1} cpse="IOCL" desc="BOLT HEXAGONAL SS316 12MM X 50MM" sim="94%" active />
                <CandidateRow rank={2} cpse="ONGC" desc="SS316 HEX BOLT M12*50" sim="93%" />
                <CandidateRow rank={3} cpse="BPCL" desc="HEXAGON BOLT SS316 M12" sim="88%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AttributeRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
      <span className="text-sm font-medium text-slate-400">{label}</span>
      <span className="text-sm font-semibold text-white">{value}</span>
    </div>
  );
}

function ComparisonTableRow({ attr, valA, valB, status, note }: { attr: string, valA: string, valB: string, status: 'match' | 'warning' | 'neutral', note?: string }) {
  return (
    <tr className="hover:bg-slate-900 transition-colors">
      <td className="px-6 py-3 font-medium text-white">{attr}</td>
      <td className="px-6 py-3 font-mono text-slate-400">{valA}</td>
      <td className="px-6 py-3 font-mono text-slate-400">{valB}</td>
      <td className="px-6 py-3 text-center">
        {status === 'match' && <CheckCircle2 className="w-5 h-5 text-brand-success mx-auto" />}
        {status === 'warning' && (
          <div className="flex items-center justify-center gap-1 text-brand-warning">
            <AlertTriangle className="w-4 h-4" />
            {note && <span className="text-xs font-medium">{note}</span>}
          </div>
        )}
        {status === 'neutral' && <span className="text-slate-400 text-xs font-medium">N/A</span>}
      </td>
    </tr>
  );
}

function CandidateRow({ rank, cpse, desc, sim, active = false }: { rank: number, cpse: string, desc: string, sim: string, active?: boolean }) {
  return (
    <div className={clsx(
      "flex items-center gap-3 p-2 rounded border text-sm transition-colors",
      active ? "bg-slate-900/50 backdrop-blur-md border-brand-secondary shadow-sm" : "bg-transparent border-slate-800 hover:bg-slate-800"
    )}>
      <span className="font-mono text-slate-400 text-xs w-4">{rank}.</span>
      <span className={clsx("text-[10px] font-bold px-1.5 py-0.5 rounded", active ? "bg-brand-secondary text-white" : "bg-slate-200 text-slate-400")}>
        {cpse}
      </span>
      <span className="font-mono text-xs flex-1 truncate text-slate-300">{desc}</span>
      <span className={clsx("font-semibold text-xs", active ? "text-brand-success" : "text-slate-400")}>{sim}</span>
    </div>
  );
}
