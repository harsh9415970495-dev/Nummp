"use client";

import { CheckCircle2, ChevronRight, Copy, Database, Layers, Link as LinkIcon, RefreshCw, Server, XCircle } from "lucide-react";
import clsx from "clsx";

export default function IntegrationsPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">ERP Integration Center</h1>
        <p className="text-sm text-slate-400">Manage connections and adapters across CPSE ERP systems.</p>
        <div className="mt-4 bg-brand-secondary text-white text-xs inline-flex items-center gap-2 px-3 py-1.5 rounded-full shadow-sm font-medium">
          <span className="flex h-2 w-2 rounded-full bg-brand-accent animate-pulse"></span>
          Prototype Mode — SAP connection simulated
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <IntegrationCard 
            cpse="CPCL" 
            type="SAP S/4HANA" 
            status="Connected" 
            lastSync="2 mins ago" 
            records="450,219" 
            method="OData v4"
          />
          <IntegrationCard 
            cpse="IOCL" 
            type="SAP ECC 6.0" 
            status="Connected" 
            lastSync="15 mins ago" 
            records="850,112" 
            method="SAP RFC (PyRFC)"
          />
          <IntegrationCard 
            cpse="ONGC" 
            type="SAP S/4HANA" 
            status="Connected" 
            lastSync="1 hour ago" 
            records="720,045" 
            method="OData v4"
          />
          <IntegrationCard 
            cpse="BPCL" 
            type="SAP ECC 6.0" 
            status="Warning" 
            lastSync="4 hours ago" 
            records="380,551" 
            method="SAP RFC"
            error="Connection timeout during delta load"
          />
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-800 shadow-sm p-6 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none text-brand-secondary">
              <Database className="w-32 h-32" />
            </div>
            
            <h3 className="text-sm font-semibold text-white mb-6 relative z-10">Hub-and-Spoke Architecture</h3>
            
            <div className="flex flex-col gap-3 relative z-10">
              <ArchitectureNode label="CPCL SAP" isLeaf />
              <ArchitectureNode label="IOCL SAP" isLeaf />
              <ArchitectureNode label="ONGC SAP" isLeaf />
              
              <div className="py-2 flex justify-center relative">
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-200 -z-10"></div>
                <div className="bg-brand-accent/10 border border-brand-accent text-brand-accent text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <RefreshCw className="w-3 h-3" /> ADAPTER LAYER
                </div>
              </div>
              
              <div className="bg-brand-secondary text-white border-2 border-brand-primary rounded-xl p-4 text-center shadow-lg">
                <div className="font-extrabold tracking-widest mb-1 text-lg">NUMMP</div>
                <div className="text-[10px] text-brand-secondary font-bold uppercase">Central Intelligence Hub</div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-800 shadow-sm p-6">
            <h3 className="text-sm font-semibold text-white mb-4">Connection Secrets (Demo)</h3>
            <div className="space-y-3">
              <div className="bg-slate-900 border border-slate-800 rounded p-3 flex justify-between items-center group cursor-pointer hover:bg-slate-800 transition-colors">
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">API Endpoint</div>
                  <div className="text-xs font-mono text-slate-300">https://api.nummp.gov.in/v1/ingest</div>
                </div>
                <Copy className="w-4 h-4 text-slate-400 group-hover:text-brand-secondary" />
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded p-3 flex justify-between items-center group cursor-pointer hover:bg-slate-800 transition-colors">
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Service Account Token</div>
                  <div className="text-xs font-mono text-slate-300">sk_test_••••••••••••••••</div>
                </div>
                <Copy className="w-4 h-4 text-slate-400 group-hover:text-brand-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IntegrationCard({ cpse, type, status, lastSync, records, method, error }: any) {
  const isConnected = status === "Connected";
  return (
    <div className={clsx(
      "bg-slate-900/50 backdrop-blur-md rounded-xl border shadow-sm p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-colors",
      !isConnected ? "border-brand-warning bg-brand-warning/5" : "border-slate-800"
    )}>
      <div className="flex items-center gap-4">
        <div className={clsx(
          "w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border",
          isConnected ? "bg-slate-900 border-slate-800" : "bg-slate-900/50 backdrop-blur-md border-brand-warning/20 text-brand-warning"
        )}>
          <Server className={clsx("w-6 h-6", isConnected ? "text-slate-400" : "text-brand-warning")} />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-white">{cpse} {type}</h3>
            {isConnected ? (
              <span className="bg-brand-success/10 text-brand-success text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> CONNECTED
              </span>
            ) : (
              <span className="bg-brand-warning/10 text-brand-warning text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                <XCircle className="w-3 h-3" /> {status.toUpperCase()}
              </span>
            )}
          </div>
          <div className="text-xs text-slate-400 flex items-center gap-3">
            <span className="flex items-center gap-1"><RefreshCw className="w-3 h-3" /> Sync: {lastSync}</span>
            <span className="flex items-center gap-1"><Database className="w-3 h-3" /> Records: {records}</span>
          </div>
          {error && <div className="text-xs text-brand-warning mt-1 font-medium">{error}</div>}
        </div>
      </div>
      
      <div className="flex items-center gap-4 w-full sm:w-auto mt-4 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-0 border-slate-100">
        <div className="text-right flex-1 sm:flex-none">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Adapter</div>
          <div className="text-xs font-mono font-semibold text-slate-300">{method}</div>
        </div>
        <button className="p-2 border border-slate-800 rounded text-slate-400 hover:bg-slate-900 hover:text-brand-secondary transition-colors">
          <LinkIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function ArchitectureNode({ label, isLeaf = false }: { label: string, isLeaf?: boolean }) {
  return (
    <div className="flex items-center justify-center relative">
      <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 shadow-sm rounded-lg px-4 py-2 text-sm font-semibold text-slate-300 w-full max-w-[200px] text-center z-10">
        {label}
      </div>
      {isLeaf && <div className="absolute top-1/2 right-1/2 w-0 h-4 bg-slate-200 -z-10 translate-y-full"></div>}
    </div>
  );
}
