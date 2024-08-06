import React, { useLayoutEffect } from "react";
import { useRef, useState, useMemo } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { GenerateInitMaterials, LoadAnimations, LoadTextures } from "./Utils";
import gsap, { Power4 } from "gsap";

export function Bottle(props) {
  /* const { nodes } = useGLTF("/Bottle.glb");
   const scene = useThree((state) => state.scene);
   const timeline = gsap.timeline({ defaults: { ease: Power4.easeInOut, duration: 2 } });
 
   const colorsMaterial = {
     cristal: "#8c8c8c",
     soda: "#000",
   };
   const scroll = useScroll();
   const { cristalMaterial, sodaMaterial, brandMaterial } = GenerateInitMaterials(colorsMaterial);
 
   useLayoutEffect(() => {
     const textures = LoadTextures(["FalloutBoy", "Classic", "Quantum", "Sunset"]);
     const animations = LoadAnimations(scene, colorsMaterial, cristalMaterial, sodaMaterial, brandMaterial, textures);
     animations.map((animation) => {
       timeline.to(
         animation.target,
         {
           ...animation.animationsProperties,
         },
         animation.pointTime
       );
     });
   }, []);
 
   useFrame(() => {
     if (timeline) {
       timeline.seek(timeline.duration() * scroll.offset);
     }
   });*/



  const { nodes, materials } = useGLTF('/scene.gltf')
  const meshRefx = useRef()


  const scene = useThree((state) => state.scene);
  const timeline = gsap.timeline({ defaults: { ease: Power4.easeInOut, duration: 2 } });

  const colorsMaterial = {
    cristal: "#8c8c8c",
    soda: "#000",
  };
  const scroll = useScroll();
  const { cristalMaterial, sodaMaterial, brandMaterial } = GenerateInitMaterials(colorsMaterial);

  useFrame((statex, deltax) => (meshRefx.current.rotation.y += deltax /10))


  useLayoutEffect(() => {
    const textures = LoadTextures(["FalloutBoy", "Sunset", "Quantum", "Classic"]);
    const animations = LoadAnimations(scene, colorsMaterial, cristalMaterial, sodaMaterial, brandMaterial, textures);
    animations.map((animation) => {
      timeline.to(
        animation.target,
        {
          ...animation.animationsProperties,
        },
        animation.pointTime
      );
    });
  }, []);



  return (
    <group name='BottleGroup' ref={meshRefx} {...props} dispose={null} position={[0, 2, 0]}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']} scale={1} />



    </group>
  );
}

useGLTF.preload("/Bottle.glb");
