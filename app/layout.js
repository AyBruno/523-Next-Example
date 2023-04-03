import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './NavBar.js'

export const metadata = {
  title: '1984 ACC Season',
  description: 'UNC Destroys the Competition',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <NavBar/>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
