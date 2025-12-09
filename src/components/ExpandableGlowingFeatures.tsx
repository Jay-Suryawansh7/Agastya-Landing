"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { 
  Cpu, 
  FileText, 
  Grid, 
  Route, 
  Activity, 
  Settings, 
  Download, 
  ShieldAlert, 
  Factory, 
  X,
  Zap,
  Layers
} from "lucide-react";

export function ExpandableGlowingFeatures() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="py-20 w-full">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-white font-sans">
        Features
      </h2>
      <p className="text-center text-neutral-400 mb-16 max-w-2xl mx-auto px-4">
        Give it specifications, constraints, or even a rough idea — and Agastya generates:
      </p>
      
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 h-full w-full z-50 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-4 right-4 lg:hidden items-center justify-center bg-white rounded-full h-8 w-8 z-50"
              onClick={() => setActive(null)}
            >
              <X className="text-black h-5 w-5" />
            </motion.button>
            
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-neutral-900 border border-neutral-800 sm:rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Expanded Card Content */}
              <div className="relative h-60 md:h-80 w-full overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900 z-10" />
                 <div className="w-full h-full bg-grid-white/[0.1] bg-neutral-950 flex items-center justify-center">
                    <motion.div layoutId={`icon-${active.title}-${id}`}>
                      {/* Render the icon directly if possible, or wrap in a div that handles the class */}
                      <div className="text-white [&>svg]:h-20 [&>svg]:w-20">
                        {active.icon}
                      </div>
                    </motion.div>
                 </div>
              </div>

              <div className="relative z-20 -mt-10 px-6 pb-6 bg-neutral-900">
                <div className="flex justify-between items-start pt-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-2xl text-white mb-2"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                
                <div className="pt-6 relative">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-300 text-sm md:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {cards.map((card, index) => (
          <motion.li
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="relative h-full rounded-2xl border-0 md:rounded-3xl p-0 cursor-pointer group"
          >
             <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 bg-black border-neutral-800">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] bg-black z-20">
                  <div className="relative flex flex-1 flex-col justify-between gap-3">
                    <div className="w-fit rounded-lg border border-gray-600 p-2 bg-neutral-900">
                      <motion.div layoutId={`icon-${card.title}-${id}`}>
                        {card.icon}
                      </motion.div>
                    </div>
                    <div className="space-y-3">
                      <motion.h3 
                        layoutId={`title-${card.title}-${id}`}
                        className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-white md:text-2xl/[1.875rem]"
                      >
                        {card.title}
                      </motion.h3>
                      <motion.p 
                        layoutId={`description-${card.description}-${id}`}
                        className="font-sans text-sm/[1.125rem] text-neutral-400 md:text-base/[1.375rem]"
                      >
                        {card.description}
                      </motion.p>
                    </div>
                  </div>
                </div>
             </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

const cards = [
  {
    title: "Complete Circuit Architecture",
    description: "End-to-end logic design and component selection.",
    icon: <Cpu className="h-6 w-6 text-white" />,
    content: () => (
      <p>
        Agastya generates the complete circuit architecture from high-level specifications. 
        It selects optimal components, defines interconnects, and ensures logical correctness across the entire system.
      </p>
    ),
  },
  {
    title: "Schematic Diagrams",
    description: "Automated, standards-compliant schematic generation.",
    icon: <FileText className="h-6 w-6 text-white" />,
    content: () => (
      <p>
        Forget manual drafting. Agastya instantly produces professional, readable schematic diagrams. 
        Every connection is verified, and every symbol is standardized for clarity and manufacturing.
      </p>
    ),
  },
  {
    title: "Component Placement",
    description: "AI-optimized layout for thermal and spatial efficiency.",
    icon: <Grid className="h-6 w-6 text-white" />,
    content: () => (
      <p>
        Strategic component placement is critical. Agastya analyzes thermal constraints, signal paths, and mechanical requirements 
        to place components in the most efficient configuration possible.
      </p>
    ),
  },
  {
    title: "Routing Strategies",
    description: "Intelligent trace routing for complex topologies.",
    icon: <Route className="h-6 w-6 text-white" />,
    content: () => (
      <p>
        Agastya employs advanced routing algorithms to handle high-density boards. 
        It manages differential pairs, length matching, and impedance control automatically.
      </p>
    ),
  },
  {
    title: "Signal Integrity",
    description: "Optimized traces for noise reduction and reliability.",
    icon: <Activity className="h-6 w-6 text-white" />,
    content: () => (
      <p>
        Signal integrity is baked in. Agastya simulates and optimizes traces to minimize crosstalk, reflection, and EMI, 
        ensuring your high-speed signals remain clean and reliable.
      </p>
    ),
  },
  {
    title: "DFM-Ready Layout",
    description: "Designed for manufacturing from day one.",
    icon: <Settings className="h-6 w-6 text-white" />,
    content: () => (
      <p>
        Design for Manufacturing (DFM) checks are continuous. Agastya ensures that every trace, via, and pad meets 
        standard fabrication capabilities, reducing costly revisions later.
      </p>
    ),
  },
  {
    title: "Export Suite",
    description: "Gerber, Drill, BOM, and 3D models ready for production.",
    icon: <Download className="h-6 w-6 text-white" />,
    content: () => (
      <p>
        One-click export for all production files. Get industry-standard Gerber files, NC drill data, 
        comprehensive Bills of Materials (BOM), and detailed 3D STEP models instantly.
      </p>
    ),
  },
  {
    title: "Safety & Compliance",
    description: "Automated EMI, thermal, and safety checks.",
    icon: <ShieldAlert className="h-6 w-6 text-white" />,
    content: () => (
      <p>
        Agastya runs rigorous safety and compliance checks. From thermal hotspots to EMI risks, 
        it identifies potential issues before they become hardware failures.
      </p>
    ),
  },
  {
    title: "Manufacturing-Friendly",
    description: "Final designs optimized for assembly and yield.",
    icon: <Factory className="h-6 w-6 text-white" />,
    content: () => (
      <p>
        The final output is not just a file, but a manufacturing-ready asset. 
        Optimized for assembly lines, Agastya's designs maximize yield and minimize assembly errors.
      </p>
    ),
  },
];
