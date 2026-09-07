"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

const VTMonogram3D = dynamic(() => import("./VTMonogram3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[380px] sm:h-[450px] lg:h-[540px] flex items-center justify-center relative">
      <div className="w-64 h-64 rounded-full bg-radial-glow absolute opacity-70" />
      <div className="relative w-48 h-48 sm:w-56 sm:h-56">
        <Image
          src="/logo-monogram-trans.png"
          alt="Veltrixa 3D Loading Placeholder"
          fill
          priority
          sizes="(max-width: 640px) 192px, 224px"
          className="object-contain drop-shadow-[0_0_35px_rgba(23,180,232,0.6)]"
        />
      </div>
    </div>
  ),
});

export function HeroScene() {
  return <VTMonogram3D />;
}

export default HeroScene;
