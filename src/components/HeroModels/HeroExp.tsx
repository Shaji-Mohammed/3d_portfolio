import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room.jsx";
import { OrbitControls } from "@react-three/drei";
import HeroLights from "./HeroLights.js";
import Particles from "./Particles.js";
import { Suspense } from "react";

const HeroExp = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768x)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 55 }}>
      <ambientLight intensity={0.2} color="#1a1a40" />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxDistance={10}
        minDistance={10}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <Suspense>
        <HeroLights />
        <Particles count={125} />
        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExp;
