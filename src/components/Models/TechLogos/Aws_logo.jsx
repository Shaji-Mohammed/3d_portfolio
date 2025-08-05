import { useGLTF } from '@react-three/drei'
import React, { useEffect } from 'react'
import { MeshStandardMaterial } from 'three'

export function Aws_logo(props) {
  const { nodes, materials } = useGLTF('/models/aws_logo-transformed.glb')
  
  // Create AWS-branded materials
  const awsOrangeMaterial = new MeshStandardMaterial({
    color: '#ff9900', // AWS orange
    emissive: '#ff6600',
    emissiveIntensity: 0.3,
    metalness: 0.1,
    roughness: 0.6,
  });

  const awsBlueMaterial = new MeshStandardMaterial({
    color: '#232f3e', // AWS dark blue
    metalness: 0.2,
    roughness: 0.7,
  });

  return (
    <group {...props} dispose={null}>
      {/* Arrow/Smile - Orange */}
      <mesh 
        geometry={nodes.ArrowBody_Material001_0.geometry} 
        material={awsOrangeMaterial}
        position={[-0.131, 1.557, -0.203]} 
        scale={160.675} 
      />
      {/* AWS Text - Blue */}
      <mesh 
        geometry={nodes.AWS_Material003_0.geometry} 
        material={awsBlueMaterial}
        position={[0.415, 6.12, -0.203]} 
        scale={160.675} 
      />
    </group>
  )
}

useGLTF.preload('/models/aws_logo-transformed.glb')
