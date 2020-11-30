import Head from 'next/head'
import * as React from "react";
import {HubolHeader} from "../components/hubolHeader";
import {Game, getGamesCatalog} from "../cms/getGamesCatalog";
import {GameDetails} from "../components/gameDetails";

interface HomeProps {
    catalog: Game[]
}

export default function Home({catalog}: HomeProps) {
    return (
        <>
            <Head>
                <title>Hubolhubolhubol</title>
                <meta name="description" content="Video games, music, and more by Hubol Persson-Gordon."/>
            </Head>
            <HubolHeader catalog={catalog}/>
            <main>
                <GameDetails game={catalog[0]}/>
            </main>
        </>
    )
}

export async function getStaticProps() {
    return {props: {catalog: await getGamesCatalog()}};
}
