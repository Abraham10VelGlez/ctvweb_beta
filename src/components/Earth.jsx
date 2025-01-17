import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {  useFrame } from '@react-three/fiber'
export default function Earth(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  const meshRef = useRef()
  
  useFrame((state, delta) => (meshRef.current.rotation.y += delta/20))  
  return (
    <group ref={meshRef} {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']} scale={1} />
    </group>
  )
}

useGLTF.preload('/scene.gltf')