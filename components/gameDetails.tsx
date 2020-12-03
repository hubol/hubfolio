import React from "react";
import {Game} from "../cms/getGamesCatalog";

export function GameDetails({ game }: {game: Game}) {
    return <>
        <section dangerouslySetInnerHTML={{__html: game.detailsHtml}}/>
        <style jsx>{`
section {
    padding-top: 0.5em;
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