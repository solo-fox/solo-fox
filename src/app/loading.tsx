import Image from "next/image"

export default function Loading() {
  return (
    <div className="flex-col z-[200] gap-10 fixed top-0 left-0 w-full h-full flex items-center justify-center ">
      <Image src="/logo.png" width={50} height={50} alt="Logo" />
    </div>
  )
}