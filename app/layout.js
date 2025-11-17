import './globals.css'
import { Playfair_Display, Inter, Great_Vibes } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display' })
const inter = Inter({ subsets: ['latin'], variable: '--font-body' })
const greatVibes = Great_Vibes({ weight: '400', subsets: ['latin'], variable: '--font-script' })

export const metadata = {
  title: 'Wedding Templates',
  description: 'Beautiful wedding website templates',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${greatVibes.variable}`}>
      <body className="min-h-screen bg-white text-gray-900">{children}</body>
    </html>
  )
}
