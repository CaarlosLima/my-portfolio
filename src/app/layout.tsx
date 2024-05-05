import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { cn } from '@/lib/utils'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Carlos Lima | Portfolio',
  description: 'Brazilian developer specialized in creating impactful digital experiences. Contact me to turn your ideas into digital reality!'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn('flex min-h-screen flex-col bg-background bg-slate-950 font-sans antialiased', inter.variable)}>{children}</body>
    </html>
  )
}
