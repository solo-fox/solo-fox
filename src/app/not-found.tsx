import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex-col gap-10 section hero flex items-center justify-center ">
      <h2 className="sm:text-8xl text-6xl font-extrabold">404</h2>
      <Link href="/" className="btn">
        Return Home
      </Link>
    </div>
  )
}