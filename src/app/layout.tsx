import Main from "@/components/common/Main";
import NavBar from "@/components/common/NavBar";
import { classNames } from "@/utils/common";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/common/Footer";
import "./globals.css";

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
      <head>
        {/* <!-- Google Tag Manager --> */}
        <Script>
          {
            `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TPBJXFSP');
            `
          }
        </Script>
        {/* <!-- End Google Tag Manager --> */}
      </head>

      <body className={classNames(inter.className, 'bg-white')}>

        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TPBJXFSP"
          height="0" width="0" className="hidden invisible"></iframe></noscript>

        <header>
          <NavBar />
        </header>
        <Main>
          {children}
        </Main>
        <Footer />
      </body>
    </html>
  );
}
