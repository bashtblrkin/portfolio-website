import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic']
})

export const metadata: Metadata = {
  title: 'Портфолио Ивана Батурина',
  description: 'Сайт портфолио Frontend разработчика Ивана Батурина',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
