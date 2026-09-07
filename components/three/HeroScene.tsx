"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

// Lazy load the 3D scene without blocking the initial SSR HTML or SEO text
const VTMonogram3D = dynamic(() => import("./VTMonogram3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[380px] sm:h-[450px] lg:h-[540px] flex items-center justify-center relative">
      <div className="w-64 h-64 rounded-full bg-radial-glow animate-pulse-slow absolute" />
      <div className="relative w-48 h-48 opacity-80 animate-pulse">
        <Image
          src="/logo-monogram-trans.png"
          alt="Veltrixa 3D Loading Placeholder"
          fill
          className="object-contain"
        />
      </div>
    </div>
  ),
});

export function HeroScene() {
  return <VTMonogram3D />;
}

export default HeroScene;
