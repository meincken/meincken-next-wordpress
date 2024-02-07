import { AppProps } from "next/app";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Component {...pageProps} />
    <SpeedInsights />
    </>
  );
}

export default MyApp;
