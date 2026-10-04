"use client";

import { Building2, Factory, Search, MapPin, Box, ArrowRight, Info, AlertTriangle } from "lucide-react";
import { useState } from "react";

export default function InventoryPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Cross-CPSE Virtual Warehouse</h1>
        <p className="text-sm text-slate-400">Discover existing stock across CPSEs using the common material identity.</p>
      </div>

      <div className="bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-800 shadow-sm p-6 flex flex-col items-center justify-center min-h-[200px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/5 to-brand-accent/5"></div>
        <div className="relative z-10 w-full max-w-2xl">
          <div className="flex bg-slate-900/50 backdrop-blur-md rounded-lg shadow-md border border-brand-secondary/50 p-2 items-center focus-within:ring-2 focus-within:ring-brand-accent">
            <Search className="w-5 h-5 text-brand-secondary ml-2 mr-3" />
            <input 
              type="text" 
              placeholder="Search by CNMC or material description..." 
              className="flex-1 py-2 outline-none text-slate-200 placeholder:text-slate-400"
              defaultValue="SS316 Ball Valve 2 Inch 150#"
            />
            <button className="bg-brand-secondary text-white px-6 py-2 rounded-md font-medium text-sm ml-2">
              Search Stock
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-800 shadow-sm p-5">
            <h3 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
              <Box className="w-4 h-4 text-brand-secondary" /> Standardized Material
            </h3>
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 mb-4">
              <div className="text-[10px] font-bold text-slate-400 mb-1">CNMC</div>
              <div className="font-mono text-brand-secondary font-bold">NMC-VLV-008192</div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Type</span>
                <span className="font-semibold text-slate-200">Ball Valve</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Material</span>
                <span className="font-semibold text-slate-200">SS316</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Size</span>
                <span className="font-semibold text-slate-200">2 Inch</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Rating</span>
                <span className="font-semibold text-slate-200">150# RF</span>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 text-amber-800 shadow-sm">
            <Info className="w-5 h-5 shrink-0 text-amber-600 mt-0.5" />
            <div className="text-xs leading-relaxed font-medium">
              NUMMP provides visibility. Stock transfer remains subject to each organization's authorization and commercial rules. No automatic transfers are executed.
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-800 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900">
              <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                <Factory className="w-4 h-4 text-slate-400" /> Availability Across CPSEs
              </h3>
              <div className="text-xs font-semibold text-slate-400 bg-slate-900/50 backdrop-blur-md px-2 py-1 rounded border border-slate-800">
                Total Available: 44 Units
              </div>
            </div>
            
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-400 uppercase bg-slate-900/50 border-b border-slate-800">
                <tr>
                  <th className="px-6 py-3 font-semibold">CPSE</th>
                  <th className="px-6 py-3 font-semibold">Plant / Location</th>
                  <th className="px-6 py-3 font-semibold">Legacy Code</th>
                  <th className="px-6 py-3 font-semibold text-right">Available Stock</th>
                  <th className="px-6 py-3 font-semibold text-center">Status</th>
                  <th className="px-6 py-3 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <InventoryRow cpse="ONGC" location="Mumbai Offshore Base" code="VAL-992" qty={24} status="Available" />
                <InventoryRow cpse="IOCL" location="Mathura Refinery" code="VLV-1002" qty={12} status="Available" />
                <InventoryRow cpse="BPCL" location="Mumbai Refinery" code="BL-V-44" qty={8} status="Limited" />
                <InventoryRow cpse="HPCL" location="Visakh Refinery" code="778-VL" qty={0} status="Out of Stock" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function InventoryRow({ cpse, location, code, qty, status }: { cpse: string, location: string, code: string, qty: number, status: string }) {
  let statusColor = "bg-slate-800 text-slate-400";
  if (status === "Available") statusColor = "bg-brand-success/10 text-brand-success";
  if (status === "Limited") statusColor = "bg-brand-warning/10 text-brand-warning";
  if (status === "Out of Stock") statusColor = "bg-brand-critical/10 text-brand-critical";

  return (
    <tr className="hover:bg-slate-900 transition-colors">
      <td className="px-6 py-4">
        <span className="text-[10px] font-bold bg-slate-800 px-2 py-1 rounded text-slate-300">{cpse}</span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-1.5 text-slate-300 font-medium">
          <MapPin className="w-3.5 h-3.5 text-slate-400" /> {location}
        </div>
      </td>
      <td className="px-6 py-4 font-mono text-slate-400 text-xs">{code}</td>
      <td className="px-6 py-4 text-right font-bold text-white">{qty} <span className="text-xs font-normal text-slate-400">EA</span></td>
      <td className="px-6 py-4 text-center">
        <span className={`text-[10px] font-bold px-2 py-1 rounded ${statusColor}`}>{status}</span>
      </td>
      <td className="px-6 py-4 text-right">
        <button 
          className="text-xs font-medium text-brand-secondary border border-brand-secondary/50 px-3 py-1.5 rounded hover:bg-brand-secondary/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={qty === 0}
        >
          Request Transfer
        </button>
      </td>
    </tr>
  );
}
