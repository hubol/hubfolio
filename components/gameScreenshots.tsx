import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import React from "react";

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

export function GameScreenshots()
{
    return <>
        <Screenshot src={"screenshots/super-bogus-world-2-1.png"} alt={"Sasdasd"} />
        <section>
            <Screenshot src={"screenshots/super-bogus-world-2-2.png"} alt={"Sasdasd"} />
            <Screenshot src={"screenshots/super-bogus-world-2-3.png"} alt={"Sasdasd"} />
            <Screenshot src={"screenshots/super-bogus-world-2-4.png"} alt={"Sasdasd"} />
            <style jsx>{`
section {
  display: grid;
  grid-template-columns: repeat(auto-fill, 32%);
  grid-column-gap: 2%;
  grid-row-gap: 5%;
}`}</style>
        </section>
    </>
}