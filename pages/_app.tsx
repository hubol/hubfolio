import '../styles/normalize.css'
import React from "react";
import {HubolHeader} from "../components/hubolHeader";
import Head from "next/head";

export default function MyApp({Component, pageProps}) {
    return <>
        <Head>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <header>
            <HubolHeader/>
        </header>
        <Component {...pageProps} />
        <style jsx global>{`
* {
  padding: 0;
  margin: 0;
}

html {
  font-family: sans-serif;

  background-color: #F0F080;
  color: #B04030;
}

body {
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
}`}</style>
    </>;
}