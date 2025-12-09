"use client";

import { Box, Lock, Search, Settings, Sparkles, Brain, Cpu, GitBranch, ShieldCheck } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function GlowingFeatures() {
  return (
    <div className="py-20 w-full">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-white font-sans">
        Core Mandate
      </h2>
      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 max-w-7xl mx-auto px-4">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Brain className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Build Intelligence Frameworks"
          description="Modular systems for reasoning, automation, simulation, and decision-making."
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Cpu className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Engineer High-Precision Systems"
          description="Deep layers that must never fail, lag, or break. Absolute reliability."
        />

        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<GitBranch className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Design for Adaptability"
          description="Frameworks that learn, pipelines that evolve, architectures that reshape."
        />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<ShieldCheck className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Enable Silent Control"
          description="Operate quietly in the background, controlling workflows without noise."
        />

        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Future-Proof Architecture"
          description="Scalable, interoperable, self-optimizing systems built for the long term."
        />
      </ul>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 bg-black border-neutral-800">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] bg-black">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2 bg-neutral-900">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
