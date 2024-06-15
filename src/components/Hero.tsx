import React from "react"
import Link from "next/link"
import { PiArrowDownThin, PiArrowRightThin } from "react-icons/pi";
import AnimatedDiv from "@/components/AnimatedDiv"

export default function Hero() {
  return (
    <div className="flex px-10 flex-col section hero overflow-hidden pt-12">
      <div className="relative flex grow items-center">
        <p className="sm:text-8xl tracking-tighter sm:leading-[5rem] text-5xl">
          {["Crafting", "Websites", "Your Vision", "Our Innovation"].map((text,i) => (
            <React.Fragment key={i}>
              <AnimatedDiv
                toVars={{
                  opacity: 1,
                  y: 0
                }}
                duration={1 * i + 0.5}
                start=""
                className="opacity-0"
              >
                {text}
              </AnimatedDiv>
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
      <div className="sm:flex-row flex flex-col-reverse gap-5 sm:gap-0 flex-col w-full pb-10 justify-between sm:items-center items-start">
        <AnimatedDiv
          as="button"
          toVars={{
            x:0
          }}
          className="btn -translate-x-[200%]"
          start=""
          duration={1}
        >
          <Link href="#connect">
          Let &apos; s connect
          </Link>
          <PiArrowRightThin size={25}/>
        </AnimatedDiv>
        <AnimatedDiv 
          as="p" 
          className="w-full text-justify sm:w-1/3 translate-x-[200%]"
          toVars={{
            x:0
          }}
          duration={1}
        >
          Creating digital products like websites, Rust software, and web designs using the latest technologies.
        </AnimatedDiv>
      </div>
    </div>
  )
}