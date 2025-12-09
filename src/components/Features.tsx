import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  BrainCircuit,
  Cpu,
  GitBranch,
  ShieldCheck,
} from "lucide-react";

export function Features() {
  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 text-center font-sans">
          Core Mandate
        </h2>
        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              href={item.href}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}

const SkeletonOne = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-800 items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-white/[0.1] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
    <BrainCircuit className="h-20 w-20 text-neutral-700 relative z-10" />
  </div>
);

const SkeletonTwo = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-800 items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-32 w-32 border border-neutral-700 rounded-full animate-[spin_10s_linear_infinite]" />
      <div className="h-24 w-24 border border-neutral-600 rounded-full absolute animate-[spin_8s_linear_infinite_reverse]" />
      <div className="h-16 w-16 border border-neutral-500 rounded-full absolute animate-[spin_6s_linear_infinite]" />
    </div>
    <Cpu className="h-10 w-10 text-neutral-300 relative z-10" />
  </div>
);

const SkeletonThree = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-800 items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-dot-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
    <GitBranch className="h-20 w-20 text-neutral-700 relative z-10 rotate-90" />
  </div>
);

const SkeletonFour = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-800 items-center justify-center relative overflow-hidden">
     <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-neutral-500 to-transparent transform -skew-x-12" />
     </div>
    <ShieldCheck className="h-20 w-20 text-neutral-700 relative z-10" />
  </div>
);

const items = [
  {
    title: "Build Intelligence Frameworks",
    description: "Modular systems for reasoning, automation, simulation, and decision-making.",
    header: <SkeletonOne />,
    icon: <BrainCircuit className="h-4 w-4 text-neutral-500" />,
    href: "#intelligence",
  },
  {
    title: "Engineer High-Precision Systems",
    description: "Deep layers that must never fail, never lag, and never break under pressure.",
    header: <SkeletonTwo />,
    icon: <Cpu className="h-4 w-4 text-neutral-500" />,
    href: "#precision",
  },
  {
    title: "Design for Adaptability",
    description: "Frameworks that learn, pipelines that evolve, and architectures that reshape themselves.",
    header: <SkeletonThree />,
    icon: <GitBranch className="h-4 w-4 text-neutral-500" />,
    href: "#adaptability",
  },
  {
    title: "Enable Silent Control",
    description: "Operating quietly in the background: controlling workflows, powering decisions.",
    header: <SkeletonFour />,
    icon: <ShieldCheck className="h-4 w-4 text-neutral-500" />,
    href: "#control",
  },
];
