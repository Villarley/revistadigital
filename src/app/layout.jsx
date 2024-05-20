import { Inter } from "next/font/google"
import "./globals.css"
import Providers from "./providers"
import App from "./app"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Informate2+",
  description:
    "Aplicación para estudiar para el peritazgo de desarrollo web 2024",
}
//nuevo
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <App>{children}</App>
        </Providers>
      </body>
    </html>
  )
}
