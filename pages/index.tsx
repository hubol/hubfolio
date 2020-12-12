import * as React from "react";
import {SeoHead} from "../components/SeoHead";
import {PlatformLinks} from "../components/PlatformLinks";
import {BioArticle} from "../components/BioArticle";

export default function Home() {
    return (
        <>
            <SeoHead
                title={"Hubolhubolhubol"}
                description={"Video games, music, and more by Hubol Persson-Gordon."}
                imageUrl={""} />
            <header>
                <h1>Hubolhubolhubol</h1>
            </header>
            <main>
                <article>
                    <PlatformLinks />
                </article>
                <BioArticle />
            </main>
            <style jsx>{`
h1 {
  font-size: 12vw;
  text-align: center;
  margin: 0;
}`}</style>
        </>
    )
}