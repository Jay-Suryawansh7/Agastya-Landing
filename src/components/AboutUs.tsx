"use client";

import React from "react";
import { motion } from "motion/react";
import { Building2, Zap, ArrowRight } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function AboutUs() {
  return (
    <div className="py-20 w-full bg-black relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white font-sans mb-4">
            About Us
          </h2>
          <p className="text-neutral-500 text-lg">
            Part of a larger vision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Cogneoverse Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
              <div className="relative flex h-full flex-col gap-6 rounded-xl p-8 md:p-10 bg-black z-20 min-h-[320px]">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg border border-purple-600/30 bg-purple-500/10">
                    <Building2 className="h-8 w-8 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                      Cogneoverse
                    </h3>
                    <p className="text-neutral-500 text-sm">The Vision</p>
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                    Building a suite of <span className="text-white font-semibold">domain-specific intelligence engines</span> — 
                    each designed to augment human capability at a professional level.
                  </p>
                  
                  <div className="flex items-center gap-2 text-purple-400 text-sm font-medium">
                    <ArrowRight className="h-4 w-4" />
                    <span>Empowering professionals with AI</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Agastya Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
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
              <div className="relative flex h-full flex-col gap-6 rounded-xl p-8 md:p-10 bg-black z-20 min-h-[320px]">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg border border-cyan-600/30 bg-cyan-500/10">
                    <Zap className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Agastya
                    </h3>
                    <p className="text-neutral-500 text-sm">First Step</p>
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                    Our first step into <span className="text-white font-semibold">AI-driven hardware engineering</span>.
                  </p>
                  
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Transforming PCB design from a manual, time-consuming process into an intelligent, 
                    automated workflow powered by advanced AI.
                  </p>
                  
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                    <ArrowRight className="h-4 w-4" />
                    <span>Pioneering hardware AI</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-600 text-sm italic">
            Building the future, one intelligence at a time.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
