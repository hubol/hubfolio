import Document, { Head, Main, NextScript, Html } from 'next/document'
import React from "react";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/favicon.ico"/>
                    <meta name="twitter:creator" content="@hubol" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}