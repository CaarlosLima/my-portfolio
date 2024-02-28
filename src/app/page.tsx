import { Background } from '@/components/background'
import { PageHeader } from '@/components/page-header'

export default async function Home() {
  const response = await fetch('https://api.github.com/users/caarloslima')
  const user = await response.json()

  return (
    <div className="relative flex min-h-screen flex-col items-center text-slate-100">
      <Background />

      <PageHeader user={user} />

      <main />
    </div>
  )
}
