import Skeleton , { SkeletonTheme } from 'react-loading-skeleton'
import { LuMousePointerClick } from "react-icons/lu";
import { TbHandClick } from "react-icons/tb";
import { PiArrowRightThin } from "react-icons/pi";
import Link from "next/link"
import React from 'react';

interface WorkProjectCardProps {
  handleSetProjectImageUrl: (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => void;
  setProjectImageUrl: React.Dispatch<React.SetStateAction<string | null>>;
  name: string | null,
  projectId: number | null,
  imagePreviewUrl: string | null,
  projectType: string | null
}

export default function WorkProjectCard({
  handleSetProjectImageUrl,
  setProjectImageUrl,
  name,
  projectId,
  imagePreviewUrl,
  projectType
}: WorkProjectCardProps ) {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div
        id={imagePreviewUrl ?? undefined}
        className="px-2 py-5 flex items-center justify-between w-full border-b-2 border-b-zinc-700"
        onTouchStart={handleSetProjectImageUrl}
        onMouseEnter={handleSetProjectImageUrl}
        onMouseLeave={() => setProjectImageUrl(null)}
        onTouchEnd={() => setProjectImageUrl(null)}
      >
        <div className="w-1/2 flex items-center sm:text-4xl text-2xl gap-5">
          <div className="w-[50px]">
            {projectId ? (
              <>
                <LuMousePointerClick className="hidden sm:block"/>
                <TbHandClick className="block sm:hidden"/>
              </>
            ) : (
              <Skeleton height={35} />
            )}
          </div>
          <p className="w-full flex items-center gap-10">
            { name || <Skeleton containerClassName="flex-1"/> }
            {projectType ? (
              <span className="hidden sm:block text-sm px-5 py-2 border-2 border-zinc-500 rounded-[25px]">
                {projectType}
              </span>
            ) : (
              <Skeleton containerClassName="flex-1"/> 
            )}
          </p>
        </div>
        <div className="w-[50px]">
          {projectId ? (
            <Link href={`/project/${projectId}`}>
              <PiArrowRightThin size={50} />
            </Link>
          ) : (
            <Skeleton height={35} />
          )}
        </div>
      </div>
    </SkeletonTheme>
  )
}