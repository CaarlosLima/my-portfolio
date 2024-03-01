import { AboutMe } from '@/components/AboutMe'
import { Background } from '@/components/Background'
import { PageHeader } from '@/components/Header'
import { Projects } from '@/components/Projects'

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center text-slate-100">
      <Background />

      <PageHeader />

      <main className="w-full px-24">
        <section id="home" className="flex min-h-[calc(100vh-48px)] items-center justify-center">
          <p className="w-[600px] p-8 text-center text-3xl font-extralight">
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
