import {Game} from "../cms/getGamesCatalog";
import React from "react";

export function PlayOptions({ game }: { game: Game })
{
    return <>
        { game.playBrowserUrl && <PlayButton href={game.playBrowserUrl} flavor={"browser"} /> }
        { game.playWindowsUrl && <PlayButton href={game.playWindowsUrl} flavor={"windows"} /> }
    </>
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
  background-color: orangered;
  text-align: center;
  padding: .1em 0;
  width: 50%;
  min-width: 300px;
  margin: 0.5em auto;
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