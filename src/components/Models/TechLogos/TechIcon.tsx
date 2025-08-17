import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";
// @ts-ignore
import {Aws_logo} from './Aws_logo';

const TechIcon = ({ model } : any) => {
  if (model.name === "AWS") {
    return (
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={4} />
        <Environment preset="night" />
        <OrbitControls enableZoom={false} />

        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
          <group scale={model.scale} position={model.position || [0, 0, 0]} rotation={model.rotation}>
            <Aws_logo />
          </group>
        </Float>
      </Canvas>
    );
  }

  const scene = useGLTF(model.modelPath) as GLTF;

  return (
    <Canvas>
      <ambientLight intensity={0.5} />

      <directionalLight position={[5, 5, 5]} intensity={1.5} />

      <Environment preset="night" />

      <OrbitControls enableZoom={false} />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group
          scale={model.scale}
          position={model.position || [0, 0, 0]}
          rotation={model.rotation}
        >
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
};

export default TechIcon;
