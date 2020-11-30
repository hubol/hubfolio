import * as React from "react";
import {Game} from "../cms/getGamesCatalog";
import Link from "next/link";

interface HubolHeaderProps
{
    catalog: Game[]
}

export function HubolHeader({ catalog }: HubolHeaderProps) {
    return (
        <header>
            <h1>Hubolhubolhubol</h1>
            <nav>
                <ul id="externalLinks">
                    <li>itch.io</li>
                    <li>Bandcamp</li>
                    <li>YouTube</li>
                    <li>Gumm</li>
                    <li>Twitter</li>
                </ul>
            </nav>
            <nav>
                <ul id="portfolioItems">
                    { catalog.map((x) => <li key={x.id}><Link href={`/${x.id}`}>fu</Link></li>) }
                </ul>
            </nav>
        <style jsx>{`
#externalLinks {
    list-style: none;
}

#externalLinks li {
    display: inline-block;
    background-color: #B04030;
    color: #F0F080;
    font-weight: 500;
    padding: .1em .2em;
}

#externalLinks li + li {
    margin-left: 1em;
}

#portfolioItems {
    margin: 1em 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, 64px);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    justify-content: center;
    color: white;
}

#portfolioItems li {
    width: 64px;
    height: 64px;
    background-color: #B04030;
}`}</style>
        </header>
    )
}