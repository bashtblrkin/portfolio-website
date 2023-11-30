import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Script from 'next/script';
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
    <html lang="ru">
      <body className={cn(montserrat.className, 'bg-primary text-white')}>
      <Script id="metrika-counter" strategy="afterInteractive" >
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(95719893, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true
          });`}
      </Script>
      <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
