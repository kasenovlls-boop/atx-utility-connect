import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ATX Utility Connect | Austin Home Utility Setup Service",
  description: "Professional utility and household account setup assistance for new homeowners in Austin, Texas. Let us handle the paperwork while you settle into your new home.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="JIhptyIPV2ICyR98c5vvBV0QS1oUO1AUuyxcn_LuqtQ" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
