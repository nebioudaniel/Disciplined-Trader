"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  TrendingUp,
  ArrowLeft,
  Brain,
  Skull,
  ZapOff,
  LineChart,
} from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.15 } },
};

export default function WhyTradersFail() {
  return (
    <div className="min-h-screen bg-black text-zinc-400 font-light selection:bg-emerald-500/10 flex flex-col overflow-x-hidden">
      {/* --- NAV --- */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="border-b border-white/5 px-6 py-4 flex items-center justify-between sticky top-0 bg-black/95 backdrop-blur-md z-50"
      >
        <Link href="/" className="flex items-center gap-3 group">
          <TrendingUp className="text-emerald-500 w-5 h-5 stroke-[1.5] group-hover:scale-110 transition-transform" />
          <span className="text-[14px] tracking-tight text-white font-normal uppercase tracking-widest">
            Disciplined Trader
          </span>
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="hidden md:flex items-center gap-1.5 text-[13px] text-zinc-500 lowercase hover:text-emerald-500 transition-colors group"
          >
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <Button className="bg-emerald-600 hover:bg-emerald-500 text-white text-[13px] h-9 px-5 rounded-none font-normal">
            Start Journaling
          </Button>
        </div>
      </motion.nav>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 max-w-[800px] mx-auto pt-20 pb-24 px-6 w-full">
        {/* Back Button for UX */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-12"
        >
          <Link href="/">
            <Button
              variant="ghost"
              className="group text-[12px] text-zinc-500 hover:text-emerald-500 p-0 hover:bg-transparent flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Return to Home</span>
            </Button>
          </Link>
        </motion.div>

        {/* --- HERO --- */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="space-y-6 mb-24"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-light text-white tracking-tight leading-tight"
          >
            The Brutal Truth: <br />
            <span className="text-zinc-600 italic font-extralight text-3xl md:text-4xl">
              Mathematics vs. Emotion.
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-[16px] text-zinc-400 leading-relaxed font-light max-w-[600px]"
          >
            The market isn't designed to take your money. It's designed to
            expose your lack of discipline. Understanding{" "}
            <span className="text-white border-b border-emerald-500/30">
              why
            </span>{" "}
            90% fail is the only way to join the 10%.
          </motion.p>
        </motion.div>

        {/* --- REASONS GRID --- */}
        <div className="space-y-20">
          {/* Reason 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-8 group"
          >
            <div className="hidden md:flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-600 text-[12px]">
                01
              </div>
              <div className="w-px h-full bg-gradient-to-b from-white/10 to-transparent mt-4" />
            </div>
            <div className="space-y-4 pt-2">
              <Brain className="w-6 h-6 text-emerald-500 opacity-80" />
              <h2 className="text-xl text-white font-normal tracking-tight">
                Cognitive Bias Overload
              </h2>
              <p className="text-[14px] leading-relaxed text-zinc-500">
                Traders suffer from "Recency Bias"—expecting the next trade to
                work because the last one did. Without a hard-stop journal, you
                are just gambling on your latest feeling.
              </p>
            </div>
          </motion.div>

          {/* Reason 2 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-8 group"
          >
            <div className="hidden md:flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-600 text-[12px]">
                02
              </div>
              <div className="w-px h-full bg-gradient-to-b from-white/10 to-transparent mt-4" />
            </div>
            <div className="space-y-4 pt-2">
              <ZapOff className="w-6 h-6 text-red-500/70" />
              <h2 className="text-xl text-white font-normal tracking-tight">
                Lack of Edge Verification
              </h2>
              <p className="text-[14px] leading-relaxed text-zinc-500">
                Most traders use "Manual Entry" which allows for cheating. They
                hide their losses and highlight their wins. Our platform forces
                you to face the raw data of your adherence score.
              </p>
            </div>
          </motion.div>

          {/* Reason 3 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-8 group"
          >
            <div className="hidden md:flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-600 text-[12px]">
                03
              </div>
            </div>
            <div className="space-y-4 pt-2">
              <Skull className="w-6 h-6 text-zinc-600" />
              <h2 className="text-xl text-white font-normal tracking-tight">
                The Revenge Cycle
              </h2>
              <p className="text-[14px] leading-relaxed text-zinc-500">
                Losses trigger a biological fight-or-flight response.
                Disciplined Trader acts as a circuit breaker, locking your
                ability to trade when your predefined risk parameters are
                breached.
              </p>
            </div>
          </motion.div>
        </div>

        {/* --- CALL TO ACTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 border border-emerald-500/10 bg-emerald-500/[0.02] text-center space-y-8"
        >
          <h3 className="text-2xl text-white font-light tracking-tight">
            Stop being a statistic.
          </h3>
          <p className="text-[14px] text-zinc-500 max-w-[450px] mx-auto font-light">
            Build a trading plan that survives your emotions. Join the Alpha
            testing phase today.
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-none px-12 h-12 transition-all">
            Join the Alpha
          </Button>
        </motion.div>
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
