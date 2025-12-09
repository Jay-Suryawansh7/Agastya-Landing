"use client";

import React from "react";
import { motion } from "motion/react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Target, Zap, Shield } from "lucide-react";

export function Philosophy() {
  return (
    <div className="py-20 w-full bg-black relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white font-sans mb-4">
            Philosophy
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            The principles that drive Agastya
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative h-full rounded-2xl md:rounded-3xl p-0"
            >
              <div className="relative h-full rounded-2xl border p-3 md:p-4 bg-black border-neutral-800">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="relative flex h-full flex-col gap-4 rounded-xl p-6 md:p-8 bg-black z-20 min-h-[200px]">
                  <div className={`p-3 rounded-lg w-fit ${principle.color}`}>
                    {principle.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {principle.title}
                  </h3>
                  <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative rounded-2xl md:rounded-3xl p-0 max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl border p-3 md:p-4 bg-black border-neutral-800">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="relative rounded-xl p-8 md:p-10 bg-black z-20">
              <p className="text-neutral-300 text-lg md:text-xl leading-relaxed text-center">
                <span className="text-white font-semibold">Agastya</span> is the master-system initiative — 
                a silent, adaptive, high-precision intelligence project built to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 font-semibold">
                  shape and control the future's technological backbone
                </span>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const principles = [
  {
    title: "Minimalism",
    description: "No bloat. No distractions. Just core intelligence, refined and optimized.",
    icon: <Target className="h-6 w-6 text-white" />,
    color: "bg-purple-500/20 border border-purple-500/30"
  },
  {
    title: "Precision",
    description: "Every decision is calculated. Every output is verified. Zero tolerance for error.",
    icon: <Zap className="h-6 w-6 text-white" />,
    color: "bg-cyan-500/20 border border-cyan-500/30"
  },
  {
    title: "Dominance",
    description: "Through intelligence, not force. Silent control over the foundational layers.",
    icon: <Shield className="h-6 w-6 text-white" />,
    color: "bg-pink-500/20 border border-pink-500/30"
  }
];
