import {PlatformLinks} from "./PlatformLinks";
import * as React from "react";

export function TopArticle()
{
    return <article>
        <img src={"drummer.svg"} alt={"The Drummer"} />
        <section>
            <PlatformLinks />
        </section>
    <style jsx>{`
section {
  min-height: calc(100vh - 23vmin - 64px);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
}

img {
  position: absolute;
  height: 80vh;
  max-width: 90vw;
  z-index: -4;
  left: 10vw;
  transform: translate(0, -24px);
  user-select: none;
}

@media only screen and (max-width: 440px) {
  img {
    transform: translate(0, -29.6vw);
  }
}

@media only screen and (max-width: 800px) {
  img {
    left: 5vw;
  }
  
  section > :global(nav) {
    margin-top: 50vh;
  }
}`}</style>
    </article>
}