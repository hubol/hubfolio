import * as React from "react";
import {SeoHead} from "../components/SeoHead";

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
                    <h2>You wanna know the real me?</h2>
                </article>
            </main>
            <style jsx>{`
h1 {
  font-size: 13vw;
  margin: 0;
}`}</style>
        </>
    )
}