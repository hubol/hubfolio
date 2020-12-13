import * as React from "react";
import {SeoHead} from "../components/SeoHead";
import {BioArticle} from "../components/BioArticle";
import {TopArticle} from "../components/TopArticle";
import {HubolHeader} from "../components/HubolHeader";
import {HubolFooter} from "../components/HubolFooter";

export default function Home() {
    return (
        <>
            <SeoHead
                title={"Hubolhubolhubol"}
                description={"Video games, music, and more by Hubol Persson-Gordon."}
                imageUrl={""} />
            <HubolHeader />
            <main>
                <TopArticle />
                <BioArticle />
            </main>
            <HubolFooter />
        </>
    )
}