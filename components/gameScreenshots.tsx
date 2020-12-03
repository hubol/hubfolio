import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import React from "react";
import {Game} from "../cms/getGamesCatalog";

function Screenshot({ src, alt })
{
    return <Zoom zoomMargin={30}>
        <img src={src} alt={alt} />
        <style jsx>{`
img {
  width: 100%;
}

:global(button) {
  outline: none;
}`}</style>
    </Zoom>;
}

export function GameScreenshots({ game } : { game: Game })
{
    return <>
        { game.screenshots.length > 0 &&  <Screenshot src={game.screenshots[0]} alt={`${game.title} Screenshot 1`} />}
        { game.screenshots.length > 1 && <section>
            { game.screenshots.slice(1)
                .map((x, i) => <Screenshot key={x} src={x} alt={`${game.title} Screenshot ${i + 2}`}/>) }
            <style jsx>{`
section {
  display: grid;
  grid-template-columns: repeat(auto-fill, 32%);
  grid-column-gap: 2%;
  grid-row-gap: 5%;
}`}</style>
        </section>
        }
    </>
}