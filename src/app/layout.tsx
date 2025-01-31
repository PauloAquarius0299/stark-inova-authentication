import type { Metadata } from "next";
import { DM_Sans} from "next/font/google";
import {twMerge} from "tailwind-merge";
import "./globals.css"

const dmSans = DM_Sans({subsets: ['latin']});

export const metadata: Metadata = {
  title: {
    template: "%s | Stark Inova",
    default: "Stark Inova"
  },
  description: "The authentication lading page stark inova",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative" suppressHydrationWarning>
      <body
        className={twMerge(dmSans.className, "antialiased bg-[#eaeefe")}
      >   
          {children}
      </body>
    </html>
  );
}
