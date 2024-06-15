"use client"

import Cactus from "@/components/Cactus";
import Lights from "@/components/Lights";
import Image from "next/image"
import * as THREE from "three"
import { BsStars } from "react-icons/bs";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AnimatedDiv from "@/components/AnimatedDiv"; // Adjust the import path as needed

export default function About() {
  return (
    <div id="about" className="section h-auto flex-col overflow-hidden">
      <AnimatedDiv 
        fromVars={{ x: "-200%" }} 
        toVars={{ x: "0%" }} 
        start="bottom 130%" 
        duration={1} 
        as="div"
        className="flex flex-col sm:text-6xl text-4xl gap-2 justify-center h-1/2 w-full px-10 py-5"
      >
        <p>Making your digital</p>
        <p><span className="text-gradient font-extrabold">dreams</span> become</p>
        <div className="flex items-center">
          real. 
          <div className="flex items-center text-sm bg-white text-black gap-2 rounded-[25px] px-5 py-2">
            <BsStars className="text-yellow-300"/>
            <Image className="w-auto rounded-full grayscale" src="/portrait.jpg" width={30} height={30} alt="Portrait" />
            <BsStars className="text-yellow-300"/>
          </div>
        </div>
      </AnimatedDiv>
      <div className="sm:flex-row flex-col flex gap-2 justify-center h-1/2 w-full py-5">
        <div className="w-full h-full sm:w-1/2 text-white px-10 py-5">
          <Canvas>
            <Lights />
            <pointLight position={[10, 10, 10]} />
            <Cactus position={[0, -1, 0]} scale={[2, 2, 2]} />
            <OrbitControls 
              makeDefault
              enableZoom={false}
              enablePan={false}
              rotateSpeed={0.1}
              target={new THREE.Vector3(0, 0 ,0)}
            />
          </Canvas>
        </div>
        <AnimatedDiv 
          fromVars={{ x: "200%" }} 
          toVars={{ x: "0%" }} 
          start="top 100%" 
          duration={1} 
          as="p"
          className="w-full h-full sm:w-1/2 text-justify text-sm px-10 py-5"
        >
          I’m Abdelrahman, a web developer with a passion for creating exceptional online experiences. With over 3 years of experience, I honed my skills in crafting visually stunning designs that effectively communicate brand messages to audiences.
        </AnimatedDiv>
      </div>
    </div>
  )
}