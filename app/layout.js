export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

import Header from "./header"
import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        {children}
        </body>
    </html>
  )
}
