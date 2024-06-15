"use client"

import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import { getProjectById } from "@/actions/actions";
import Link from "next/link";
import useFetch from "@/lib/useFetch";
import Image from "next/image";

export default function SingleProject({ id }: { id: number }) {
  const { data, isError, error } = useFetch(() => getProjectById(id));

  if (isError) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const project = data[0];

  return (
    <div className="sm:flex-row flex-col flex section hero overflow-scroll flex-col-reverse sm:overflow-hidden sm:gap-0 gap-5 py-10 pt-16 sm:pt-32 px-10">
      <div className="flex items-start justify-start w-full sm:w-1/2 h-full flex-col gap-3">
        <div className="flex gap-2 items-center">
          <div className="flex gap-2 items-center">
            {project.id && project.id > 1 && (
              <Link href={`/project/${project.id - 1}`}>
                <IoArrowBackCircleOutline size={25} />
              </Link>
            )}
            {project.id && project.id < 5 && (
              <Link href={`/project/${project.id + 1}`}>
                <IoArrowForwardCircleOutline size={25} />
              </Link>
            )}
          </div>
          <p className="text-2xl font-extrabold">
            {project.name}
          </p>
        </div>
        <p className="text-sm text-justify text-pretty pr-10">
          {project.description}
        </p>
        <div className="w-full grow flex flex-col gap-5 justify-end">
          <div className="flex gap-2 items-center flex-wrap">
            {project.techStack && project.techStack.map((techstack, index) => (
              <div
                key={index}
                className="sm:text-sm text-[10px] px-5 py-2 border-2 border-zinc-500 rounded-[25px]"
              >
                {techstack}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-10">
            {project.github && (
              <Link href={project.github}>
                <FaGithub size={30} />
              </Link>
            )}
            {project.url && (
              <Link href={project.url}>
                <LuExternalLink size={30} />
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="flex-row flex-col-reverse flex-row-reverse relative sm:flex-col flex items-start justify-start gap-2 overflow-scroll sm:w-1/2 w-full h-full">
        {project.screenshots && project.screenshots.map((screenshot, index) => (
          <div className="w-full h-auto" key={index}>
            <Image
              width={100}
              height={100}
              className="object-cover w-full h-full"
              src={screenshot}
              alt={`${project.name} - ${screenshot}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
