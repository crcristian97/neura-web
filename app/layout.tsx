import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NeuraWeb",
  description: "Creamos páginas web inteligentes y adaptables para empresas que buscan destacar en el entorno digital. Nuestra tecnología basada en Inteligencia Artificial (IA) garantiza sitios optimizados, rápidos y completamente personalizados para cada cliente. Especialistas en diseño web futurista, ofrecemos soluciones avanzadas que mejoran la experiencia del usuario, maximizan la conversión y posicionan tu negocio en los primeros lugares de búsqueda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
