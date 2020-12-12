import {PlatformLinks} from "./PlatformLinks";
import * as React from "react";

export function TopArticle()
{
    return <article>
        <PlatformLinks />
    <style jsx>{`
article {
  min-height: calc(100vh - 23vmin - 64px);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
}`}</style>
    </article>
}