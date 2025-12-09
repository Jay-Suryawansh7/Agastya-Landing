"use client";

import React from "react";
import { motion } from "motion/react";
import { 
  Cpu, 
  Network, 
  CheckCircle2, 
  Download, 
  Bug,
  ArrowRight,
  Zap,
  Shield,
  FileCheck
} from "lucide-react";

export function ProcessFlow() {
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
            The Agastya Process
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            From concept to manufacturing-ready PCB in minutes, not weeks.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line connecting steps */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-green-500 opacity-30" />

          {steps.map((step, index) => (
            <ProcessStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface Step {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  input?: string;
  output: string[];
  highlight: string;
  color: string;
}

const ProcessStep = ({ step, index }: { step: Step; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative mb-16 md:mb-24 flex flex-col md:flex-row ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } items-center gap-8`}
    >
      {/* Step number indicator */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10">
        <div className={`w-12 h-12 rounded-full border-4 border-black flex items-center justify-center font-bold text-lg ${step.color}`}>
          {step.number}
        </div>
      </div>

      {/* Content card */}
      <div className={`flex-1 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"} ml-20 md:ml-0`}>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 hover:border-neutral-700 transition-colors">
          <div className={`flex items-center gap-3 mb-4 ${isEven ? "md:flex-row-reverse md:justify-end" : "md:justify-start"}`}>
            <div className={`p-3 rounded-lg ${step.color}`}>
              {step.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{step.title}</h3>
              <p className="text-neutral-400 text-sm">{step.subtitle}</p>
            </div>
          </div>

          {step.input && (
            <div className="mb-4 p-4 bg-neutral-950 rounded-lg border border-neutral-800">
              <p className="text-xs text-neutral-500 mb-2 font-mono uppercase">Input</p>
              <p className="text-cyan-400 text-sm font-mono italic">"{step.input}"</p>
            </div>
          )}

          <div className="mb-4">
            <p className="text-xs text-neutral-500 mb-3 font-mono uppercase">Output</p>
            <ul className="space-y-2">
              {step.output.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-neutral-300 text-sm">
                  <ArrowRight className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-neutral-800">
            <p className="text-white font-semibold text-base">{step.highlight}</p>
          </div>
        </div>
      </div>

      {/* Empty spacer for alternating layout on desktop */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
};

const steps: Step[] = [
  {
    number: "01",
    title: "AI-Driven Circuit Generation",
    subtitle: "Instant Engineering Clarity",
    icon: <Cpu className="h-6 w-6 text-white" />,
    color: "bg-purple-500/20 text-purple-400 border-purple-500",
    input: "Design a dual-channel motor driver with current sensing, 12V to 5V buck, and overheat protection.",
    output: [
      "Logic + power stage",
      "Protection circuits",
      "Component selection",
      "Proper footprints",
      "Schematic with labeled nets",
      "Ready for layout"
    ],
    highlight: "No browsing forums. No guessing. Just instant engineering clarity."
  },
  {
    number: "02",
    title: "Autonomous PCB Layout Engine",
    subtitle: "Intelligent Placement & Routing",
    icon: <Network className="h-6 w-6 text-white" />,
    color: "bg-cyan-500/20 text-cyan-400 border-cyan-500",
    output: [
      "Auto-placement with constraint optimization",
      "Multi-layer routing",
      "EMI-aware trace planning",
      "Via minimization",
      "Grounding & thermal patterns",
      "Length matching for high-speed signals",
      "Auto-healing for violations"
    ],
    highlight: "This isn't auto-router. This is intelligent placement and routing."
  },
  {
    number: "03",
    title: "DFM, DFT & Reliability Checks",
    subtitle: "Senior Engineer in Your Pocket",
    icon: <Shield className="h-6 w-6 text-white" />,
    color: "bg-green-500/20 text-green-400 border-green-500",
    output: [
      "Manufacturability scoring",
      "Solderability checks",
      "Thermal hotspot detection",
      "Impedance validation",
      "Trace width/current capacity validation",
      "Component availability & lifecycle warnings"
    ],
    highlight: "It acts like a senior hardware engineer preventing your mistakes before they exist."
  },
  {
    number: "04",
    title: "Full Export Pipeline",
    subtitle: "Manufacturing-Ready Assets",
    icon: <Download className="h-6 w-6 text-white" />,
    color: "bg-orange-500/20 text-orange-400 border-orange-500",
    output: [
      "Gerber + NC Drill",
      "Layer stackup",
      "3D model + enclosure clearance checks",
      "Component placement files",
      "Bill of Materials with alternates",
      "Assembly instructions",
      "Testing checklist"
    ],
    highlight: "One AI → entire manufacturing pipeline."
  },
  {
    number: "05",
    title: "Assisted Debugging & Reverse Engineering",
    subtitle: "Analyze, Fix, Optimize",
    icon: <Bug className="h-6 w-6 text-white" />,
    color: "bg-pink-500/20 text-pink-400 border-pink-500",
    input: "Upload photos, PDFs, KiCad files, or Altium project structures.",
    output: [
      "Shorts detection",
      "Loop issues identification",
      "Missing grounds",
      "Poor routing patterns",
      "Bad decoupling",
      "Thermal problems",
      "Power integrity issues"
    ],
    highlight: "And then suggests fixes — or automatically corrects the layout."
  }
];
