import Image from "next/image"
import { FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import AnimatedDiv from "@/components/AnimatedDiv"
import Link from "next/link"

export default function Navbar() {
   return (
    <AnimatedDiv 
      fromVars={{ backgroundColor: "transparent" }} 
      toVars={{ backgroundColor: "black" }} 
      start="1px" 
      duration={1} 
      as="div"
      className="bg-transparent z-[100] fixed top-0 flex items-center px-10 py-4 w-full"
    >
        <div>
          <Link href="/">
            <Image src="/logo.png" width={20} height={20} alt="Logo" />
          </Link>
        </div>
        <div className="flex grow gap-5 items-center justify-end">
          <a href="/#about"className="hidden sm:block" >About</a>
          <a href="/#work" className="hidden sm:block">Work</a>
          <a href="/#connect" className="border-b-[1px] border-white">Let &apos; s contact</a>
          <a href="https://github.com/solo-fox"><FaGithub /></a>
          <a href="https://twitter.com/solofox_"><FaXTwitter /></a>
        </div>
    </AnimatedDiv>
  )
}
