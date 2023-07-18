import Footer from './Sections/Footer'
import Header from "@/app/Sections/Header"
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dine Mart - Created by Muhammad Adil Nadeem',
  description: 'Full Stack E-commerce Webapp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col gap-4`}>
        <Header />
        <main className='flex flex-col gap-24'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
