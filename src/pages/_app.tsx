import React from "react";
import type { AppProps } from "next/app";
import GlobalStyled from "../styles/GlobalStyled";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-MKB6LXL" });
  }, []);

  return (
    <>
      <GlobalStyled />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
