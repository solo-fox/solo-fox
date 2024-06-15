"use client"

import React from 'react'
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { FaGithub, FaReact, FaNodeJs, FaRust } from "react-icons/fa";
import {  SiFirebase } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill} from "react-icons/ri";

export default function Techstack() {
  return (
    <div className="section px-10 py-2 h-[30vh]">
      <VelocityScroll
        default_velocity={4}
        className="flex items-center text-4xl gap-10 font-extrabold"
      >
      <div className="flex gap-2 items-center">
            <FaReact className="text-blue-600"/>
            React.
          </div>
          <div className="flex gap-2 items-center">
            <FaNodeJs className="text-green-600" />
            NodeJs.
          </div>
          <div className="flex gap-2 items-center">
            <RiNextjsFill />
            Next.js
          </div>
          <div className="flex gap-2 items-center">
            <SiFirebase className="text-yellow-600"/>
            Firebase
          </div>
      </VelocityScroll>
    </div>
  )
}