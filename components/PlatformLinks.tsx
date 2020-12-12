import {PlatformLink} from "./PlatformLink";
import * as React from "react";

export function PlatformLinks()
{
    return <nav>
        <PlatformLink flavor={"itch"} />
        <PlatformLink flavor={"bandcamp"} />
        <PlatformLink flavor={"youtube"} />
        <style jsx>{`
nav {
  width: 50vw;
  margin: 0 auto;
}

nav :global(a) + :global(a) {
  margin-top: .4em;
}

@media only screen and (min-width: 800px) {
  nav {
    font-size: 2vw;
    width: 37.5vw;
    margin-left: 50vw;
  }
}`}</style>
    </nav>
}