import type { AppProps } from "next/app";
import ResetDefaultStyles from "styles/global/reset";
import "styles/fonts/fonts.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ResetDefaultStyles />
      <Component {...pageProps} />
    </>
  );
}
