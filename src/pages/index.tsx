import Image from 'next/image'
import { Inter } from 'next/font/google'
import OS from '@/pages/Operating'
import SE from '@/pages/Software'
import MPMC from '@/pages/Micro'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <OS />
      <SE />
      <MPMC />
    </main>
  )
}
