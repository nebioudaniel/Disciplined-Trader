"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  TrendingUp,
  AlertTriangle,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export default function MethodologyAndSignals() {
  return (
    <div className="min-h-screen bg-black text-zinc-400 font-light selection:bg-emerald-500/10 flex flex-col overflow-x-hidden">
      {/* --- NAV --- */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="border-b border-white/5 px-6 py-4 flex items-center justify-between sticky top-0 bg-black/95 backdrop-blur-md z-50"
      >
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <TrendingUp className="text-emerald-500 w-5 h-5 stroke-[1.5] group-hover:scale-110 transition-transform" />
          <span className="text-[14px] tracking-tight text-white font-normal uppercase tracking-widest">
            Disciplined Trader
          </span>
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6 text-[13px] text-zinc-500 lowercase">
            {/* Nav Back Link */}
            <Link
              href="/"
              className="flex items-center gap-1.5 hover:text-emerald-500 transition-colors group"
            >
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <a href="#" className="hover:text-emerald-500 transition-colors">
              Signal Dashboard
            </a>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-500 text-white text-[13px] h-9 px-5 rounded-none font-normal">
            Launch App
          </Button>
        </div>
      </motion.nav>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 max-w-[900px] mx-auto pt-12 pb-24 px-6 w-full">
        {/* --- DEDICATED BACK BUTTON --- */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Link href="/">
            <Button
              variant="ghost"
              className="group text-[12px] text-zinc-500 hover:text-emerald-500 p-0 hover:bg-transparent flex items-center gap-2"
            >
              <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
              </div>
              <span>Return to Dashboard</span>
            </Button>
          </Link>
        </motion.div>

        {/* --- METHODOLOGY SECTION --- */}
        <motion.section
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="mb-24"
        >
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight">
              The 90/90/90 Rule.
            </h2>
            <p className="text-[15px] leading-relaxed max-w-[600px] text-zinc-400 font-light">
              90% of retail traders lose 90% of their money in 90 days. It is
              rarely a lack of strategy—it is a total lack of{" "}
              <span className="text-emerald-500 font-normal">
                behavioral discipline
              </span>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/5 pt-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-red-500/70 uppercase text-[11px] tracking-[0.2em]">
                <AlertTriangle className="w-3 h-3" /> The Failure Loop
              </div>
              <p className="text-[14px] text-zinc-400 leading-relaxed">
                Most traders enter based on FOMO, skip their own rules when
                they're "feeling lucky," and revenge trade after a loss.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-500/70 uppercase text-[11px] tracking-[0.2em]">
                <ShieldCheck className="w-3 h-3" /> The Disciplined Solve
              </div>
              <p className="text-[14px] text-zinc-400 leading-relaxed">
                We replace emotion with a hard-stop checklist. If your rules
                aren't checked, the journal won't let you log the trade.
              </p>
            </div>
          </div>
        </motion.section>

        {/* --- LIVE SIGNAL MATRIX PREVIEW --- */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex justify-between items-end border-b border-white/5 pb-6">
            <div>
              <h2 className="text-2xl font-light text-white mb-2 tracking-tight">
                Signal Matrix
              </h2>
              <p className="text-[13px] text-zinc-500 lowercase">
                Multi-timeframe bias verification for EUR/USD
              </p>
            </div>
            <div className="text-[11px] text-zinc-600 uppercase tracking-widest">
              Live Updates Every 15m
            </div>
          </div>

          <div className="w-full border border-white/5 bg-zinc-950/50 overflow-hidden">
            <table className="w-full text-left text-[12px]">
              <thead className="bg-white/[0.02] border-b border-white/5 text-zinc-500 uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-3 font-light">Timeframe</th>
                  <th className="px-6 py-3 font-light">Trend</th>
                  <th className="px-6 py-3 font-light">SMA 20/50</th>
                  <th className="px-6 py-3 font-light">RSI (14)</th>
                  <th className="px-6 py-3 font-light">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.03]">
                {[
                  {
                    tf: "M15",
                    trend: "Bullish",
                    sma: "Above",
                    rsi: "58",
                    status: "Ready",
                    color: "text-emerald-500",
                  },
                  {
                    tf: "H1",
                    trend: "Bullish",
                    sma: "Above",
                    rsi: "62",
                    status: "Ready",
                    color: "text-emerald-500",
                  },
                  {
                    tf: "H4",
                    trend: "Neutral",
                    sma: "Cross",
                    rsi: "48",
                    status: "Wait",
                    color: "text-amber-500",
                  },
                  {
                    tf: "Daily",
                    trend: "Bullish",
                    sma: "Above",
                    rsi: "55",
                    status: "Ready",
                    color: "text-emerald-500",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="hover:bg-white/[0.01] transition-colors"
                  >
                    <td className="px-6 py-4 text-white font-normal">
                      {row.tf}
                    </td>
                    <td className={`px-6 py-4 ${row.color}`}>{row.trend}</td>
                    <td className="px-6 py-4 text-zinc-500">{row.sma}</td>
                    <td className="px-6 py-4 text-zinc-500">{row.rsi}</td>
                    <td className="px-6 py-4 text-zinc-300 uppercase text-[10px] tracking-widest">
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Clean Alpha Block */}
          <div className="mt-12 p-10 border border-white/5 bg-zinc-950 flex flex-col items-center justify-center text-center space-y-6">
            <div className="space-y-2">
              <h3 className="text-white text-[16px] font-normal tracking-tight underline underline-offset-8 decoration-emerald-500/30">
                Join the Alpha Testing Phase
              </h3>
              <p className="text-[13px] text-zinc-500 font-light max-w-[400px]">
                Get notified when we release the Go-powered backend for
                ultra-low latency signal processing.
              </p>
            </div>
            <Button className="bg-white text-black hover:bg-zinc-200 rounded-none h-11 px-10 text-[13px] font-medium transition-all hover:scale-[1.02]">
              Join the Alpha
            </Button>
          </div>
        </motion.section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/5 py-12 mt-auto">
        <div className="max-w-[900px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-[12px] text-zinc-600 font-light">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="flex gap-8">
              <p>© 2026</p>
              <a
                href="#"
                className="hover:text-emerald-500 transition-colors lowercase"
              >
                Privacy
              </a>
              <a
                href="#"
                className="hover:text-emerald-500 transition-colors lowercase"
              >
                Terms
              </a>
            </div>
            <p className="text-[11px] text-zinc-700 tracking-[0.1em]">
              Developed by{" "}
              <span className="text-emerald-500/80 underline underline-offset-4 decoration-emerald-500/20">
                Nebiou Daniel
              </span>
            </p>
          </div>

          <div className="text-center md:text-right space-y-1">
            <p className="tracking-widest uppercase text-[10px]">
              Built for Discipline
            </p>
            <p className="italic text-[11px] text-zinc-700 font-light">
              "Learn more, build better."
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
