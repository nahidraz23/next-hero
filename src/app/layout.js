import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Next Hero',
    template: '%s | Next Hero'
  },
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar></Navbar>
        <div className='h-screen'>{children}</div>
        <Footer></Footer>
      </body>
    </html>
  )
}
