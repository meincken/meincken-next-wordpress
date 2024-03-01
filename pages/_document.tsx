import { Html, Head, Main, NextScript } from "next/document";
import { Header, Footer } from "@/components/Elements/"

export default function Document() {
  return (
    <Html lang="en" className="relative min-h-full dark hs-dark-mode-active">
      <Head />
      <body>
        <Header />
        <Main />
        <Footer />
      </body>
      <NextScript />
    </Html>
  );
}
