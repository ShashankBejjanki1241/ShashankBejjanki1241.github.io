"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text, Html } from "@react-three/drei";
import { Suspense, useRef, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { Group } from "three";

function Chip({ label, radius = 2.2, angle = 0 }: { label: string; radius?: number; angle?: number }) {
  const ref = useRef<Group>(null);
  useFrame((_, dt) => {
    // gentle idle
    if (ref.current) ref.current.rotation.y += dt * 0.1;
  });
  const pos = useMemo(() => [Math.cos(angle) * radius, 0, Math.sin(angle) * radius] as [number,number,number], [angle, radius]);
  return (
    <group ref={ref} position={pos}>
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.7}>
        <mesh>
          <boxGeometry args={[0.9, 0.16, 0.6]} />
          <meshStandardMaterial color="#8b5cf6" roughness={0.55} metalness={0.2} />
        </mesh>
        <Text
          position={[0, 0.02, 0.36]}
          fontSize={0.16}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      </Float>
    </group>
  );
}

function Ring() {
  const skills = ["TS", "React", "Next", "Node", "Python", "Docker", "AWS", "CI/CD"];
  return (
    <group>
      {skills.map((s, i) => (
        <Chip key={s} label={s} angle={(i / skills.length) * Math.PI * 2} />
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 5, 2]} intensity={0.7} />
      <Ring />
    </>
  );
}

export default function Hero3D() {
  const { ref, inView } = useInView({ rootMargin: "0px 0px -20% 0px", triggerOnce: true });
  return (
    <div ref={ref} className="relative h-[340px] sm:h-[420px] rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
      {/* Fallback text while loading */}
      <Suspense fallback={<div className="absolute inset-0 grid place-items-center text-white/60">Loading scene…</div>}>
        {inView && (
          <Canvas
            gl={{ antialias: true, powerPreference: "high-performance" }}
            dpr={[1, 1.8]}
            camera={{ position: [0, 2.2, 4.2], fov: 50 }}
          >
            <Scene />
            {/* light overlay label */}
            <Html center>
              <div className="text-white/80 text-sm bg-black/30 px-2 py-1 rounded-lg backdrop-blur">
                Your Tech Orbit
              </div>
            </Html>
          </Canvas>
        )}
      </Suspense>
    </div>
  );
}
