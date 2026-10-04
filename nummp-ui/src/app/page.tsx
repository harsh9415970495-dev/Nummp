"use client";

import Link from "next/link";
import { ArrowRight, Database, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white w-full overflow-y-auto relative selection:bg-brand-accent/30">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[800px] h-[500px] bg-brand-secondary/20 blur-[120px] rounded-full absolute top-[-10%] left-[-10%]"></div>
        <div className="w-[600px] h-[400px] bg-brand-accent/20 blur-[100px] rounded-full absolute bottom-[-10%] right-[-10%]"></div>
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center pb-20 pt-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-1.5 text-sm text-brand-accent mb-8 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-brand-accent mr-2 animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]"></span>
          Smart India Hackathon Finalist
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl bg-clip-text text-transparent bg-gradient-to-br from-white via-slate-200 to-slate-500 drop-shadow-sm"
        >
          ONE NATION. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-secondary">
            ONE MATERIAL IDENTITY.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 text-xl md:text-2xl text-slate-400 max-w-3xl mb-12 font-light leading-relaxed"
        >
          AI-driven standardization and harmonization of material masters across CPSEs. 
          NUMMP connects heterogeneous SAP/ERP data through NLP, semantic AI, and engineering-rule validation.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <Link href="/login" className="group inline-flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-brand-accent to-brand-secondary px-8 text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]">
            Explore NUMMP
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/app/matching" className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/50 backdrop-blur-md px-8 text-sm font-medium text-white transition-all hover:bg-slate-800 hover:border-slate-600">
            Run Interactive Demo
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full"
        >
          <FeatureCard 
            icon={<Zap className="h-6 w-6 text-brand-accent" />}
            title="AI-Powered Matching"
            description="Semantic Search and NLP to detect material equivalents across organizations."
            delay={0.8}
          />
          <FeatureCard 
            icon={<ShieldCheck className="h-6 w-6 text-slate-400" />}
            title="Technical Validation"
            description="Engineering rule constraints prevent unsafe automated harmonization."
            delay={0.9}
          />
          <FeatureCard 
            icon={<Database className="h-6 w-6 text-brand-secondary" />}
            title="Human-in-the-Loop"
            description="Expert validation workflows for ambiguous or high-risk matches."
            delay={1.0}
          />
          <FeatureCard 
            icon={<ShieldCheck className="h-6 w-6 text-amber-400" />}
            title="National Material Identity"
            description="Centralized CNMC registry preserving CPSE legacy traceability."
            delay={1.1}
          />
        </motion.div>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md text-left hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-brand-accent/5 group"
    >
      <div className="mb-4 inline-flex p-3 rounded-xl bg-slate-800/80 group-hover:scale-110 transition-transform shadow-inner">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}
