/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getClientConfig } from "./config/client";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat Liu",
  description: "Alex Liu's Chat Bot. A mirror site of ChatGPT.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
  appleWebApp: {
    title: "Alex Liu's Chat Bot",
    statusBarStyle: "default",
  },
 };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ogType = "website";
  const ogTitle = "Chat Liu";
  const ogDescription = "Alex Liu's Chat Bot. A mirror site of ChatGPT.";
  const ogImage = "https://cdn.jsdelivr.net/gh/AlexLiu2022/resources/img/chat_logo.png";
  const appleTouchIcon = "/apple-touch-icon.png";
  
  return (
    <html lang="en">
      <head>
        <meta name="config" content={JSON.stringify(getClientConfig())} />
        <meta property="og:type" content={ogType} /> {/* 添加自定义的<meta>标签 */}
        <meta property="og:title" content={ogTitle} /> {/* 添加自定义的<meta>标签 */}
        <meta property="og:description" content={ogDescription} /> {/* 添加自定义的<meta>标签 */}
        <meta property="og:image" content={ogImage} /> {/* 添加自定义的<meta>标签 */}
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} /> {/* 添加自定义的<link>标签 */}
        <link rel="manifest" href="/manifest.json"></link>
        <script src="/serviceWorkerRegister.js" defer></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
