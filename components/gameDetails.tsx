import React from "react";
import {Game} from "../cms/getGamesCatalog";

export function GameDetails({ game }: {game: Game}) {
    return <>
        <section dangerouslySetInnerHTML={{__html: game.detailsHtml}}/>
        <style jsx>{`
:global(p) {
    color: green;
}`}</style>
    </>
}