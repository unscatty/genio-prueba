import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/common/NavBar";
import { classNames } from "@/utils/common";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genio - prueba técnica",
  description: "Prueba técnica para genio.soy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={classNames(inter.className, 'bg-white')}>
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  );
}
