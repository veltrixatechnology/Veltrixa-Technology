"use client";

import React, { Suspense, useRef, useState, useEffect, Component, type ReactNode } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import Image from "next/image";

function GeometricCore() {
  const meshRef = useRef<THREE.Group>(null);
  const outerCageRef = useRef<THREE.Mesh>(null);
  const innerCoreRef = useRef<THREE.Mesh>(null);

  const { pointer } = useThree();

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const clampedDelta = Math.min(delta, 0.05);
    const targetX = pointer.x * 0.4;
    const targetY = pointer.y * 0.3;

    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetX + Math.sin(state.clock.getElapsedTime() * 0.3) * 0.15,
      0.05
    );
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      -targetY + Math.cos(state.clock.getElapsedTime() * 0.3) * 0.08,
      0.05
    );

    if (outerCageRef.current) {
      outerCageRef.current.rotation.z += clampedDelta * 0.1;
      outerCageRef.current.rotation.y += clampedDelta * 0.08;
    }
    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y -= clampedDelta * 0.2;
      innerCoreRef.current.rotation.x += clampedDelta * 0.15;
    }
  });

  return (
    <group ref={meshRef}>
      <mesh ref={outerCageRef}>
        <icosahedronGeometry args={[2.5, 0]} />
        <meshStandardMaterial
          color="#38BDF8"
          metalness={0.9}
          roughness={0.2}
          wireframe={true}
          transparent={true}
          opacity={0.25}
        />
      </mesh>

      <mesh ref={innerCoreRef} scale={[0.7, 0.7, 0.7]}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial
          color="#17B4E8"
          emissive="#0EA5D6"
          emissiveIntensity={0.5}
          roughness={0.15}
          metalness={0.8}
          transparent={true}
          opacity={0.4}
        />
      </mesh>

      <mesh position={[-0.55, 0.2, 0]} rotation={[0, 0, 0.48]}>
        <boxGeometry args={[0.2, 2.2, 0.22]} />
        <meshStandardMaterial
          color="#F8FAFC"
          metalness={0.98}
          roughness={0.08}
          envMapIntensity={1.5}
        />
      </mesh>

      <mesh position={[0.25, 0.2, 0]} rotation={[0, 0, -0.48]}>
        <boxGeometry args={[0.2, 2.2, 0.22]} />
        <meshStandardMaterial
          color="#CBD5E1"
          metalness={0.98}
          roughness={0.08}
          envMapIntensity={1.5}
        />
      </mesh>

      <mesh position={[0.45, 1.05, 0.05]} rotation={[0, 0, 0]}>
        <boxGeometry args={[1.4, 0.2, 0.22]} />
        <meshStandardMaterial
          color="#F8FAFC"
          metalness={0.98}
          roughness={0.08}
        />
      </mesh>

      <mesh position={[1.25, 1.05, 0.05]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.45, 0.2, 0.22]} />
        <meshStandardMaterial
          color="#33E1FF"
          emissive="#33E1FF"
          emissiveIntensity={2.5}
          roughness={0.1}
          metalness={0.5}
        />
      </mesh>

      <pointLight position={[1.4, 1.1, 0.3]} color="#33E1FF" intensity={4} distance={6} />
      <pointLight position={[-2, 1, 3]} color="#FFFFFF" intensity={2.5} distance={8} />
    </group>
  );
}

function LogoFallback({ pulsing = false }: { pulsing?: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-64 h-64 rounded-full bg-radial-glow-strong absolute opacity-70" />
      <div className={`relative w-48 h-48 sm:w-56 sm:h-56 ${pulsing ? "animate-pulse" : ""}`}>
        <Image
          src="/logo-monogram-trans.png"
          alt="Veltrixa Monogram"
          fill
          priority
          sizes="(max-width: 640px) 192px, 224px"
          className="object-contain drop-shadow-[0_0_35px_rgba(23,180,232,0.6)]"
        />
      </div>
    </div>
  );
}

class WebGLErrorBoundary extends Component<
  { children: ReactNode; onError: () => void },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

export function VTMonogram3D() {
  const [canRender3D, setCanRender3D] = useState(false);
  const [canvasReady, setCanvasReady] = useState(false);
  const [useFallback, setUseFallback] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    // Defer WebGL mount one frame so React Strict Mode remounts don't leave a dead context
    let cancelled = false;
    const frame = requestAnimationFrame(() => {
      if (!cancelled) setCanRender3D(true);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const showStatic = reducedMotion || useFallback || !canRender3D;

  return (
    <div className="w-full h-[380px] sm:h-[450px] lg:h-[540px] relative">
      <div className="absolute inset-0 bg-radial-glow-strong pointer-events-none opacity-60 blur-3xl" />

      {/* Keep logo visible until the canvas paints — avoids empty “buffering” pulse */}
      {(!canvasReady || showStatic) && <LogoFallback pulsing={!showStatic && !canvasReady} />}

      {!showStatic && (
        <WebGLErrorBoundary onError={() => setUseFallback(true)}>
          <Canvas
            className="!absolute inset-0 touch-none"
            style={{ width: "100%", height: "100%", opacity: canvasReady ? 1 : 0 }}
            camera={{ position: [0, 0, 5.2], fov: 45, near: 0.1, far: 100 }}
            dpr={[1, 1.5]}
            frameloop="always"
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: "default",
              failIfMajorPerformanceCaveat: false,
              stencil: false,
              depth: true,
            }}
            onCreated={({ gl }) => {
              gl.setClearColor(0x000000, 0);
              const canvas = gl.domElement;
              const onContextLost = (event: Event) => {
                event.preventDefault();
                setUseFallback(true);
              };
              canvas.addEventListener("webglcontextlost", onContextLost, false);
              setCanvasReady(true);
            }}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.9} />
              <directionalLight position={[5, 8, 5]} intensity={3} color="#FFFFFF" />
              <directionalLight position={[-5, -3, -2]} intensity={1.5} color="#CBD5E1" />

              <Float speed={1.5} rotationIntensity={0.35} floatIntensity={0.5}>
                <GeometricCore />
              </Float>
            </Suspense>
          </Canvas>
        </WebGLErrorBoundary>
      )}
    </div>
  );
}

export default VTMonogram3D;
