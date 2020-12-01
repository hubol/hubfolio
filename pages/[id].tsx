import Head from 'next/head'
import * as React from "react";
import {HubolHeader} from "../components/hubolHeader";
import {Game, getGamesCatalog} from "../cms/getGamesCatalog";
import {GameDetails} from "../components/gameDetails";

interface ExplodedCatalogProps {
    game: Game,
    catalog: Game[]
}

export default function ExplodedCatalog({ catalog, game }: ExplodedCatalogProps) {
    return (
        <>
            <Head>
                <title>{game.title}</title>
                <meta name="description" content="Video games, music, and more by Hubol Persson-Gordon."/>
            </Head>
            <HubolHeader catalog={catalog} selectedGameId={game.id}/>
            <main>
                <GameDetails game={game}/>
            </main>
            <style jsx>{`
main {
  background-color: white;
}`}</style>
        </>
    )
}

export async function getStaticProps({ params }) {
    const catalog = await getGamesCatalog();
    return {props: {
        catalog,
        game: catalog.find(x => x.id === params.id)
    }};
}

export async function getStaticPaths() {
    const paths = (await getGamesCatalog()).map(x => ({ params: { id: x.id } }));
    return {
        paths,
        fallback: false
    }
}