"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Mail, ArrowRight, Shield, Fingerprint, Building, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<"cpse" | "sso">("cpse");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        router.push("/app/dashboard");
      }, 800);
    }, 2000);
  };

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050B14] selection:bg-brand-accent/40">
      
      {/* FULL PAGE BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/industrial_bg.jpg" 
          alt="Industrial Supply Chain" 
          fill 
          className="object-cover opacity-50 mix-blend-luminosity scale-105"
          priority
        />
        {/* Gradients to blend and darken */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/80 via-[#050B14]/40 to-[#050B14]/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/10 via-transparent to-brand-accent/10 mix-blend-overlay"></div>
        
        {/* Animated Glows behind the card */}
        <motion.div 
          animate={{ 
            x: [-50, 50, -50],
            y: [-30, 30, -30],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-secondary/30 blur-[120px] rounded-full mix-blend-screen pointer-events-none"
        />
        <motion.div 
          animate={{ 
            x: [50, -50, 50],
            y: [30, -30, 30],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/30 blur-[100px] rounded-full mix-blend-screen pointer-events-none"
        />
      </div>

      {/* LOGIN CARD */}
      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        className="relative z-10 w-full max-w-lg mx-4"
      >
        {/* Glassmorphism Card Container */}
        <div className="backdrop-blur-xl bg-[#0a1120]/70 border border-white/10 p-8 sm:p-12 rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
          
          {/* Subtle moving shine effect on the card border */}
          <div className="absolute inset-0 rounded-[2.5rem] border border-transparent [background:linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)_border-box] [background-size:250%_250%,100%_100%] [background-position:0_0,0_0] bg-clip-border group-hover:[background-position:100%_100%,0_0] transition-all duration-1000 pointer-events-none"></div>

          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10">
            
            {/* Header / Logo */}
            <motion.div variants={itemVariants} className="flex flex-col items-center justify-center mb-8 text-center">
              <div className="relative mb-5">
                <div className="absolute inset-0 bg-brand-accent blur-xl opacity-60 rounded-full"></div>
                <div className="relative h-20 w-20 bg-gradient-to-br from-[#0B1120] to-[#1e293b] rounded-2xl flex items-center justify-center shadow-2xl border border-white/20 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <Shield className="h-10 w-10 text-brand-secondary drop-shadow-lg transform -rotate-3" />
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2 flex items-center justify-center gap-2">
                NUMMP
                <span className="bg-brand-secondary/20 text-brand-secondary text-[10px] sm:text-xs px-2 py-0.5 rounded uppercase font-bold tracking-widest border border-brand-secondary/30">
                  Gov
                </span>
              </h1>
              <p className="text-sm text-slate-400 font-medium">National Unified Material Master Platform</p>
            </motion.div>

            {/* Custom Tab Switcher */}
            <motion.div variants={itemVariants} className="flex p-1 bg-[#050b14]/80 backdrop-blur-md border border-white/5 rounded-xl mb-8">
              <button 
                onClick={() => setActiveTab("cpse")}
                className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'cpse' ? 'bg-[#1e293b] text-white shadow-lg border border-white/10' : 'text-slate-400 hover:text-slate-200'}`}
              >
                <Building className="w-4 h-4" /> CPSE Login
              </button>
              <button 
                onClick={() => setActiveTab("sso")}
                className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'sso' ? 'bg-[#1e293b] text-white shadow-lg border border-white/10' : 'text-slate-400 hover:text-slate-200'}`}
              >
                <Fingerprint className="w-4 h-4" /> e-Pramaan SSO
              </button>
            </motion.div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-secondary to-brand-accent rounded-xl blur opacity-0 group-focus-within:opacity-40 transition duration-500"></div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5 group-focus-within:text-brand-secondary transition-colors" />
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="official@cpse.gov.in"
                      className="w-full bg-[#050b14]/80 backdrop-blur-md border border-white/10 hover:border-white/20 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-transparent focus:ring-2 focus:ring-brand-secondary/50 transition-all text-white placeholder:text-slate-500 shadow-inner"
                      required
                    />
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-secondary to-brand-accent rounded-xl blur opacity-0 group-focus-within:opacity-40 transition duration-500"></div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5 group-focus-within:text-brand-secondary transition-colors" />
                    <input 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-[#050b14]/80 backdrop-blur-md border border-white/10 hover:border-white/20 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-transparent focus:ring-2 focus:ring-brand-secondary/50 transition-all text-white placeholder:text-slate-500 shadow-inner"
                      required
                    />
                  </div>
                  <div className="flex justify-end mt-3">
                    <a href="#" className="text-xs font-bold text-brand-secondary hover:text-brand-accent transition-colors">Forgot Password?</a>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading || isSuccess}
                  className="w-full bg-gradient-to-r from-brand-secondary to-brand-accent hover:from-brand-accent hover:to-brand-secondary text-white rounded-xl py-4 px-4 font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
                >
                  <AnimatePresence mode="wait">
                    {isSuccess ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center space-x-2 text-white"
                      >
                        <CheckCircle2 className="h-6 w-6" />
                        <span className="text-lg">Authenticated</span>
                      </motion.div>
                    ) : isLoading ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center space-x-3 text-white"
                      >
                        <div className="h-6 w-6 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>
                        <span className="text-lg">Authenticating...</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center space-x-2 text-white"
                      >
                        <span className="text-lg tracking-wide">Secure Login</span>
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        {/* Footer info below card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 text-center relative z-10"
        >
          <p className="text-xs text-slate-400 font-medium">
            Authorized personnel only • Supervised by Ministry of Petroleum & Natural Gas <br/>
            <Link href="/" className="hover:text-white transition-colors underline decoration-slate-600 hover:decoration-white underline-offset-4 mt-2 inline-block">Security Policy</Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
