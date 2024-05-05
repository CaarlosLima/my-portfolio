import { Repo } from '@/types/repo'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/Card'

export async function Projects() {
  const response = await fetch('https://api.github.com/users/CaarlosLima/repos')
  const repos: Repo[] = await response.json()

  return (
    <section id="projects" className="flex min-h-[calc(100vh-48px)] w-full flex-col text-center">
      <h2 className="font-mono text-xl font-bold uppercase tracking-widest">Projects</h2>

      <ul className="flex flex-wrap justify-around gap-y-4">
        {repos
          .filter((repo) => repo.name !== 'CaarlosLima')
          .map((repo) => (
            <li key={repo.id} className="w-[32%]">
              <Card className="bg-transparent text-white">
                <CardHeader>
                  <CardTitle>{repo.name}</CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription>{repo.description}</CardDescription>
                </CardContent>

                <CardFooter>
                  <Link href={repo.html_url}>View on GitHub</Link>
                </CardFooter>
              </Card>
            </li>
          ))}
      </ul>
    </section>
  )
}
