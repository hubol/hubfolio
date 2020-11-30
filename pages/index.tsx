import Head from 'next/head'
import * as React from "react";
import {HubolHeader} from "../components/hubolHeader";
import {getGamesCatalog} from "../cms/getGamesCatalog";

export default function Home({ catalog }) {
    return (
    <>
        <Head>
            <title>Hubolhubolhubol</title>
            <meta name="description" content="Video games, music, and more by Hubol Persson-Gordon." />
        </Head>
        <header>
            <HubolHeader catalog={catalog}/>
        </header>
    </>
    )
}

export async function getStaticProps()
{
    return { props: { catalog: await getGamesCatalog() } };
}
