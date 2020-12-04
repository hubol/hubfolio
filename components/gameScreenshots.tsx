import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import React, {useState} from "react";
import {Game} from "../cms/getGamesCatalog";
import {useTimeoutFn} from "react-use";
import {wait} from "pissant";

function LazyImage({ src, alt })
{
    const [loaded, setLoaded] = useState(false);

    useTimeoutFn(async () => {
        const image = new Image();
        image.src = src;
        await wait(() => image.complete);
        setLoaded(true);
    });

    return <picture>
        <img src={src} alt={alt} />
        <style jsx>{`
img {
  display: block;
  width: 100%;
  opacity: ${loaded ? "100%" : "0"};
}

picture {
  background-color: #B04030;
}`}</style>
    </picture>
}

function Screenshot({ src, alt })
{
    return <Zoom zoomMargin={30}>
        <LazyImage src={src} alt={alt} />
        <style jsx>{`
:global([data-rmiz-modal-content]) :global(img) {
  image-rendering: pixelated;
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
        { game.screenshots.length > 1 && <figure>
            { game.screenshots.slice(1)
                .map((x, i) => <Screenshot key={x} src={x} alt={`${game.title} Screenshot ${i + 2}`}/>) }
            <style jsx>{`
figure {
  display: grid;
  grid-template-columns: repeat(auto-fill, 32%);
  grid-column-gap: 2%;
  grid-row-gap: 5%;
}`}</style>
        </figure>
        }
    </>
}