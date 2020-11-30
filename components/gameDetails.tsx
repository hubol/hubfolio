import React from "react";
import {Game} from "../cms/getGamesCatalog";

export function GameDetails({ game }: {game: Game}) {
    return <>
        <section dangerouslySetInnerHTML={{__html: game.details}}/>
        <style jsx>{`
:global(p) {
    color: green;
}`}</style>
    </>
}