import InfoMessage from "@/components/InfoMessage";
import Navbar from "@/components/Navbar";
import Providers from "@/providers/Providers";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JOJI | Unofficial Website",
  description:
    "This isn't an official Joji website, this is a personal project made by Diego Mejia, a big Joji fan.",
  applicationName: "JOJI | Unofficial Website",
  authors: {
    name: "Diego Mejia",
    url: "https://www.linkedin.com/in/diego-roberto-mejia-salinas-73a931198/",
  },
  creator: "Diego Mejia",
  keywords: "JOJI music Diego Mejia Tracks The Smithereens",
  twitter: {
    title: "JOJI | Unofficial Website",
    description:
      "This isn't an official Joji website, this is a personal project made by Diego Mejia, a big Joji fan.",
    site: "https://joji.diegomejia.dev/",
    card: "summary_large_image",
  },

  openGraph: {
    type: "music.album",
    countryName: "USA",
    siteName: "JOJI | Unofficial Website",
    title: "JOJI | Unofficial Website",
    url: "https://joji.diegomejia.dev/",
    description:
      "This isn't an official Joji website, this is a personal project made by Diego Mejia, a big Joji fan.",
    musicians: "JOJI",
    songs: [
      "Glimpse Of Us",
      "Feeling Like The End",
      "Die For You",
      "Before the Day is Over",
      "Dissolve",
      "Night Rider",
      "BlahBlahBlah Demo",
      "Yukon (Interlude)",
      "1AM Freestyle",
    ],
  },

  alternates: {
    canonical: "https://joji.diegomejia.dev/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WS9FF996');
        `}
      </Script>

      <body className={inter.className}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-3H66C7Z3FH" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-3H66C7Z3FH');
        `}
        </Script>

        <Providers>
          <Toaster position="bottom-right" />

          <Navbar />
          <div className="-mt-20">{children}</div>
          <InfoMessage className="fixed z-[70] bottom-10 left-6 sm:left-8 lg:bottom-16 xl:bottom-10" />
        </Providers>

        {/* Allow for more height on mobile devices */}
        <div className="h-40 md:hidden"></div>

        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WS9FF996" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
      </body>
    </html>
  );
}
