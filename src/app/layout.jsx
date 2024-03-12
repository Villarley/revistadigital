import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Informate2+",
  description:
    "Aplicación para estudiar para el peritazgo de desarrollo web 2024",
};
//nuevo
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen w-full flex">
          <div className="w-1/6 bg-red-500"></div>
          <div className="w-5/6">{children}</div>
        </div>
      </body>
    </html>
  );
}
