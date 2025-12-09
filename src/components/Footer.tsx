import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-black py-10 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-bold text-white font-sans">Agastya</h3>
          <p className="text-neutral-500 text-sm mt-2">
            Silent. Adaptive. Precise.
          </p>
        </div>
        
        <div className="flex gap-8 text-neutral-400 text-sm">
           <Link href="#" className="hover:text-white transition-colors">Manifesto</Link>
           <Link href="#" className="hover:text-white transition-colors">Technology</Link>
           <Link href="#" className="hover:text-white transition-colors">Contact</Link>
        </div>

        <p className="text-neutral-600 text-xs">
          © {new Date().getFullYear()} Agastya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
