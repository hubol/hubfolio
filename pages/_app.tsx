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
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  background-color: #F0F080;
  color: #B04030;
}

h1, h2 {
  font-weight: 700;
}

h3, h4, h5, strong {
  font-weight: 500;
}
`}</style>
    </>;
}