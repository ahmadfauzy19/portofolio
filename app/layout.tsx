import "./globals.css"
import Header from "./components/layout/header/index"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background">

        <Header />

        <main>
          {children}
        </main>

      </body>
    </html>
  )
}