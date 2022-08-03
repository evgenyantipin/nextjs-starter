import React from "react";
import "../src/styles.global.scss";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
