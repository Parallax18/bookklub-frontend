import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import ProviderRoot from "./providers";

export const metadata: Metadata = {
  title: "Bookklub",
  description: "Bookklub app",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [{ name: "Parallax18" }],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover maximum-scale=1",
  icons: [
    { rel: "apple-touch-icon", url: "icons/book.png" },
    { rel: "icon", url: "icons/book.png" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <body
        style={{
          backgroundImage: 'url("/Template.png")',
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "#121212",
          backgroundAttachment: "fixed",
        }}
      >
        <ProviderRoot>{children}</ProviderRoot>
      </body>
    </html>
  );
}
