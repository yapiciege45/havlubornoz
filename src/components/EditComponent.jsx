"use client"
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'

export default function EditComponent({id}) {
const { nodes, materials } = useGLTF('/deneme.gltf')
  return (
    <div className='w-full h-screen'>
        <Canvas flat linear>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <group dispose={null}>
                <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.001']} position={[-0.01, 1.17, -1.07]} rotation={[Math.PI / 2, 0, 0]} scale={0.03} />
                <mesh geometry={nodes.Plane.geometry} material={materials['Material.001']} position={[0, 1.15, -1]} rotation={[1.06, 0, 0]} scale={[2, 1, 1]} />
            </group>
        </Canvas>
    </div>
    
  )
}

useGLTF.preload('/deneme.gltf')
