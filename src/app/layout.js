import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'], style: 'normal' })

export const metadata = {
  title: "Devansh's Portfolio",
  description: 'A full-stack developer, machine learning enthusiast, and hackathon participant, passionate about embedded systems and technology.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  )
}