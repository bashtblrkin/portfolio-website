import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import cn from 'classnames'

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic']
})

export const metadata: Metadata = {
  title: 'Иван | Портфолио',
  description: 'Сайт портфолио Frontend разработчика Ивана Батурина',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(montserrat.className, 'bg-black text-white')}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
