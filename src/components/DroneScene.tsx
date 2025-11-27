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
      // Smooth floating animation
      droneRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      droneRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      droneRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    propellerRef.current = state.clock.elapsedTime;
  });

  return (
    <group ref={droneRef}>
      {/* Main body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.2, 0.3, 1.2]} />
        <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Camera gimbal */}
      <mesh position={[0, -0.3, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.5} />
      </mesh>

      {/* Arms and propellers */}
      {[
        [0.8, 0, 0.8],
        [-0.8, 0, 0.8],
        [0.8, 0, -0.8],
        [-0.8, 0, -0.8],
      ].map((pos, i) => (
        <group key={i} position={pos as [number, number, number]}>
          {/* Arm */}
          <mesh position={[0, 0.1, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.5, 8]} />
            <meshStandardMaterial color="#334155" />
          </mesh>
          {/* Propeller */}
          <mesh position={[0, 0.4, 0]} rotation={[0, propellerRef.current * 20, 0]}>
            <boxGeometry args={[0.6, 0.02, 0.1]} />
            <meshStandardMaterial color="#64748b" transparent opacity={0.7} />
          </mesh>
          <mesh position={[0, 0.4, 0]} rotation={[0, propellerRef.current * 20 + Math.PI / 2, 0]}>
            <boxGeometry args={[0.6, 0.02, 0.1]} />
            <meshStandardMaterial color="#64748b" transparent opacity={0.7} />
          </mesh>
          {/* LED light */}
          <pointLight position={[0, 0.4, 0]} intensity={0.5} color="#38bdf8" distance={2} />
        </group>
      ))}
    </group>
  );
}

export default function DroneScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[3, 2, 5]} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
        
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, 5, -5]} intensity={0.5} color="#38bdf8" />
        
        <Drone />
        
        {/* Particles/stars background */}
        <pointLight position={[0, 0, 0]} intensity={0.1} />
      </Canvas>
    </div>
  );
}
