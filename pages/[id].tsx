import Head from 'next/head'
import * as React from "react";
import {HubolHeader} from "../components/hubolHeader";
import {Game, getGamesCatalog} from "../cms/getGamesCatalog";
import {GameDetails} from "../components/gameDetails";
import {HubolDate, toDate} from "../utils/hubolDate";
import {GameScreenshots} from "../components/gameScreenshots";

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
        <meta name="description" content={game.description}/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={game.description}/>
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
        <section>
            <header>
                <h2>{game.title}</h2>
                { game.collaborators && <address>w/ {game.collaborators}</address> }
            </header>
            <ReleaseDate date={game.releaseDate}/>
        </section>
        <section>
            <GameScreenshots game={game} />
        </section>
        <GameDetails game={game}/>
        <style jsx>{`
main {
  background-color: white;
  padding: 1em;
  margin-bottom: 1em;
}

header {
  float: left;
}

:global(time) {
  float: right;
}

section:first-child::after {
  display: block;
  content: "";
  clear: both;
  margin-bottom: .67em;
}

section:nth-child(2) {
  clear: both;
  float: left;
  margin: 0 1em 0.67em 0;
  width: 300px;
}

@media only screen and (max-width: 700px) {
  section:nth-child(2) {
      float: none;
      width: 300px;
      max-width: 100%;
      margin: 0 auto;
    }
}
`}</style>
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