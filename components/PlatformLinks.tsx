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
  max-width: 300px;
  margin: 0 auto;
}

nav :global(a) + :global(a) {
  margin-top: .4em;
}`}</style>
    </nav>
}