import '../styles/normalize.css';
import React, {useEffect} from "react";
import {useDrummerPlayer} from "../hooks/useDrummerPlayer";

export default function MyApp({Component, pageProps}) {
    useEffect(() => {
        // https://css-tricks.com/snippets/css/remove-gray-highlight-when-tapping-links-in-mobile-safari/
        document.addEventListener("touchstart", function(){}, true);
    }, []);

    useDrummerPlayer();

    return <>
        <Component {...pageProps} />
        <style jsx global>{`
* {
  padding: 0;
  margin: 0;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
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