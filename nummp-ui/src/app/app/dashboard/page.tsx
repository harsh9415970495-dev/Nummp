"use client";

import { BarChart3, Box, AlertTriangle, CheckCircle2, TrendingUp, Layers } from "lucide-react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, BarChart, Bar, Legend } from "recharts";
import { motion } from "framer-motion";

const progressData = [
  { name: 'CPCL', total: 450, standardized: 320, pending: 80, conflicts: 50 },
  { name: 'IOCL', total: 850, standardized: 610, pending: 120, conflicts: 120 },
  { name: 'ONGC', total: 720, standardized: 450, pending: 150, conflicts: 120 },
  { name: 'BPCL', total: 380, standardized: 290, pending: 60, conflicts: 30 },
  { name: 'HPCL', total: 440, standardized: 290, pending: 90, conflicts: 60 },
];

const duplicateTrend = [
  { month: 'Jan', candidates: 45000 },
  { month: 'Feb', candidates: 52000 },
  { month: 'Mar', candidates: 48000 },
  { month: 'Apr', candidates: 61000 },
  { month: 'May', candidates: 59000 },
  { month: 'Jun', candidates: 75000 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function DashboardPage() {
  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="space-y-6 max-w-7xl mx-auto"
    >
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Material Intelligence Overview</h1>
          <p className="text-slate-400 mt-1">Unified visibility across CPSE material masters.</p>
        </div>
        <div className="flex items-center gap-2 bg-brand-success/10 text-brand-success px-4 py-2 rounded-full border border-brand-success/20 shadow-sm backdrop-blur-sm">
          <div className="w-2.5 h-2.5 rounded-full bg-brand-success animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
          <span className="text-sm font-semibold tracking-wide">AI Engine Operational</span>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <KpiCard title="Total Records" value="2.84M" icon={Box} color="text-brand-secondary" bg="bg-slate-900/50" />
        <KpiCard title="Standardized" value="1.96M" icon={CheckCircle2} color="text-brand-success" bg="bg-brand-success/5" />
        <KpiCard title="Duplicates" value="286K" icon={Layers} color="text-brand-accent" bg="bg-brand-accent/5" />
        <KpiCard title="CNMC Mapped" value="1.72M" icon={CheckCircle2} color="text-brand-secondary" bg="bg-brand-secondary/10" />
        <KpiCard title="Pending Review" value="8,421" icon={AlertTriangle} color="text-brand-warning" bg="bg-brand-warning/5" />
        <KpiCard title="Opportunities" value="₹128 Cr" icon={TrendingUp} color="text-brand-success" bg="bg-brand-success/10" />
      </motion.div>
      
      <motion.div variants={itemVariants} className="text-right">
        <span className="text-xs text-slate-400 font-medium px-2 py-1 bg-slate-900/80 rounded-md border border-slate-800">Illustrative Demo Data</span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={itemVariants} className="bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-colors">
          <h3 className="text-base font-bold text-white mb-6">CPSE Harmonization Progress (in thousands)</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={progressData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                <Tooltip cursor={{ fill: '#0a1120' }} contentStyle={{ borderRadius: '12px', border: '1px solid #1e293b', backgroundColor: '#050b14', color: '#f8fafc', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.5)' }} />
                <Legend iconType="circle" wrapperStyle={{ fontSize: 12, paddingTop: '20px', color: '#94a3b8' }} />
                <Bar dataKey="standardized" name="Standardized" stackId="a" fill="#10b981" radius={[0, 0, 4, 4]} />
                <Bar dataKey="pending" name="Pending Review" stackId="a" fill="#f59e0b" />
                <Bar dataKey="conflicts" name="Conflicts" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-colors">
          <h3 className="text-base font-bold text-white mb-6">Duplicate Detection Trend</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={duplicateTrend} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorCandidates" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-brand-secondary)" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="var(--color-brand-secondary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `${value / 1000}k`} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #1e293b', backgroundColor: '#050b14', color: '#f8fafc', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.5)' }} />
                <Area type="monotone" dataKey="candidates" stroke="var(--color-brand-secondary)" strokeWidth={3} fillOpacity={1} fill="url(#colorCandidates)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} className="bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-colors">
          <h3 className="text-base font-bold text-white mb-4">Material Relationship Distribution</h3>
          <div className="space-y-5">
            <DistributionRow label="Exact / Same" percentage={65} color="bg-brand-success" />
            <DistributionRow label="Near Duplicate" percentage={20} color="bg-brand-accent" />
            <DistributionRow label="Functionally Equivalent" percentage={10} color="bg-brand-warning" />
            <DistributionRow label="Different" percentage={5} color="bg-slate-9000" />
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-colors">
          <h3 className="text-base font-bold text-white mb-4">Confidence Distribution</h3>
          <div className="space-y-5">
            <DistributionRow label="≥ 92% (Auto-Harmonize)" percentage={72} color="bg-brand-success" />
            <DistributionRow label="75–91% (Review)" percentage={18} color="bg-brand-warning" />
            <DistributionRow label="< 75% (Unique)" percentage={10} color="bg-slate-9000" />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-colors">
          <h3 className="text-base font-bold text-white mb-5">Category-wise Duplicate Concentration</h3>
          <div className="space-y-4">
            {[
              { name: "Bolts & Fasteners", val: "32%" },
              { name: "Valves", val: "24%" },
              { name: "Pipes & Fittings", val: "18%" },
              { name: "Bearings", val: "15%" },
              { name: "Gaskets", val: "11%" },
            ].map((cat) => (
              <div key={cat.name} className="flex justify-between items-center text-sm border-b border-slate-800 pb-2 last:border-0 last:pb-0">
                <span className="text-slate-400 font-medium">{cat.name}</span>
                <span className="text-white font-bold bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700">{cat.val}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function KpiCard({ title, value, icon: Icon, color, bg }: { title: string; value: string; icon: any; color: string, bg: string }) {
  return (
    <div className={`p-5 rounded-2xl border border-slate-800 shadow-md flex flex-col ${bg} transition-all hover:scale-105 hover:border-slate-700 backdrop-blur-sm`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">{title}</h3>
        <div className={`p-1.5 bg-slate-950 rounded-lg shadow-inner ${color}`}>
          <Icon className="w-4 h-4" />
        </div>
      </div>
      <div className="text-3xl font-extrabold text-white mt-auto">{value}</div>
    </div>
  );
}

function DistributionRow({ label, percentage, color }: { label: string; percentage: number; color: string }) {
  return (
    <div>
      <div className="flex justify-between text-sm font-semibold mb-1.5">
        <span className="text-slate-300">{label}</span>
        <span className="text-white bg-slate-800 px-1.5 rounded border border-slate-700">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden border border-slate-700/50">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className={`${color} h-full rounded-full relative shadow-[0_0_10px_currentColor]`}
        >
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-md/20 w-full h-full"></div>
        </motion.div>
      </div>
    </div>
  );
}
