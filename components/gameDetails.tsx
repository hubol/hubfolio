import React from "react";
import {Game} from "../cms/getGamesCatalog";

export function GameDetails({ game }: {game: Game}) {
    return <>
        <section dangerouslySetInnerHTML={{__html: game.detailsHtml}}/>
        <style jsx>{`
section {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0.5em;
}

:global(p) {
    color: green;
    width: 100%;
}

:global(blockquote) {
  width: 90%;
  font-style: italic;
}

:global(blockquote), :global(p) {
  margin-bottom: 0.5em;
}

:global(iframe) {
  margin: 0.5em 0;
}

:global(iframe[src*="bandcamp"]) {
  max-width: 700px;
}`}</style>
    </>
}