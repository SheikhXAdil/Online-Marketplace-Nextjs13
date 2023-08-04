import Footer from './Sections/Footer'
import Header from "@/app/Sections/Header"
import './globals.css'
import { Roboto } from 'next/font/google'
import Providers from '@/components/Providers'


const roboto = Roboto({ weight: "400", style: "normal", subsets: ["latin"] })

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
      <body className={`${roboto.className} flex flex-col gap-4`}>
        <Providers>
          <Header />
          <main className='flex flex-col gap-24'>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
