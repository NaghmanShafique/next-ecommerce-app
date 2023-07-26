import Navbar from '@/components/sections/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/sections/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-Commerce Next App',
  description: 'E-Commerce Next App Developed by Naghman Shafeeque',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}</body>
        <Footer/>
    </html>
  )
}
