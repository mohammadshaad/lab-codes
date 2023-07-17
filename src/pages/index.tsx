import Image from 'next/image'
import { Inter } from 'next/font/google'
import CN from '@/pages/Networks'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  ">
      <CN />
    </main>
  )
}
