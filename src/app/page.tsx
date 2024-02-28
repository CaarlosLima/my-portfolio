import { AboutMe } from '@/components/about-me'
import { Background } from '@/components/background'
import { PageHeader } from '@/components/page-header'
import { Projects } from '@/components/projects'
import Image from 'next/image'

export default async function Home() {
  const response = await fetch('https://api.github.com/users/caarloslima')
  const user = await response.json()

  return (
    <div className="relative flex min-h-screen flex-col items-center text-slate-100">
      <Background />

      <PageHeader user={user} />

      <main className="w-full px-24">
        <section id="home" className="flex min-h-[calc(100vh-48px)] items-center justify-center gap-32">
          <Image src={'/photo.jpg'} alt="User avatar" width={300} height={300} className="rounded-2xl" />

          <p className="w-[600px] rounded-lg p-8 text-center text-3xl font-extralight">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Hey! I'm Carlos Lima, a <b>front end developer</b> passionate about technologies and problem solving.
          </p>
        </section>

        <AboutMe />

        <Projects />
      </main>
    </div>
  )
}
