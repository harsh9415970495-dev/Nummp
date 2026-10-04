"use client";

import { CheckCircle2, ChevronDown, Clock, Search, Tag, Settings2, Box } from "lucide-react";
import { useState } from "react";

const cnmcData = [
  { cnmc: "NMC-FST-000124", canonical: "HEX BOLT | STAINLESS STEEL 316 | M12 | 50 MM", category: "Fasteners", cpses: 5, legacy: 8, status: "APPROVED", date: "28 Sep 2026" },
  { cnmc: "NMC-BRG-000452", canonical: "DEEP GROOVE BALL BEARING 6205", category: "Bearings", cpses: 3, legacy: 4, status: "APPROVED", date: "27 Sep 2026" },
  { cnmc: "NMC-VLV-008192", canonical: "BALL VALVE | SS316 | 2 INCH | 150# | RF", category: "Valves", cpses: 6, legacy: 11, status: "UNDER REVIEW", date: "26 Sep 2026" },
  { cnmc: "NMC-PIP-001024", canonical: "STEEL PIPE | SEAMLESS | 4 INCH | 300 PSI", category: "Pipes", cpses: 2, legacy: 2, status: "PROPOSED", date: "25 Sep 2026" },
];

export default function CnmcRegistryPage() {
  const [selectedCnmc, setSelectedCnmc] = useState<any>(cnmcData[1]); // Default select NMC-BRG-000452

  return (
    <div className="h-full flex flex-col relative overflow-hidden max-w-7xl mx-auto pb-6">
      <div className="mb-6 shrink-0 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Common National Material Code Registry</h1>
          <p className="text-sm text-slate-400">Centralized material identity while preserving legacy traceability</p>
        </div>
        <button className="bg-brand-secondary text-white px-4 py-2 rounded-md shadow-sm text-sm font-medium flex items-center gap-2 hover:bg-brand-secondary/90">
          <Settings2 className="w-4 h-4" /> Manage Taxonomy
        </button>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* CNMC Table List */}
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-800 shadow-sm flex flex-col h-full overflow-hidden">
          <div className="p-4 border-b border-slate-800 bg-slate-900 shrink-0">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search CNMC, attributes, or legacy code..." 
                className="w-full pl-9 pr-3 py-2 text-sm border border-slate-800 rounded-md focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent shadow-sm"
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-400 uppercase bg-slate-900 border-b border-slate-800 sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-3 font-semibold">CNMC</th>
                  <th className="px-4 py-3 font-semibold">Canonical Description</th>
                  <th className="px-4 py-3 font-semibold text-center">Mapped</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {cnmcData.map((row) => (
                  <tr 
                    key={row.cnmc} 
                    className={`cursor-pointer transition-colors ${selectedCnmc?.cnmc === row.cnmc ? 'bg-brand-accent/5' : 'hover:bg-slate-900'}`}
                    onClick={() => setSelectedCnmc(row)}
                  >
                    <td className="px-4 py-4 font-mono font-bold text-brand-secondary">{row.cnmc}</td>
                    <td className="px-4 py-4">
                      <div className="truncate max-w-[200px] xl:max-w-[300px] text-slate-300 font-medium" title={row.canonical}>
                        {row.canonical}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">{row.category}</div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="inline-flex items-center justify-center bg-slate-800 text-slate-400 text-xs font-bold px-2 py-1 rounded">
                        {row.cpses} CPSEs
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <StatusBadge status={row.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CNMC Detail Sidebar */}
        {selectedCnmc ? (
          <div className="bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-800 shadow-sm h-full overflow-y-auto flex flex-col">
            <div className="p-6 border-b border-slate-800 shrink-0">
              <div className="flex justify-between items-start mb-4">
                <div className="inline-flex items-center gap-1.5 bg-brand-secondary/10 text-brand-secondary px-2.5 py-1 rounded-md text-xs font-bold font-mono">
                  <Tag className="w-3.5 h-3.5" /> CNMC
                </div>
                <StatusBadge status={selectedCnmc.status} />
              </div>
              <h2 className="text-2xl font-extrabold text-white tracking-tight font-mono mb-2">{selectedCnmc.cnmc}</h2>
              <p className="text-sm font-medium text-slate-400">{selectedCnmc.canonical}</p>
            </div>
            
            <div className="p-6 flex-1 space-y-6">
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Box className="w-4 h-4" /> Canonical Attributes
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <AttributeBox label="Category" value={selectedCnmc.category} />
                  {selectedCnmc.cnmc.includes("BRG") ? (
                    <>
                      <AttributeBox label="Bore" value="25 MM" />
                      <AttributeBox label="Outer Diameter" value="52 MM" />
                      <AttributeBox label="Width" value="15 MM" />
                    </>
                  ) : (
                    <>
                      <AttributeBox label="Material" value="SS316" />
                      <AttributeBox label="Size" value="M12" />
                      <AttributeBox label="Length" value="50 MM" />
                    </>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Legacy CPSE Mapping</h3>
                <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden text-sm">
                  <table className="w-full text-left">
                    <thead className="bg-slate-800 text-xs text-slate-400 uppercase border-b border-slate-800">
                      <tr>
                        <th className="px-3 py-2 font-semibold">CPSE</th>
                        <th className="px-3 py-2 font-semibold">Legacy Code</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {selectedCnmc.cnmc.includes("BRG") ? (
                        <>
                          <MappingRow cpse="CPCL" code="MAT-10452" />
                          <MappingRow cpse="ONGC" code="BRG-7781" />
                          <MappingRow cpse="NTPC" code="450021" />
                        </>
                      ) : (
                        <>
                          <MappingRow cpse="CPCL" code="MAT00125" />
                          <MappingRow cpse="IOCL" code="BOLT4521" />
                          <MappingRow cpse="ONGC" code="M7789" />
                          <MappingRow cpse="BPCL" code="HEX12-50" />
                          <MappingRow cpse="HPCL" code="FAS-887" />
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Lifecycle</h3>
                <div className="space-y-4">
                  <LifecycleStep status="PROPOSED" date="20 Sep 2026" active={true} />
                  <LifecycleStep status="UNDER REVIEW" date="22 Sep 2026" active={true} />
                  <LifecycleStep status="APPROVED" date={selectedCnmc.date} active={selectedCnmc.status === 'APPROVED'} isLast />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-800 shadow-sm flex items-center justify-center h-full text-slate-400">
            Select a CNMC to view details
          </div>
        )}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  if (status === 'APPROVED') {
    return <span className="bg-brand-success/10 text-brand-success border border-brand-success/20 px-2 py-1 rounded text-[10px] font-bold tracking-wide flex items-center gap-1 w-fit"><CheckCircle2 className="w-3 h-3" /> ACTIVE</span>;
  }
  if (status === 'UNDER REVIEW') {
    return <span className="bg-brand-warning/10 text-brand-warning border border-brand-warning/20 px-2 py-1 rounded text-[10px] font-bold tracking-wide flex items-center gap-1 w-fit"><Clock className="w-3 h-3" /> REVIEW</span>;
  }
  return <span className="bg-slate-800 text-slate-400 border border-slate-800 px-2 py-1 rounded text-[10px] font-bold tracking-wide flex items-center gap-1 w-fit">{status}</span>;
}

function AttributeBox({ label, value }: { label: string, value: string }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded p-2 flex flex-col">
      <span className="text-[10px] text-slate-400 font-semibold mb-0.5">{label}</span>
      <span className="text-sm font-medium text-white">{value}</span>
    </div>
  );
}

function MappingRow({ cpse, code }: { cpse: string, code: string }) {
  return (
    <tr>
      <td className="px-3 py-2">
        <span className="text-[10px] font-bold bg-slate-900/50 backdrop-blur-md border border-slate-800 px-1.5 py-0.5 rounded text-slate-400">{cpse}</span>
      </td>
      <td className="px-3 py-2 font-mono text-slate-300">{code}</td>
    </tr>
  );
}

function LifecycleStep({ status, date, active, isLast = false }: { status: string, date: string, active: boolean, isLast?: boolean }) {
  return (
    <div className="flex gap-4 relative">
      {!isLast && <div className={`absolute left-[7px] top-4 bottom-[-16px] w-0.5 ${active ? 'bg-brand-success' : 'bg-slate-200'}`}></div>}
      <div className={`w-4 h-4 rounded-full mt-1 shrink-0 relative z-10 ${active ? 'bg-brand-success ring-4 ring-brand-success/20' : 'bg-slate-200'}`}></div>
      <div>
        <div className={`text-xs font-bold ${active ? 'text-white' : 'text-slate-400'}`}>{status}</div>
        <div className="text-xs text-slate-400">{date}</div>
      </div>
    </div>
  );
}
