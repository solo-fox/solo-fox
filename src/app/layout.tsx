import Navbar from "@/components/Navbar"
import "./globals.css";
import 'react-loading-skeleton/dist/skeleton.css'

export const metadata = {
  title: "Abdelrahman Shaheen",
  description: "Portfolio - Abdelrahman Shaheen",
  author: "Abdelrahman Shaheen"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="portfolio, abdelrahman, shaheen, solofox" />
        <meta property="og:title" content="Abdelrahman Shaheen" />
        <meta property="og:description" content="Portfolio - Abdelrahman Shaheen" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://solofox.vercel.app" />
        <meta property="og:image" content="/socialmedia.jpg" />
        <meta property="og:site_name" content="Portfolio - Abdelrahman Shaheen" />

        <link rel="icon" href="/logo.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="icon" type="image/png" href="/logo.png" />

        <meta name="robots" content="index, follow" />
      </head>
      <body className={`bg-[black] text-white`}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
