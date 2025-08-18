import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// @ts-ignore
import { Computer } from "./Gaming_setup.jsx";
import { useMediaQuery } from "react-responsive";

const ContactExp = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas camera={{ position: [2, 2, 5], fov: isMobile? 52 : 42.5 }} shadows>
      <ambientLight intensity={0.5} color={"#fff4e6"} />
      <directionalLight castShadow position={[5, 5, 3]} intensity={1} />
      <spotLight
        position={[-5, 5, 5]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />

      <Environment preset="city" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <group scale={27.5} position={[1.7, -1.1, -1]} castShadow>
        <Computer />
      </group>

      <group scale={[0.275, 1, 0.275]}>
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color={"#a46b2d"} />
        </mesh>
      </group>
    </Canvas>
  );
};

export default ContactExp;
