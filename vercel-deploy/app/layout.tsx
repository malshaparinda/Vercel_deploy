import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const shareMonoTech = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Design by Malsha",
  description: "All rights reserved @DESIGN BY MALSHA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${shareMonoTech.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
