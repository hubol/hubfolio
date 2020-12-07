import '../styles/normalize.css';
import React from "react";

export default function MyApp({Component, pageProps}) {
    return <>
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
  /* https://stackoverflow.com/a/30293718 */
  padding-left: calc(100vw - 100%);
}

body {
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
}`}</style>
    </>;
}