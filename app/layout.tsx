import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ToDo | Tarefas",
  description: "Gerencie suas tarefas",
};

export const viewport: Viewport = {
  themeColor: '#0D0D0D',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="color-scheme" content="#0D0D0D" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
