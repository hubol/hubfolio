import Head from 'next/head'
import * as React from "react";

export default function Home() {
    return (
    <>
        <Head>
            <title>Hubolhubolhubol</title>
            <meta name="description" content="Video games, music, and more by Hubol Persson-Gordon." />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <h1>Hubolhubolhubol</h1>
            <ul id="externalLinks">
                <li>itch.io</li>
                <li>Bandcamp</li>
                <li>YouTube</li>
                <li>Gumm</li>
                <li>Twitter</li>
            </ul>
            <ul id="portfolioItems">
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
            </ul>
        </main>
        <style jsx>{`
#externalLinks {
    list-style: none;
}

#externalLinks li {
    display: inline-block;
    background-color: #B04030;
    color: #F0F080;
    font-weight: 500;
    padding: .1em .2em;
}

#externalLinks li + li {
    margin-left: 1em;
}

#portfolioItems {
    margin: 1em 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, 64px);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    justify-content: center;
}

#portfolioItems li {
    width: 64px;
    height: 64px;
    background-color: #B04030;
}`}</style>
    </>
    )
}
