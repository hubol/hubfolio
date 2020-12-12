import * as React from "react";
import {SeoHead} from "../components/SeoHead";
import {BioArticle} from "../components/BioArticle";
import {TopArticle} from "../components/TopArticle";

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
                <TopArticle />
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