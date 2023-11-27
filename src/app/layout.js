import NextTopLoader from 'nextjs-toploader'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HridoyNews',
  description: 'A project by Hridoy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextTopLoader color="#ff5724"  showSpinner={false}
  initialPosition={0.1} />
      {children}</body>
    </html>
  )
}
