import Hero from '@/components/Hero'
import Work from '@/components/Work'
import Techstack from '@/components/Techstack'
import About from '@/components/About'
import Connect from '@/components/Connect'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Techstack />
      <Work />
      <Connect />
    </>
  );
}
