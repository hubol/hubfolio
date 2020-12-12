import {PlatformLinks} from "./PlatformLinks";
import * as React from "react";

export function TopArticle()
{
    return <article>
        <PlatformLinks />
    <style jsx>{`
article {
  min-height: calc(100vh - 12vw);
}`}</style>
    </article>
}