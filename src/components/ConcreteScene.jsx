// src/components/ConcreteScene.jsx
// Escena 3D liviana para el Hero: tambor de mixer estilizado que rota
// y cubos de "hormigón" flotando alrededor. Sin assets externos.
import React, { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, ContactShadows, Environment } from '@react-three/drei'

// --- Tambor mixer (cuerpo cilíndrico + conos + bandas verdes) ---
const MixerDrum = () => {
  const ref = useRef()

  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.y += dt * 0.6
    }
  })

  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.45}>
      <group ref={ref} rotation={[0.35, 0, 0.45]} scale={1.05}>
        {/* Cuerpo del tambor */}
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[1.05, 1.32, 2.4, 64]} />
          <meshStandardMaterial color="#dadada" metalness={0.45} roughness={0.55} />
        </mesh>

        {/* Bandas verdes (anillos toroidales rotados para envolver el cilindro Y) */}
        <mesh position={[0, 0.45, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <torusGeometry args={[1.13, 0.06, 16, 100]} />
          <meshStandardMaterial color="#67a844" metalness={0.4} roughness={0.35} emissive="#67a844" emissiveIntensity={0.15} />
        </mesh>
        <mesh position={[0, -0.25, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <torusGeometry args={[1.22, 0.06, 16, 100]} />
          <meshStandardMaterial color="#67a844" metalness={0.4} roughness={0.35} emissive="#67a844" emissiveIntensity={0.15} />
        </mesh>

        {/* Tapas cónicas (superior e inferior) */}
        <mesh position={[0, 1.4, 0]} castShadow>
          <coneGeometry args={[1.05, 0.55, 64]} />
          <meshStandardMaterial color="#f1f1f1" metalness={0.35} roughness={0.45} />
        </mesh>
        <mesh position={[0, -1.4, 0]} rotation={[Math.PI, 0, 0]} castShadow>
          <coneGeometry args={[1.32, 0.55, 64]} />
          <meshStandardMaterial color="#f1f1f1" metalness={0.35} roughness={0.45} />
        </mesh>

        {/* Boquilla superior */}
        <mesh position={[0, 1.85, 0]}>
          <cylinderGeometry args={[0.22, 0.32, 0.35, 32]} />
          <meshStandardMaterial color="#9a9a9a" metalness={0.6} roughness={0.4} />
        </mesh>
      </group>
    </Float>
  )
}

// --- Cubos flotantes con textura de "hormigón" (color piedra + ruido) ---
const ConcreteCubes = () => {
  const cubes = useMemo(
    () => [
      { pos: [-2.6, 1.2, -0.8], size: 0.55, speed: 1.6, rot: [0.3, 0.5, 0.1] },
      { pos: [2.4, -0.6, -1.4], size: 0.7, speed: 1.1, rot: [0.6, 0.2, 0.4] },
      { pos: [-2.0, -1.4, 0.6], size: 0.45, speed: 2.0, rot: [0.1, 0.7, 0.2] },
      { pos: [2.7, 1.6, 0.2], size: 0.5, speed: 1.4, rot: [0.4, 0.1, 0.6] }
    ],
    []
  )

  return (
    <>
      {cubes.map((c, i) => (
        <Float key={i} speed={c.speed} rotationIntensity={0.6} floatIntensity={0.9}>
          <mesh position={c.pos} rotation={c.rot} castShadow>
            <boxGeometry args={[c.size, c.size, c.size]} />
            <meshStandardMaterial color="#bdbdbd" roughness={0.85} metalness={0.05} />
          </mesh>
        </Float>
      ))}
    </>
  )
}

const ConcreteScene = ({ className = '' }) => {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        dpr={[1, 1.8]}
        shadows
        camera={{ position: [3.2, 1.6, 4.4], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.45} />
          <directionalLight
            position={[5, 6, 4]}
            intensity={1.3}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <directionalLight position={[-4, 3, -3]} intensity={0.4} color="#67a844" />

          <MixerDrum />
          <ConcreteCubes />

          <ContactShadows
            position={[0, -1.85, 0]}
            opacity={0.45}
            scale={9}
            blur={2.6}
            far={3}
          />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default ConcreteScene
