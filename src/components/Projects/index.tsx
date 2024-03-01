import { Repo } from '@/types/repo'

export async function Projects() {
  const response = await fetch('https://api.github.com/users/CaarlosLima/repos')
  const repos: Repo[] = await response.json()

  return (
    <section id="projects" className="flex min-h-[calc(100vh-48px)]">
      <h2 className="font-mono text-xl font-bold uppercase tracking-widest">Projects</h2>
    </section>
  )
}
