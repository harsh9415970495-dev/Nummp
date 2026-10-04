"use client";

import { ArrowDown, Database, Cpu, Search, BrainCircuit, Activity, Link as LinkIcon, HardDrive, ShieldCheck, PieChart, Server } from "lucide-react";
import clsx from "clsx";

export default function ArchitecturePage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-white tracking-tight mb-3">System Architecture</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          The end-to-end NUMMP harmonization pipeline, processing raw CPSE ERP data into a unified national material identity.
        </p>
      </div>

      <div className="relative pb-10">
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-slate-200 via-brand-accent/50 to-brand-primary -z-10 -translate-x-1/2"></div>
        
        <div className="space-y-4">
          <ArchitectureLayer 
            number={1} 
            title="DATA SOURCES" 
            icon={Database} 
            tags={["SAP RFC", "OData", "CSV", "API"]}
            desc="Ingestion from heterogeneous CPSE ERP systems."
            color="bg-slate-800 border-slate-800 text-slate-300"
          />
          <ArrowDown className="w-5 h-5 mx-auto text-slate-300" />
          
          <ArchitectureLayer 
            number={2} 
            title="NORMALIZATION" 
            icon={Search} 
            tags={["Abbreviation Expansion", "UOM Standardization", "Noise Removal"]}
            desc="Cleaning raw strings without destroying source traceability."
            color="bg-slate-900/50 backdrop-blur-md border-brand-secondary/50 text-brand-secondary"
          />
          <ArrowDown className="w-5 h-5 mx-auto text-brand-secondary/50" />
          
          <ArchitectureLayer 
            number={3} 
            title="NLP & NER" 
            icon={BrainCircuit} 
            tags={["spaCy", "Transformers", "Schema Mapping"]}
            desc="Extracting structured technical attributes from unstructured text."
            color="bg-slate-900/50 backdrop-blur-md border-brand-accent/40 text-brand-accent"
          />
          <ArrowDown className="w-5 h-5 mx-auto text-brand-accent/50" />
          
          <ArchitectureLayer 
            number={4} 
            title="SEMANTIC AI & ML" 
            icon={Cpu} 
            tags={["Sentence-BERT", "FAISS / Milvus", "XGBoost"]}
            desc="Vector embeddings, candidate retrieval, and similarity classification."
            color="bg-brand-secondary border-brand-primary text-white"
            active
          />
          <ArrowDown className="w-5 h-5 mx-auto text-brand-secondary/50" />
          
          <ArchitectureLayer 
            number={5} 
            title="RULE ENGINE" 
            icon={ShieldCheck} 
            tags={["Hard Conflict Detection", "Technical Constraints"]}
            desc="Engineering rules blocking unsafe automated matches."
            color="bg-slate-900/50 backdrop-blur-md border-brand-warning/40 text-brand-warning"
          />
          <ArrowDown className="w-5 h-5 mx-auto text-brand-warning/50" />
          
          <ArchitectureLayer 
            number={6} 
            title="CNMC REGISTRY" 
            icon={LinkIcon} 
            tags={["Canonical Code", "CPSE Mapping", "Audit Trail"]}
            desc="Centralized material identity linking back to legacy codes."
            color="bg-brand-success/10 border-brand-success/30 text-brand-success"
          />
          <ArrowDown className="w-5 h-5 mx-auto text-brand-success/50" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mt-4">
            <div className="bg-slate-900/50 backdrop-blur-md p-4 rounded-xl border border-slate-800 shadow-sm text-center flex flex-col items-center">
              <HardDrive className="w-6 h-6 text-brand-secondary mb-2" />
              <div className="font-bold text-sm text-slate-200">Virtual Warehouse</div>
              <div className="text-xs text-slate-400 mt-1">Cross-CPSE inventory visibility</div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-md p-4 rounded-xl border border-slate-800 shadow-sm text-center flex flex-col items-center">
              <PieChart className="w-6 h-6 text-brand-accent mb-2" />
              <div className="font-bold text-sm text-slate-200">Procurement Intel</div>
              <div className="text-xs text-slate-400 mt-1">Demand aggregation & insights</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArchitectureLayer({ number, title, icon: Icon, tags, desc, color, active = false }: any) {
  return (
    <div className={clsx("max-w-2xl mx-auto rounded-xl border shadow-sm p-5 relative overflow-hidden transition-transform hover:scale-[1.01] bg-slate-900/50 backdrop-blur-md", color)}>
      {active && (
        <div className="absolute inset-0 bg-brand-secondary -z-10"></div>
      )}
      <div className="flex items-start md:items-center gap-4">
        <div className={clsx(
          "w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border-2 font-bold text-xl",
          active ? "border-brand-accent text-brand-accent bg-brand-secondary" : "bg-slate-900/50 backdrop-blur-md border-current"
        )}>
          {number}
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
            <h3 className={clsx("text-lg font-extrabold tracking-widest", active ? "text-white" : "text-current")}>
              {title}
            </h3>
            <div className="flex flex-wrap gap-1">
              {tags.map((tag: string) => (
                <span key={tag} className={clsx(
                  "text-[10px] px-2 py-0.5 rounded font-bold uppercase",
                  active ? "bg-brand-accent/20 text-brand-accent border border-brand-accent/30" : "bg-current/10 text-current border border-current/20"
                )}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className={clsx("text-sm", active ? "text-slate-300" : "text-slate-400")}>{desc}</p>
        </div>
        <Icon className={clsx("w-8 h-8 opacity-20 shrink-0 hidden sm:block", active ? "text-white" : "text-current")} />
      </div>
    </div>
  );
}
