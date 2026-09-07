"use client";

import React, {
  Suspense,
  useRef,
  useState,
  useEffect,
  Component,
  type ReactNode,
} from "react";
import { Canvas, useFrame, useThree, invalidate } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import Image from "next/image";

/* ─────────────────────────────────────────────
   Animated VT Monogram geometry
───────────────────────────────────────────── */
function GeometricCore() {
  const groupRef  = useRef<THREE.Group>(null);
  const cageRef   = useRef<THREE.Mesh>(null);
  const coreRef   = useRef<THREE.Mesh>(null);
  const { pointer, invalidate: inv } = useThree();

  // Run animation on every frame
  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const dt = Math.min(delta, 0.05);
    const t  = state.clock.getElapsedTime();

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      pointer.x * 0.4 + Math.sin(t * 0.3) * 0.15,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -pointer.y * 0.3 + Math.cos(t * 0.3) * 0.08,
      0.05
    );

    if (cageRef.current) {
      cageRef.current.rotation.z += dt * 0.1;
      cageRef.current.rotation.y += dt * 0.08;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y -= dt * 0.2;
      coreRef.current.rotation.x += dt * 0.15;
    }
    inv(); // invalidate on demand to reduce idle GPU usage
  });

  return (
    <group ref={groupRef}>
      {/* Outer wireframe cage */}
      <mesh ref={cageRef}>
        <icosahedronGeometry args={[2.5, 0]} />
        <meshStandardMaterial
          color="#38BDF8"
          metalness={0.9}
          roughness={0.2}
          wireframe
          transparent
          opacity={0.22}
        />
      </mesh>

      {/* Inner octahedron core */}
      <mesh ref={coreRef} scale={[0.7, 0.7, 0.7]}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial
          color="#17B4E8"
          emissive="#0EA5D6"
          emissiveIntensity={0.5}
          roughness={0.15}
          metalness={0.8}
          transparent
          opacity={0.38}
        />
      </mesh>

      {/* V — left arm */}
      <mesh position={[-0.55, 0.2, 0]} rotation={[0, 0, 0.48]}>
        <boxGeometry args={[0.2, 2.2, 0.22]} />
        <meshStandardMaterial
          color="#F8FAFC"
          metalness={0.98}
          roughness={0.08}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* V — right arm / T stem */}
      <mesh position={[0.25, 0.2, 0]} rotation={[0, 0, -0.48]}>
        <boxGeometry args={[0.2, 2.2, 0.22]} />
        <meshStandardMaterial
          color="#CBD5E1"
          metalness={0.98}
          roughness={0.08}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* T — horizontal bar (chrome) */}
      <mesh position={[0.45, 1.05, 0.05]}>
        <boxGeometry args={[1.4, 0.2, 0.22]} />
        <meshStandardMaterial
          color="#F8FAFC"
          metalness={0.98}
          roughness={0.08}
        />
      </mesh>

      {/* T — glowing cyan tip */}
      <mesh position={[1.25, 1.05, 0.05]}>
        <boxGeometry args={[0.45, 0.2, 0.22]} />
        <meshStandardMaterial
          color="#33E1FF"
          emissive="#33E1FF"
          emissiveIntensity={2.5}
          roughness={0.1}
          metalness={0.5}
        />
      </mesh>

      {/* Lights embedded in the monogram group */}
      <pointLight position={[1.4, 1.1, 0.3]}  color="#33E1FF" intensity={4}   distance={6} />
      <pointLight position={[-2,  1,   3]}     color="#FFFFFF"  intensity={2.5} distance={8} />
    </group>
  );
}

/* ─────────────────────────────────────────────
   Static logo fallback (shown while WebGL loads or on error)
───────────────────────────────────────────── */
function LogoFallback({ pulsing = false }: { pulsing?: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-64 h-64 rounded-full bg-radial-glow-strong absolute opacity-70" />
      <div
        className={`relative w-48 h-48 sm:w-56 sm:h-56 ${
          pulsing ? "animate-pulse" : ""
        }`}
      >
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

/* ─────────────────────────────────────────────
   Error boundary — catches WebGL crashes
───────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────
   Main exported component
───────────────────────────────────────────── */
export function VTMonogram3D() {
  const [canRender3D,  setCanRender3D]  = useState(false);
  const [canvasReady,  setCanvasReady]  = useState(false);
  const [useFallback,  setUseFallback]  = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Respect system accessibility setting
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);

    // Defer WebGL mount by two frames so React Strict Mode remounts
    // don't leave a dead context and so the page layout is stable first.
    let cancelled = false;
    let raf1: number;
    let raf2: number;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        if (!cancelled) setCanRender3D(true);
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      mq.removeEventListener("change", onChange);
    };
  }, []);

  const showStatic = reducedMotion || useFallback || !canRender3D;

  return (
    <div className="w-full h-[380px] sm:h-[450px] lg:h-[540px] relative">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-radial-glow-strong pointer-events-none opacity-60 blur-3xl" />

      {/* Static logo visible until canvas is ready — no empty black box */}
      {(!canvasReady || showStatic) && (
        <LogoFallback pulsing={!showStatic && !canvasReady} />
      )}

      {!showStatic && (
        <WebGLErrorBoundary onError={() => setUseFallback(true)}>
          <Canvas
            className="!absolute inset-0 touch-none"
            style={{
              width: "100%",
              height: "100%",
              opacity: canvasReady ? 1 : 0,
              transition: "opacity 0.6s ease",
            }}
            camera={{ position: [0, 0, 5.2], fov: 45, near: 0.1, far: 100 }}
            dpr={[1, Math.min(window.devicePixelRatio ?? 1, 1.5)]}
            frameloop="demand"   // ← only renders when something changed
            gl={{
              antialias: false,            // cheaper; scene is simple enough
              alpha: true,
              powerPreference: "low-power", // saves battery on mobile
              failIfMajorPerformanceCaveat: false,
              stencil: false,
              depth: true,
            }}
            onCreated={({ gl }) => {
              gl.setClearColor(0x000000, 0);
              // Handle WebGL context loss gracefully
              gl.domElement.addEventListener(
                "webglcontextlost",
                (e) => {
                  e.preventDefault();
                  setUseFallback(true);
                },
                false
              );
              setCanvasReady(true);
            }}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.9} />
              <directionalLight position={[5,  8,  5]} intensity={3}   color="#FFFFFF" />
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
