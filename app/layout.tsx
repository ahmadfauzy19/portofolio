import "./globals.css"
import Header from "./components/layout/header"
import Footer from "./components/layout/footer"
import { ThemeProvider } from "./context/themeContext"
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="bg-background">
        <ThemeProvider>
          <Header />

          <main>
            {children}
          </main>

          <Footer />
        </ThemeProvider>


      </body>
    </html>
  )
}