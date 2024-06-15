// @ts-nocheck
"use client"
import React, { useRef, forwardRef, ReactNode } from "react"
import { ScrollTrigger } from "gsap/all"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

interface AnimatedDivProps {
  fromVars: gsap.TweenVars;
  toVars: gsap.TweenVars;
  start: string;
  end?: string;
  as?: keyof JSX.IntrinsicElements;
  id?: number;
  duration: number;
  children: ReactNode;
  [key: string]: any; // for other props
}

const AnimatedDiv = forwardRef<HTMLElement | SVGElement, AnimatedDivProps>(
  ({
    fromVars,
    toVars,
    start,
    end = "",
    id = 0,
    duration,
    as: Component = "span",
    children,
    ...props
  }, ref) => {
    gsap.registerPlugin(ScrollTrigger)

    // Use the forwarded ref or create a new one
    const localRef = useRef<HTMLElement | SVGElement>(null)
    const animatedDiv = (ref as React.RefObject<HTMLElement | SVGElement>) || localRef

    useGSAP(() => {
      gsap.fromTo(animatedDiv.current, fromVars, {
        ...toVars,
        duration,
        scrollTrigger: {
          toggleActions: "play none none reverse",
          trigger: animatedDiv.current,
          end,
          start
        }
      })
    }, [fromVars, toVars, start, duration])

    return (
      <Component key={id.toString()} ref={animatedDiv} {...props}>
        {children}
      </Component>
    )
  }
)

export default AnimatedDiv
