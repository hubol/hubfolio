import Head from 'next/head'
import * as React from "react";
import {HubolHeader} from "../components/hubolHeader";
import {Game, getGamesCatalog} from "../cms/getGamesCatalog";
import {GameDetails} from "../components/gameDetails";
import {HubolDate, toDate} from "../utils/hubolDate";

interface GamePageProps {
    game: Game,
    catalog: Game[]
}

export default function GamePage({ catalog, game }: GamePageProps) {
    return (
        <>
            <GameHead game={game} />
            <HubolHeader catalog={catalog} selectedGameId={game.id}/>
            <GameCard game={game} />
        </>
    )
}

export function GameHead({ game }: { game: Game })
{
    const title = `${game.title} by Hubol${game.collaborators ? ` and ${game.collaborators}`: ""}`

    return <Head>
        <title>{title}</title>
        <meta name="og:title" content={title}/>
        <meta name="description" content={game.description}/>
        <meta name="og:description" content={game.description}/>
    </Head>
}

const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

function ReleaseDate({ date }: { date: HubolDate })
{
    const realDate = toDate(date);
    return <time dateTime={date.dateString}>{realDate.getDate()} {months[realDate.getMonth()]} {realDate.getFullYear()}</time>
}

function GameCard({ game }: { game: Game })
{
    return <main>
        <header>
            <h2>{game.title}</h2>
            { game.collaborators && <address>w/ {game.collaborators}</address> }
        </header>
        <ReleaseDate date={game.releaseDate}/>
        <GameDetails game={game}/>
        <style jsx>{`
main {
  background-color: white;
  padding: 1em;
}

header {
  float: left;
}

:global(time) {
  float: right;
}

:global(section) {
  clear: both;
}`}</style>
    </main>
}

export async function getStaticProps({ params }) {
    const catalog = await getGamesCatalog();
    return {props: {
        catalog: catalog.map(x => ({ id: x.id, title: x.title })),
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