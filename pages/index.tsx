import * as React from "react";
import {SeoHead} from "../components/SeoHead";
import {BioArticle} from "../components/BioArticle";
import {TopArticle} from "../components/TopArticle";
import {PlaySoundButton} from "../components/PlaySoundButton";

export default function Home() {
    return (
        <>
            <SeoHead
                title={"Hubolhubolhubol"}
                description={"Video games, music, and more by Hubol Persson-Gordon."}
                imageUrl={""} />
            <header>
                <h1>Hubolhubolhubol<PlaySoundButton text={"Pronounce"} url={""}/></h1>
            </header>
            <main>
                <TopArticle />
                <BioArticle />
            </main>
            <style jsx>{`
h1 {
  font-size: 8vw;
  text-align: center;
  margin: 0;
}`}</style>
        </>
    )
}