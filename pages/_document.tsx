import Document, { Head, Main, NextScript, Html } from 'next/document'
import React from "react";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/favicon.ico"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
                    <meta name="twitter:creator" content="@hubol" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:image" content="https://github.com/hubol/hubfolio/raw/main/twitter-card-image.png" />
                    <meta name="og:image" content="https://github.com/hubol/hubfolio/raw/main/opengraph-image.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}