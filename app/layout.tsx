import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600']
})

const poppins = Poppins({ 
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['600', '700']
})

export const metadata: Metadata = {
  title: 'By Pilates | Core Strength & Posture Training for Women',
  description: 'Transform your body through expert Pilates training. Specialized in core strength, posture correction, and rehabilitation for women 25-50. Book your session today.',
  keywords: ['pilates', 'core strength', 'posture training', 'personal trainer', 'rehabilitation', 'feminine fitness', 'women wellness'],
  openGraph: {
    title: 'By Pilates | Core Strength & Posture Training',
    description: 'Expert Pilates training for core strength and posture correction',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
