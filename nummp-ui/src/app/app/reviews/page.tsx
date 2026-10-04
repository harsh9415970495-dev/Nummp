"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle, ChevronRight, Eye, X, Check, Search, Filter } from "lucide-react";
import clsx from "clsx";

const reviewData = [
  { id: "REV-1042", matA: "MAT00125", matB: "BOLT4521", cpse: "CPCL / IOCL", category: "Fastener", confidence: "96.4%", conflict: "None", relation: "Exact / Same", status: "Pending" },
  { id: "REV-1043", matA: "VAL-992", matB: "VLV-1002", cpse: "ONGC / BPCL", category: "Valves", confidence: "89.2%", conflict: "Rating", relation: "Functionally Eq.", status: "Pending" },
  { id: "REV-1044", matA: "BRG-6205", matB: "BRG-6205-Z", cpse: "HPCL / NTPC", category: "Bearings", confidence: "91.5%", conflict: "Seal Type", relation: "Near Duplicate", status: "Pending" },
  { id: "REV-1045", matA: "PIP-100", matB: "PIP-100-S", cpse: "CPCL / ONGC", category: "Pipes", confidence: "98.1%", conflict: "None", relation: "Exact / Same", status: "Approved" },
];

export default function ReviewsPage() {
  const [selectedReview, setSelectedReview] = useState<any>(null);

  return (
    <div className="h-full flex flex-col relative overflow-hidden">
      <div className="mb-6 shrink-0">
        <h1 className="text-2xl font-bold text-white tracking-tight">Expert Validation Queue</h1>
        <p className="text-sm text-slate-400">Human-in-the-loop review for uncertain or high-risk matches</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6 shrink-0">
        <QueueCard title="Pending Review" value="8,421" type="neutral" />
        <QueueCard title="High Risk" value="342" type="critical" />
        <QueueCard title="Functionally Equivalent" value="1,204" type="warning" />
        <QueueCard title="Technical Conflicts" value="856" type="critical" />
      </div>

      <div className="bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-800 shadow-sm flex-1 flex flex-col min-h-0">
        <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900 shrink-0">
          <div className="relative w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search queue..." 
              className="w-full pl-9 pr-3 py-1.5 text-sm border border-slate-800 rounded-md focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
            />
          </div>
          <button className="flex items-center gap-2 text-sm text-slate-400 bg-slate-900/50 backdrop-blur-md border border-slate-800 px-3 py-1.5 rounded-md hover:bg-slate-900">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
        
        <div className="flex-1 overflow-auto">
          <table className="w-full text-sm text-left whitespace-nowrap">
            <thead className="text-xs text-slate-400 uppercase bg-slate-900 border-b border-slate-800 sticky top-0 z-10 shadow-sm">
              <tr>
                <th className="px-6 py-3 font-semibold">Material A</th>
                <th className="px-6 py-3 font-semibold">Material B</th>
                <th className="px-6 py-3 font-semibold">CPSE</th>
                <th className="px-6 py-3 font-semibold">Category</th>
                <th className="px-6 py-3 font-semibold">Confidence</th>
                <th className="px-6 py-3 font-semibold">Conflict</th>
                <th className="px-6 py-3 font-semibold">Relationship</th>
                <th className="px-6 py-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {reviewData.map((row) => (
                <tr key={row.id} className="hover:bg-brand-accent/5 cursor-pointer transition-colors group" onClick={() => setSelectedReview(row)}>
                  <td className="px-6 py-4 font-mono text-slate-300">{row.matA}</td>
                  <td className="px-6 py-4 font-mono text-slate-300">{row.matB}</td>
                  <td className="px-6 py-4">
                    <span className="text-[10px] font-bold bg-slate-800 px-2 py-1 rounded text-slate-400">{row.cpse}</span>
                  </td>
                  <td className="px-6 py-4 text-slate-400">{row.category}</td>
                  <td className="px-6 py-4 font-semibold text-brand-secondary">{row.confidence}</td>
                  <td className="px-6 py-4">
                    {row.conflict === 'None' ? (
                      <span className="text-slate-400 text-xs">None</span>
                    ) : (
                      <span className="text-brand-critical text-xs flex items-center gap-1 font-medium"><AlertCircle className="w-3 h-3" />{row.conflict}</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-medium text-slate-300 bg-slate-800 px-2 py-1 rounded">{row.relation}</span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-brand-secondary text-xs font-semibold flex items-center gap-1 group-hover:underline">
                      <Eye className="w-3 h-3" /> Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Review Drawer Overlay */}
      {selectedReview && (
        <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm z-20 flex justify-end">
          <div className="w-full max-w-4xl bg-slate-900/50 backdrop-blur-md h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-200 border-l border-slate-800">
            <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900 shrink-0">
              <h2 className="text-lg font-bold text-white">Expert Validation: {selectedReview.id}</h2>
              <button onClick={() => setSelectedReview(null)} className="p-2 hover:bg-slate-200 rounded-full text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <MaterialPanel 
                  title="Original CPSE Record"
                  cpse="CPCL"
                  code={selectedReview.matA}
                  desc="HEX BLT SS316 M12X50"
                  norm="BOLT | STAINLESS STEEL 316 | M12 | 50 MM"
                />
                <MaterialPanel 
                  title="Candidate Record"
                  cpse="IOCL"
                  code={selectedReview.matB}
                  desc="BOLT HEXAGONAL SS316 12MM X 50MM"
                  norm="BOLT | STAINLESS STEEL 316 | 12 MM | 50 MM"
                />
              </div>
              
              <div className="border border-slate-800 rounded-xl overflow-hidden">
                <div className="bg-slate-900 p-4 border-b border-slate-800 flex justify-between items-center">
                  <h3 className="font-semibold text-white text-sm">AI Recommendation Rationale</h3>
                  <div className="text-xl font-bold text-brand-success">{selectedReview.confidence}</div>
                </div>
                <div className="p-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 mb-2 uppercase">Evidence</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-brand-success"><Check className="w-4 h-4" /> Same category</li>
                      <li className="flex items-center gap-2 text-brand-success"><Check className="w-4 h-4" /> Same material grade</li>
                      <li className="flex items-center gap-2 text-brand-success"><Check className="w-4 h-4" /> Same dimensions</li>
                      <li className="flex items-center gap-2 text-brand-success"><Check className="w-4 h-4" /> High semantic similarity</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 mb-2 uppercase">Differences / Conflicts</h4>
                    <ul className="space-y-1">
                      {selectedReview.conflict === 'None' ? (
                        <li className="text-slate-400 italic">No significant conflicts detected</li>
                      ) : (
                        <li className="flex items-center gap-2 text-brand-warning"><AlertCircle className="w-4 h-4" /> {selectedReview.conflict} mismatch</li>
                      )}
                      <li className="flex items-center gap-2 text-slate-400"><ChevronRight className="w-4 h-4" /> Unit notation differs (Resolved via Normalization)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-semibold text-white">Reviewer Notes</label>
                <textarea 
                  className="w-full h-24 border border-slate-800 rounded-lg p-3 text-sm focus:outline-none focus:border-brand-accent resize-none"
                  placeholder="Provide reasoning for rejection or specific notes..."
                ></textarea>
              </div>
            </div>
            
            <div className="p-4 border-t border-slate-800 bg-slate-900 shrink-0 flex justify-end gap-3">
              <button className="px-6 py-2 rounded-md font-medium text-sm border border-slate-300 text-slate-300 bg-slate-900/50 backdrop-blur-md hover:bg-slate-900">
                ESCALATE
              </button>
              <button className="px-6 py-2 rounded-md font-medium text-sm border border-brand-critical text-brand-critical bg-slate-900/50 backdrop-blur-md hover:bg-brand-critical/5">
                REJECT
              </button>
              <button className="px-6 py-2 rounded-md font-medium text-sm bg-brand-secondary text-white hover:bg-brand-secondary/90 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> APPROVE MAPPING
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function QueueCard({ title, value, type }: { title: string, value: string, type: 'neutral' | 'warning' | 'critical' }) {
  const colors = {
    neutral: "border-slate-800 text-white",
    warning: "border-brand-warning/30 bg-brand-warning/5 text-brand-warning",
    critical: "border-brand-critical/30 bg-brand-critical/5 text-brand-critical"
  };
  
  return (
    <div className={clsx("p-4 rounded-xl border bg-slate-900/50 backdrop-blur-md shadow-sm flex flex-col", colors[type])}>
      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">{title}</span>
      <span className={clsx("text-2xl font-bold", type === 'neutral' ? 'text-white' : '')}>{value}</span>
    </div>
  );
}

function MaterialPanel({ title, cpse, code, desc, norm }: any) {
  return (
    <div className="border border-slate-800 rounded-lg overflow-hidden flex flex-col bg-slate-900/50 backdrop-blur-md">
      <div className="bg-slate-800 p-3 border-b border-slate-800 flex justify-between items-center">
        <span className="text-xs font-bold text-slate-400 uppercase">{title}</span>
        <span className="text-[10px] font-bold bg-slate-900/50 backdrop-blur-md border border-slate-800 px-2 py-0.5 rounded text-slate-400">{cpse}</span>
      </div>
      <div className="p-4 flex-1">
        <div className="text-xs text-slate-400 mb-1 font-mono">Legacy Code: {code}</div>
        <div className="font-mono text-sm font-bold text-slate-200 mb-4">{desc}</div>
        
        <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Normalized Form</div>
        <div className="text-sm text-slate-400 p-2 bg-slate-900 rounded border border-slate-100">{norm}</div>
      </div>
    </div>
  );
}
