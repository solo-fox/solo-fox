import Globe from "@/components/magicui/globe";
import { FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link"

export default function Connect() {
  return (
    <div id="connect" className="section relative flex flex-col items-center gap-5 justify-center pb-32 overflow-hidden bg-white">
      <div className="flex gap-2 sm:text-6xl text-4xl font-extrabold text-black">
        <p>Let &apos; s</p>
        <p className="text-gradient">connect</p>.
      </div>
      <div className="z-50 flex items-center text-black w-full gap-5 justify-center">
        <Link href="https://twitter.com/solofox_"> 
          <FaXTwitter size={40}/>
        </Link>
        <Link href="https://github.com/solo-fox"> 
          <FaGithub size={40}/>
        </Link>
        <a href="mailto:work.abdelrahman@outlook.com"> 
          <MdOutlineEmail size={40}/>
        </a>
      </div>
      <Globe className="sm:top-[15rem] top-[25rem]" />
    </div>
  )
}