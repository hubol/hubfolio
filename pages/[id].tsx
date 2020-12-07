import Head from 'next/head'
import * as React from "react";
import {HubolHeader} from "../components/hubolHeader";
import {Game, getGamesCatalog} from "../cms/getGamesCatalog";
import {GameDetails} from "../components/gameDetails";
import {HubolDate} from "../utils/hubolDate";
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
            <main>
                <GameCard game={game} />
            </main>
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
    return <time dateTime={`${date.year}-${date.month}-${date.date}`}>{date.date} {months[date.month]} {date.year}</time>
}

function GameCard({ game }: { game: Game })
{
    return <article>
        <header>
            <hgroup>
                <h2>{game.title}</h2>
                { game.collaborators && <address>w/ {game.collaborators}</address> }
            </hgroup>
            <ReleaseDate date={game.releaseDate}/>
        </header>
        <figure>
            <GameScreenshots game={game} />
        </figure>
        <GameDetails game={game}/>
        <style jsx>{`
article {
  background-color: white;
  padding: 1em;
  margin-bottom: 1em;
  overflow: hidden;
}

hgroup {
  float: left;
}

:global(time) {
  float: right;
}

header::after {
  display: block;
  content: "";
  clear: both;
  margin-bottom: .67em;
}

figure {
  clear: both;
  float: left;
  margin: 0 1em 0.67em 0;
  width: 300px;
}

article > :global(*):last-child {
  margin-bottom: 0;
}

@media only screen and (max-width: 700px) {
  figure {
      float: none;
      max-width: 100%;
      margin: 0 auto;
    }
}
`}</style>
    </article>
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