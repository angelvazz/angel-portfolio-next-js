import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Angel Mario Vazquez - Portafolio",
  description:
    "Portafolio de un Full Stack Developer y especialista en AWS Cloud.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} select-none`}>{children}</body>
    </html>
  );
}
