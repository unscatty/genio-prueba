import Main from "@/components/common/Main";
import NavBar from "@/components/common/NavBar";
import { classNames } from "@/utils/common";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'

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
      <GoogleTagManager gtmId="GTM-TPBJXFSP" /> // Analytics
      <body className={classNames(inter.className, 'bg-white')}>
        <header>
          <NavBar />
        </header>
        <Main>
          {children}
        </Main>
      </body>
    </html>
  );
}
