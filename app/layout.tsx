import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Vikings Volei Prat — Club de Voleibol',
  description: 'Club de voleibol del Prat de Llobregat. Més de 30 anys formant esportistes. 340+ jugadors, 30 equips federats, de benjamí fins a Superlliga 2.',
  openGraph: {
    title: 'Vikings Volei Prat',
    description: 'Club de voleibol del Prat de Llobregat',
    url: 'https://voleiprat.com',
    siteName: 'Vikings Volei Prat',
  },
  icons: {
    icon: '/images/logo_color.png',
    apple: '/images/logo_color.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ca" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
