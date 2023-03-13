/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 deneme.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/deneme.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.003']} position={[-0.01, 1.17, -1.07]} rotation={[Math.PI / 2, 0, 0]} scale={0.03} />
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.001']} position={[0, 1.15, -1]} rotation={[1.06, 0, 0]} scale={[2, 1, 1]} />
    </group>
  )
}

useGLTF.preload('/deneme.gltf')
