'use client';

import { PiArrowRightThin, PiArrowUpRightThin } from "react-icons/pi";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { getProjects } from "@/actions/actions"
import useFetch from "@/lib/useFetch"
import WorkProjectCard from '@/components/WorkProjectCard'
import Image from "next/image"

export default function Work() {
  const [projectImageUrl, setProjectImageUrl] = useState<string | null>(null);
  const {data, isError, error} = useFetch(getProjects)

  const handleSetProjectImageUrl = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    event.preventDefault();
    const target = event.currentTarget as HTMLDivElement;
    setProjectImageUrl(target.id);
  };
  useGSAP(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX: mouseX, clientY: mouseY } = event;
      gsap.to(".projectImage", {
        x: mouseX,
        y: mouseY,
        duration: 0.5,
        ease: "power2.out"
      });
    };
    const handleTouchMove = (event: TouchEvent) => {
      const { clientX: mouseX, clientY: mouseY } = event.touches[0];
      gsap.to(".projectImage", {
        x: mouseX,
        y: mouseY,
        duration: 0.5,
        ease: "power2.out"
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
  
  return (
    <div id="work" className="section h-auto flex gap-2 flex-col px-10 py-5 relative overflow-hidden">
      <div className="mb-5">
        <p className="sm:text-6xl text-4xl font-extrabold">
          Selected <span className="text-gradient">Work.</span>
        </p>
      </div>
      {isError && (
        <p> Error fetching data...  </p>
      )}
      {data && data.map((project, index) => (
        <WorkProjectCard 
          key={index}
          handleSetProjectImageUrl={handleSetProjectImageUrl}
          setProjectImageUrl={setProjectImageUrl}
          name={project.name}
          projectId={project.id}
          imagePreviewUrl={project.imagePreviewUrl}
          projectType={project.type}
        />
      ))}
      {projectImageUrl && (
        <div className="absolute projectImage w-3/4 sm:w-1/2 sm:h-1/2 h-1/4">
          <Image width={100} height={100} src={projectImageUrl} priority unoptimized className="w-full h-full object-cover" alt="Project Preview" />
        </div>
      )}
    </div>
  );
}
