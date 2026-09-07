"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function GeometricCore() {
  const meshRef = useRef<THREE.Group>(null);
  const outerCageRef = useRef<THREE.Mesh>(null);
  const innerCoreRef = useRef<THREE.Mesh>(null);

  const { pointer } = useThree();

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Subtle pointer parallax
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
      outerCageRef.current.rotation.z += delta * 0.1;
      outerCageRef.current.rotation.y += delta * 0.08;
    }
    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y -= delta * 0.2;
      innerCoreRef.current.rotation.x += delta * 0.15;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Outer ambient faceted wireframe cage */}
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

      {/* Subtle floating inner cyan diamond crystal */}
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

      {/* --- VT Chrome Monogram Structure --- */}
      {/* V left arm */}
      <mesh position={[-0.55, 0.2, 0]} rotation={[0, 0, 0.48]}>
        <boxGeometry args={[0.2, 2.2, 0.22]} />
        <meshStandardMaterial
          color="#F8FAFC"
          metalness={0.98}
          roughness={0.08}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* V right arm / T stem */}
      <mesh position={[0.25, 0.2, 0]} rotation={[0, 0, -0.48]}>
        <boxGeometry args={[0.2, 2.2, 0.22]} />
        <meshStandardMaterial
          color="#CBD5E1"
          metalness={0.98}
          roughness={0.08}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* T top horizontal bar - left chrome portion */}
      <mesh position={[0.45, 1.05, 0.05]} rotation={[0, 0, 0]}>
        <boxGeometry args={[1.4, 0.2, 0.22]} />
        <meshStandardMaterial
          color="#F8FAFC"
          metalness={0.98}
          roughness={0.08}
        />
      </mesh>

      {/* T top horizontal bar - electric cyan glowing tip (matches logo!) */}
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

      {/* Point light right at the cyan bar tip */}
      <pointLight position={[1.4, 1.1, 0.3]} color="#33E1FF" intensity={4} distance={6} />
      {/* Chrome reflection key light */}
      <pointLight position={[-2, 1, 3]} color="#FFFFFF" intensity={2.5} distance={8} />
    </group>
  );
}

export function VTMonogram3D() {
  const [isMounted, setIsMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-48 h-48 rounded-full bg-radial-glow animate-pulse" />
      </div>
    );
  }

  // Graceful fallback for reduced motion
  if (reducedMotion) {
    return (
      <div className="w-full h-full flex items-center justify-center relative">
        <div className="w-64 h-64 rounded-full bg-radial-glow-strong absolute" />
        <img
          src="/logo-monogram-trans.png"
          alt="Veltrixa Monogram"
          className="w-56 h-56 object-contain relative z-10 drop-shadow-[0_0_35px_rgba(23,180,232,0.6)]"
        />
      </div>
    );
  }

  return (
    <div className="w-full h-[380px] sm:h-[450px] lg:h-[540px] relative">
      {/* Background ambient lighting glow */}
      <div className="absolute inset-0 bg-radial-glow-strong pointer-events-none opacity-60 blur-3xl" />

      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 8, 5]} intensity={3} color="#FFFFFF" />
        <directionalLight position={[-5, -3, -2]} intensity={1.5} color="#CBD5E1" />

        <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
          <GeometricCore />
        </Float>
      </Canvas>
    </div>
  );
}

export default VTMonogram3D;
