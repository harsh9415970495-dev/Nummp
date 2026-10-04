"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Database,
  Search,
  Cpu,
  CheckCircle,
  BarChart,
  Box,
  Network,
  Users,
  Shield,
  Factory,
  ShoppingCart,
  Link as LinkIcon,
  Settings,
  ChevronDown
} from "lucide-react";
import clsx from "clsx";

const navGroups = [
  {
    title: "OVERVIEW",
    items: [
      { name: "Dashboard", href: "/app/dashboard", icon: LayoutDashboard },
    ],
  },
  {
    title: "DATA",
    items: [
      { name: "Material Intelligence", href: "/app/materials", icon: Box },
      { name: "Data Ingestion", href: "/app/ingestion", icon: Database },
      { name: "Normalization & NLP", href: "/app/nlp", icon: Search },
    ],
  },
  {
    title: "AI ENGINE",
    items: [
      { name: "AI Material Matching", href: "/app/matching", icon: Cpu },
      { name: "Decision Engine", href: "/app/decision-engine", icon: Network },
      { name: "AI Insights", href: "/app/ai-insights", icon: BarChart },
    ],
  },
  {
    title: "STANDARDIZATION",
    items: [
      { name: "CNMC Registry", href: "/app/cnmc", icon: CheckCircle },
      { name: "Material Relations", href: "/app/relations", icon: LinkIcon },
    ],
  },
  {
    title: "GOVERNANCE",
    items: [
      { name: "Human Review", href: "/app/reviews", icon: Users },
      { name: "Audit & Governance", href: "/app/audit", icon: Shield },
    ],
  },
  {
    title: "OPERATIONS",
    items: [
      { name: "Cross-CPSE Inventory", href: "/app/inventory", icon: Factory },
      { name: "Procurement Intelligence", href: "/app/procurement", icon: ShoppingCart },
      { name: "CPSE Catalogs", href: "/app/cpse", icon: Database },
    ],
  },
  {
    title: "INTEGRATION",
    items: [
      { name: "ERP / SAP Integration", href: "/app/integrations", icon: Settings },
    ],
  },
  {
    title: "SYSTEM",
    items: [
      { name: "Settings", href: "/app/settings", icon: Settings },
    ],
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-brand-sidebar text-slate-300 h-full flex flex-col border-r border-slate-800 flex-shrink-0">
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-brand-accent flex items-center justify-center text-brand-primary font-bold text-lg">
            N
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white text-lg leading-tight tracking-tight">NUMMP</span>
            <span className="text-[10px] text-brand-accent font-medium leading-tight">One Nation. One Code.</span>
          </div>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto py-4 scrollbar-thin scrollbar-thumb-slate-700">
        {navGroups.map((group, idx) => (
          <div key={idx} className="mb-6 px-4">
            <h3 className="px-2 text-xs font-semibold text-slate-400 tracking-wider mb-2">
              {group.title}
            </h3>
            <ul className="space-y-1">
              {group.items.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={clsx(
                        "flex items-center gap-3 px-2 py-2 rounded-md text-sm font-medium transition-colors",
                        isActive
                          ? "bg-brand-accent/10 text-brand-accent"
                          : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
                      )}
                    >
                      <item.icon className={clsx("w-4 h-4", isActive ? "text-brand-accent" : "text-slate-400")} />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-slate-800 bg-slate-900/50">
        <div className="flex items-center gap-2 mb-1">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-success opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-success"></span>
          </span>
          <span className="text-sm font-medium text-white">System Operational</span>
        </div>
        <p className="text-xs text-slate-400 pl-4">Demo Environment</p>
      </div>
    </aside>
  );
}
