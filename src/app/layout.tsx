import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import ClientLayout from "@/components/clientLayout";
import { auth } from "@/auth";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hello Life | Company Website",
  description: "Indonesia’s leading digital psychology platform",
  keywords: [
    "Hello Life",
    "Company Website",
    "Web Developer",
    "Frontend Developer",
    "Next.js Portfolio",
    "Tailwind CSS",
    "React Developer",
    "Indonesia Web Developer"
  ],
  authors: [{ name: "Imelia", url: "https://company-cc.vercel.app" }],
  creator: "Imelia",
  publisher: "Imelia",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  openGraph: {
    title: "Hello Life",
    description: "Indonesia’s leading digital psychology platform",
    url: "https://company-cc.vercel.app",
    siteName: "Hello Life Website",
    images: [
      {
        url: "https://company-cc.vercel.app/HelloLife-hero.png", 
        width: 1200,
        height: 630,
        alt: "Hello Life Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hello Life",
    description: "Indonesia’s leading digital psychology platform",
    images: "https://company-cc.vercel.app/HelloLife-hero.png",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   const session = await auth()
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout session={session}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
