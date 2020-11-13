import Head from 'next/head'
import styles from '../styles/Home.module.css'
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
            <ul className={styles.externalLinks}>
                <li>itch.io</li>
                <li>Bandcamp</li>
                <li>YouTube</li>
                <li>Gumm</li>
                <li>Twitter</li>
            </ul>
            <ul className={styles.portfolioItems}>
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
    </>
    )
}
