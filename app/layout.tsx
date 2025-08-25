import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DreamShop Singapore | PMI Student Competition 2025',
  description: 'AI-powered retail innovation - The 10m x 10m Shop of Your Dreams. PMI Singapore Chapter 2025 Student Competition Entry.',
  keywords: 'PMI, Singapore, student competition, retail innovation, AI, smart shopping',
  authors: [{ name: 'DreamShop Singapore Team' }],
  openGraph: {
    title: 'DreamShop Singapore | PMI Student Competition 2025',
    description: 'AI-powered retail innovation - The 10m x 10m Shop of Your Dreams',
    type: 'website',
    locale: 'en_SG',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-white">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}