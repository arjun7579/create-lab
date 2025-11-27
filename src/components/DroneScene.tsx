import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Drone() {
  const droneRef = useRef<THREE.Group>(null);
  const propellerRef = useRef<number>(0);

  useFrame((state) => {
    if (droneRef.current) {
      // Very subtle floating animation
      droneRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
      droneRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      droneRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
      droneRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.25) * 0.03;
    }
    propellerRef.current = state.clock.elapsedTime;
  });

  return (
    <group ref={droneRef} scale={2.5}>
      {/* Modern central body - sleek and flat */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 0.2, 1.5]} />
        <meshStandardMaterial 
          color="#0f1419" 
          metalness={0.9} 
          roughness={0.1}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Top cover plate */}
      <mesh position={[0, 0.12, 0]}>
        <boxGeometry args={[1.3, 0.05, 1.3]} />
        <meshStandardMaterial 
          color="#1a1f26" 
          metalness={0.8} 
          roughness={0.2}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Accent lines */}
      <mesh position={[0, 0.13, 0]}>
        <boxGeometry args={[0.1, 0.02, 1.2]} />
        <meshStandardMaterial 
          color="#38bdf8" 
          emissive="#38bdf8" 
          emissiveIntensity={0.2}
          transparent
          opacity={0.6}
        />
      </mesh>
      <mesh position={[0, 0.13, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[0.1, 0.02, 1.2]} />
        <meshStandardMaterial 
          color="#38bdf8" 
          emissive="#38bdf8" 
          emissiveIntensity={0.2}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Gimbal camera - modern and subtle */}
      <mesh position={[0, -0.25, 0]}>
        <sphereGeometry args={[0.18, 20, 20]} />
        <meshStandardMaterial 
          color="#0a0e12" 
          metalness={0.9} 
          roughness={0.1}
          transparent
          opacity={0.8}
        />
      </mesh>
      <mesh position={[0, -0.25, 0.2]}>
        <cylinderGeometry args={[0.08, 0.08, 0.15, 16]} />
        <meshStandardMaterial 
          color="#1e3a5f" 
          metalness={0.7} 
          roughness={0.3}
          emissive="#38bdf8"
          emissiveIntensity={0.1}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Modern drone arms - sleek and aerodynamic */}
      {[
        [1.2, 0, 1.2],
        [-1.2, 0, 1.2],
        [1.2, 0, -1.2],
        [-1.2, 0, -1.2],
      ].map((pos, i) => {
        const angle = (Math.PI / 4) + (i * Math.PI / 2);
        return (
          <group key={i} position={pos as [number, number, number]}>
            {/* Sleek arm */}
            <mesh position={[0, 0.05, 0]} rotation={[0, 0, Math.PI / 2]}>
              <capsuleGeometry args={[0.04, 0.8, 8, 16]} />
              <meshStandardMaterial 
                color="#0f1419" 
                metalness={0.9} 
                roughness={0.1}
                transparent
                opacity={0.75}
              />
            </mesh>

            {/* Motor housing */}
            <mesh position={[0, 0.15, 0]}>
              <cylinderGeometry args={[0.12, 0.15, 0.2, 16]} />
              <meshStandardMaterial 
                color="#1a1f26" 
                metalness={0.8} 
                roughness={0.2}
                transparent
                opacity={0.7}
              />
            </mesh>

            {/* Modern propeller blades - subtle */}
            <mesh position={[0, 0.26, 0]} rotation={[0, propellerRef.current * 15, 0]}>
              <boxGeometry args={[0.9, 0.01, 0.12]} />
              <meshStandardMaterial 
                color="#1e293b" 
                transparent 
                opacity={0.4}
                metalness={0.7}
                roughness={0.3}
              />
            </mesh>
            <mesh position={[0, 0.26, 0]} rotation={[0, propellerRef.current * 15 + Math.PI / 2, 0]}>
              <boxGeometry args={[0.9, 0.01, 0.12]} />
              <meshStandardMaterial 
                color="#1e293b" 
                transparent 
                opacity={0.4}
                metalness={0.7}
                roughness={0.3}
              />
            </mesh>

            {/* Subtle LED indicator */}
            <pointLight 
              position={[0, 0.26, 0]} 
              intensity={0.3} 
              color="#38bdf8" 
              distance={1.5} 
            />
            <mesh position={[0, 0.05, 0]}>
              <sphereGeometry args={[0.03, 8, 8]} />
              <meshStandardMaterial 
                color="#38bdf8" 
                emissive="#38bdf8" 
                emissiveIntensity={0.3}
                transparent
                opacity={0.5}
              />
            </mesh>
          </group>
        );
      })}

      {/* Bottom sensors/vents */}
      <mesh position={[0, -0.12, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.05, 6]} />
        <meshStandardMaterial 
          color="#0a0e12" 
          metalness={0.8} 
          roughness={0.2}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}

export default function DroneScene() {
  return (
    <div className="absolute inset-0 w-full h-full opacity-60">
      <Canvas>
        <PerspectiveCamera makeDefault position={[4, 3, 6]} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 3.5}
        />
        
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} color="#ffffff" />
        <directionalLight position={[-3, 2, -3]} intensity={0.3} color="#38bdf8" />
        <pointLight position={[0, 5, 0]} intensity={0.4} color="#38bdf8" />
        
        <Drone />
        
        {/* Rim light for depth */}
        <pointLight position={[0, -2, -5]} intensity={0.3} color="#1e40af" />
      </Canvas>
    </div>
  );
}
