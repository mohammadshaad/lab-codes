import Image from 'next/image'
import { Inter } from 'next/font/google'
import CodeSharingPage from '@/components/CodeSharingPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black ">
      <CodeSharingPage />
    </main>
  )
}
