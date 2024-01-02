import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { FreelancerProvider } from '../API/MarketPlace'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CELO Marketplace',
  description: 'A decentralized freelancing marketplace platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <FreelancerProvider>
      <body>
        {children}
      </body>
      </FreelancerProvider>
    </html>
  )
}
