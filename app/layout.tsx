import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import OnlineChat from "@/components/OlineChat";
import "./globals.css";

import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eka's Crafts",
  description: "Find music based on your mood.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <OnlineChat />
        </body>
      </html>
    </ClerkProvider>
  );
}
