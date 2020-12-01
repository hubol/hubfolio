import * as React from "react";
import {Game} from "../cms/getGamesCatalog";
import Link from "next/link";

interface HubolHeaderProps {
    catalog: Game[];
    selectedGameId?: string;
}

function GameCatalogItem({ game, isSelected }: { game: Game, isSelected: boolean })
{
    return (
        <>
        <Link href={`/${game.id}`}>
            <a><img src={`/icons/${game.id}.png`} width="64" alt={`${game.title} icon`} /></a>
        </Link>
        <style jsx>{`
img {
  ${isSelected ? `box-shadow: 0 .2em .3em black;` : ``}
}`}</style>
        </>
    )
}

function GameCatalog({ games, selectedGameId }: { games: Game[], selectedGameId?: string })
{
    return (
        <>
            <ul id="portfolioItems">
                {games.map((x) => <li key={x.id}>
                    <GameCatalogItem game={x} isSelected={x.id === selectedGameId}/>
                </li>)}
            </ul>
            <style jsx>{`
ul {
    margin: 1em 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, 64px);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    justify-content: center;
}
            `}</style>
        </>
    )
}

export function HubolHeader({catalog, selectedGameId}: HubolHeaderProps) {
    return (
        <header>
            <h1>Hubolhubolhubol</h1>
            <nav>
                <ul id="externalLinks">
                    <li>itch.io</li>
                    <li>Bandcamp</li>
                    <li>YouTube</li>
                    <li>Gumm</li>
                    <li>Twitter</li>
                </ul>
            </nav>
            <nav>
                <GameCatalog games={catalog} selectedGameId={selectedGameId} />
            </nav>
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
}`}</style>
        </header>
    )
}