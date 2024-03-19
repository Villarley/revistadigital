import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/";

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
          <div className="w-[23%] bg-DarkFont">
            <Navbar/>
          </div>
          <div className="w-[77%] bg-Bg p-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
