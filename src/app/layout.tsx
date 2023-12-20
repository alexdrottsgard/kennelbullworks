import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import MobileHeader from '@/components/MobileHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kennel Bullworks',
  description: 'Generated by create next app',
}

function DesktopHeader() {
  return (
    <nav className='hidden lg:block'>
      <ul className="flex gap-8">
        <li><Link href="/">Hem</Link></li>
        <li><Link href="/om-oss">Om oss</Link></li>
        <li><Link href="/vara-hundar">Våra hundar</Link></li>
        <li><Link href="/valpar">Valpar</Link></li>
        <li><Link href="/cocker-spaniel">Om Cocker Spaniel</Link></li>
      </ul>
    </nav>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body className={`${inter.className} flex flex-col text-primary`}>
        <header className="
          flex justify-between items-center
          p-4
          lg:py-8 lg:px-20"
        >
          <h1 className="text-xl font-bold lg:text-4xl"><Link href="/">Kennel Bullworks</Link></h1>
          <DesktopHeader />
          <MobileHeader />
        </header>
        <main className="flex h-auto flex-col items-center justify-between">
          {children}
        </main>
        <footer className="min-h-[20px] bg-red-500">footer</footer>
      </body>
    </html>
  )
}
