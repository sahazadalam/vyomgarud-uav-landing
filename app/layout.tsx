import { Poppins } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'VyomGarud - Military Grade UAV Systems',
  description: 'Advanced autonomous drone systems for defense and security',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}