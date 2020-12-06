import React from "react";
import {Game} from "../cms/getGamesCatalog";
import {PlayOptions} from "./playOptions";

export function GameDetails({ game }: {game: Game}) {
    return <>
        <section className={"mainDetails"} dangerouslySetInnerHTML={{__html: game.detailsHtml}}/>
        <PlayOptions game={game} />
        { game.afterPlayOptionsHtml && <section dangerouslySetInnerHTML={{__html: game.afterPlayOptionsHtml}}/> }
        <style jsx>{`
.mainDetails {
    padding-top: 0.5em;
}

section {
  text-align: center;
}

section > :global(*):last-child {
  margin-bottom: 0;
}

:global(iframe) {
  display: inline-block;
}

:global(p) {
    color: green;
    width: 100%;
}

:global(blockquote) {
  font-style: italic;
}

:global(blockquote), :global(p) {
  margin-bottom: 0.5em;
  text-align: left;
}

:global(iframe) {
  margin: 0.5em 0;
}

:global(iframe[src*="bandcamp"]) {
  max-width: 700px;
}`}</style>
    </>
}