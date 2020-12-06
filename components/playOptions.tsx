import {Game} from "../cms/getGamesCatalog";
import React from "react";

export function PlayOptions({ game }: { game: Game })
{
    if (!game.playWindowsUrl && !game.playBrowserUrl)
        return <></>
    return <section>
        { game.playBrowserUrl && <PlayButton href={game.playBrowserUrl} flavor={"browser"} /> }
        { game.playWindowsUrl && <PlayButton href={game.playWindowsUrl} flavor={"windows"} /> }
        <style jsx>{`
section {
  width: 300px;
  display: inline-block;
}
`}</style>
    </section>
}

const flavors = {
    windows: { text: "Download Windows .exe" },
    browser: { text: "Play in browser" },
};

function PlayButton({ href, flavor }: { href: string, flavor: keyof typeof flavors})
{
    return <a href={href}>
        { flavors[flavor].text }
    <style jsx>{`
a {
  font-size: 133%;
  font-weight: bold;
  text-decoration: none;
  display: block;
  color: white;
  width: 100%;
  background-color: orangered;
  text-align: center;
  padding: .1em .3em;
  margin: 0.5em 0;
  clear: both;
}

a:hover {
  filter: brightness(1.4) saturate(1.2);
}

a:active {
  filter: brightness(.9) saturate(1.2);
}`}</style>
    </a>
}