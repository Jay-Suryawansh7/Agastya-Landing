import React from "react";
import { Spotlight } from "./ui/spotlight";
import { WavyBackground } from "./ui/wavy-background";

export function Hero() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <WavyBackground className="max-w-4xl mx-auto pb-40" containerClassName="absolute inset-0 h-full w-full bg-transparent">
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Agastya <br /> is the invisible engine.
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            A high-intelligence engineering initiative built to create systems that think, adapt, and evolve with precision.
            Design the future’s foundational technologies — quietly, efficiently, and with absolute control.
          </p>
        </div>
      </WavyBackground>
    </div>
  );
}
