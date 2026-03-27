"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  TrendingUp,
  ArrowRight,
  BarChart3,
  ShieldCheck,
  ListChecks,
} from "lucide-react";
import Link from "next/link";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

// Candle Data
const successChartData = [
  { open: 30, high: 45, low: 25, close: 40 },
  { open: 40, high: 42, low: 35, close: 38 },
  { open: 38, high: 55, low: 38, close: 50 },
  { open: 50, high: 65, low: 48, close: 60 },
  { open: 60, high: 62, low: 55, close: 58 },
  { open: 58, high: 75, low: 58, close: 72 },
  { open: 72, high: 85, low: 70, close: 82 },
  { open: 82, high: 84, low: 75, close: 78 },
  { open: 78, high: 95, low: 78, close: 92 },
];

export default function BalancedMinimalLanding() {
  return (
    <div className="min-h-screen bg-black text-zinc-400 font-light selection:bg-emerald-500/10 flex flex-col overflow-x-hidden relative">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:44px_44px]" />

      {/* --- NAV --- */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="border-b border-white/5 px-6 py-4 flex items-center justify-between sticky top-0 bg-black/95 backdrop-blur-md z-50"
      >
        <div className="flex items-center gap-3 group">
          <TrendingUp className="text-emerald-500 w-5 h-5 stroke-[1.5]" />
          <span className="text-[14px] tracking-tight text-white font-normal uppercase tracking-widest">
            Disciplined Trader
          </span>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6 text-[13px] text-zinc-500 lowercase">
            <Link
              href="/Master"
              className="hover:text-emerald-500 transition-colors"
            >
              Methodology
            </Link>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-500 text-white text-[13px] h-9 px-5 rounded-none font-normal">
            Get Started
          </Button>
        </div>
      </motion.nav>

      {/* --- HERO SECTION --- */}
      <main className="relative z-10 flex-1 max-w-[1200px] mx-auto pt-24 md:pt-32 pb-24 px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-8 flex-1"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1 border border-emerald-500/20 bg-emerald-500/5"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-500">
                Active MVP Phase
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-light text-white tracking-tight leading-[1.1]"
            >
              Trade the plan. <br />
              <span className="text-zinc-600 italic">
                Master the discipline.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-[450px] text-[15px] text-zinc-400 leading-relaxed font-light"
            >
              The first journaling tool built specifically to stop emotional
              trading. Wrap your strategy in a high-density, no-noise interface.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 pt-4"
            >
              <Button className="bg-emerald-600 hover:bg-emerald-500 text-white text-[14px] h-12 px-8 rounded-none group">
                Build Your Plan{" "}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link
                href="/why"
                className="flex items-center gap-2 text-zinc-500 text-[13px] hover:text-zinc-300 transition-colors"
              >
                <span>Learn why 90% fail</span>{" "}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* --- CANDLE CHART (SIDE BY SIDE) --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block relative w-[400px] h-[300px] bg-zinc-950 border border-white/5 overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <span className="text-[120px] font-bold text-white/[0.02] tracking-tighter italic">
                88
              </span>
            </div>

            <div className="absolute top-6 left-6 flex flex-col gap-1 pointer-events-none">
              <span className="text-[10px] text-zinc-700 uppercase tracking-[0.3em]">
                Adherence_Score
              </span>
              <div className="h-[1px] w-12 bg-emerald-500/20" />
            </div>

            {/* Candle SVG with Green Wicks */}
            <div className="absolute inset-0 z-10 p-8 flex items-end">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                {successChartData.map((candle, i) => {
                  const x = 5 + i * 10;
                  const isBullish = candle.close >= candle.open;
                  const bodyTop = isBullish
                    ? 100 - candle.close
                    : 100 - candle.open;
                  const bodyHeight = Math.abs(candle.close - candle.open);
                  const wickTop = 100 - candle.high;
                  const wickHeight = candle.high - candle.low;

                  return (
                    <g key={i}>
                      <line
                        x1={x + 3.5}
                        y1={wickTop}
                        x2={x + 3.5}
                        y2={wickTop + wickHeight}
                        // Bullish wicks are now Emerald Green
                        className={
                          isBullish
                            ? "stroke-emerald-500/50"
                            : "stroke-zinc-800"
                        }
                        strokeWidth="0.5"
                      />
                      <rect
                        x={x}
                        y={bodyTop}
                        width="7"
                        height={Math.max(bodyHeight, 1.5)}
                        className={
                          isBullish
                            ? "fill-white stroke-white"
                            : "fill-black stroke-zinc-700"
                        }
                        strokeWidth="0.5"
                      />
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="absolute bottom-4 left-6 text-[9px] font-mono text-zinc-600 tracking-widest uppercase z-30">
              verified_equity_curve
            </div>
          </motion.div>
        </div>

        {/* --- FEATURES GRID --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-20"
        >
          <div className="space-y-4 group">
            <div className="w-10 h-10 flex items-center justify-center border border-white/5 bg-zinc-950 group-hover:border-emerald-500/50 transition-colors">
              <ListChecks className="w-5 h-5 text-emerald-500" />
            </div>
            <h2 className="text-[15px] text-zinc-100 uppercase tracking-wide">
              Hard-Stop Rules
            </h2>
            <p className="text-[13px] text-zinc-500 leading-relaxed font-light">
              The app blocks trade logging if your custom criteria aren't met.
            </p>
          </div>

          <div className="space-y-4 group">
            <div className="w-10 h-10 flex items-center justify-center border border-white/5 bg-zinc-950 group-hover:border-emerald-500/50 transition-colors">
              <BarChart3 className="w-5 h-5 text-emerald-500" />
            </div>
            <h2 className="text-[15px] text-zinc-100 uppercase tracking-wide">
              Signal Matrix
            </h2>
            <p className="text-[13px] text-zinc-500 leading-relaxed font-light">
              Real-time trend snapshots. See M15, H1, H4, and Daily bias in one
              grid.
            </p>
          </div>

          <div className="space-y-4 group">
            <div className="w-10 h-10 flex items-center justify-center border border-white/5 bg-zinc-950 group-hover:border-emerald-500/50 transition-colors">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
            </div>
            <h2 className="text-[15px] text-zinc-100 uppercase tracking-wide">
              Behavioral Alpha
            </h2>
            <p className="text-[13px] text-zinc-500 leading-relaxed font-light">
              Identify which strategies you actually follow and which ones you
              gamble.
            </p>
          </div>
        </motion.div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/5 py-12 mt-auto">
        <div className="max-w-[900px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-[12px] text-zinc-600 font-light text-center md:text-left">
          <div>
            <div className="flex gap-8 justify-center md:justify-start">
              <p>© 2026</p>
              <a href="#" className="hover:text-emerald-500">
                Privacy
              </a>
              <a href="#" className="hover:text-emerald-500">
                Terms
              </a>
            </div>
            <p className="text-[11px] text-zinc-700 tracking-[0.1em] mt-2">
              Developed by{" "}
              <span className="text-emerald-500/80 underline decoration-emerald-500/20">
                Nebiou Daniel
              </span>
            </p>
          </div>
          <div className="space-y-1 md:text-right">
            <p className="uppercase text-[10px]">Built for Discipline</p>
            <p className="italic text-[11px] text-zinc-700 italic">
              "Learn more, build better."
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
