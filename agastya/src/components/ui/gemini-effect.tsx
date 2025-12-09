"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { MotionValue } from "framer-motion";

export const GeminiEffect = ({
  pathLengths,
  title,
  description,
  className,
}: {
  pathLengths: (MotionValue<number> | number)[];
  title?: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "sticky top-0 h-screen w-full rounded-md bg-black overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 w-full h-full bg-grid-white/[0.2] [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]" />
      <div className="relative flex flex-col items-center justify-start pt-10 md:pt-20 h-full z-10">
        <h2 className="text-5xl md:text-7xl text-white text-center tracking-tight mb-4">
          {title}
        </h2>
        <p className="text-neutral-400 text-base md:text-lg text-center max-w-xl mx-auto">
          {description}
        </p>
      </div>

      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          <motion.path
            d="M0 200 C 400 200 500 450 720 450 C 940 450 1040 200 1440 200"
            stroke="#3b82f6"
            strokeWidth="2"
            style={{
              pathLength: pathLengths[0],
            }}
            className="drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
          />
          <motion.path
            d="M0 350 C 400 350 500 450 720 450 C 940 450 1040 350 1440 350"
            stroke="#06b6d4"
            strokeWidth="2"
            style={{
              pathLength: pathLengths[1],
            }}
            className="drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]"
          />
          <motion.path
            d="M0 450 L 1440 450"
            stroke="#ffffff"
            strokeWidth="2"
            style={{
              pathLength: pathLengths[2],
            }}
            className="drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          />
          <motion.path
            d="M0 550 C 400 550 500 450 720 450 C 940 450 1040 550 1440 550"
            stroke="#f59e0b"
            strokeWidth="2"
            style={{
              pathLength: pathLengths[3],
            }}
            className="drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]"
          />
          <motion.path
            d="M0 700 C 400 700 500 450 720 450 C 940 450 1040 700 1440 700"
            stroke="#ec4899"
            strokeWidth="2"
            style={{
              pathLength: pathLengths[4],
            }}
            className="drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]"
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
             <div className="bg-white rounded-full px-6 py-2 shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                <span className="text-black font-bold text-sm">Agastya</span>
             </div>
        </div>
      </div>
    </div>
  );
};
