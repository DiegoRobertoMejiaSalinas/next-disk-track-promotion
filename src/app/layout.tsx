import Navbar from "@/components/Navbar";
import Providers from "@/providers/Providers";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JOJI | Unofficial Website",
  description:
    "This isn't an official Joji website, this is a personal project made by Diego Mejia, a big Joji fan.",
  alternates: {
    canonical: "https://next-track-promotion.hedgehog-testing.xyz/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}

          <Toaster position="bottom-right" />

          <Navbar />
        </Providers>

        {/* Allow for more height on mobile devices */}
        <div className="h-40 md:hidden"></div>
      </body>
    </html>
  );
}
