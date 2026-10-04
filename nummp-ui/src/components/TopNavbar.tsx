"use client";

import { Bell, Search, HelpCircle, ChevronDown, User } from "lucide-react";

export function TopNavbar() {
  return (
    <header className="h-16 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-6 shrink-0 z-10 shadow-sm relative">
      <div className="flex items-center gap-6 flex-1">
        <div className="flex items-center gap-2 bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-md text-sm font-medium text-slate-300 cursor-pointer hover:bg-slate-700/80 transition-colors">
          <span className="text-slate-400 font-normal">Current CPSE:</span>
          <span className="text-white">CPCL</span>
          <ChevronDown className="w-4 h-4 ml-1 text-slate-400" />
        </div>

        <div className="relative max-w-md w-full hidden md:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-slate-700 rounded-md leading-5 bg-slate-950/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:bg-slate-900 focus:ring-1 focus:ring-brand-secondary focus:border-brand-secondary sm:text-sm transition-colors"
            placeholder="Search material, legacy code, CNMC..."
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-brand-critical ring-2 ring-slate-900"></span>
        </button>
        <button className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors">
          <HelpCircle className="h-5 w-5" />
        </button>
        
        <div className="h-8 w-px bg-slate-800 mx-2"></div>
        
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="flex flex-col items-end hidden sm:flex">
            <span className="text-sm font-semibold text-slate-200 leading-tight">Material Admin</span>
            <span className="text-xs text-brand-secondary leading-tight">System Role</span>
          </div>
          <div className="h-9 w-9 rounded-full bg-brand-secondary/20 flex items-center justify-center text-brand-secondary border border-brand-secondary/30">
            <User className="h-5 w-5" />
          </div>
        </div>
      </div>
    </header>
  );
}
