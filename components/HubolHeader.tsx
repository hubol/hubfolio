import {PlaySoundButton} from "./PlaySoundButton";
import * as React from "react";

export function HubolHeader()
{
    return <header>
        <h1>Hubol<PlaySoundButton text={"Pronounce"} url={"hubol-pronunciation.mp3"} flavor={"light"}/></h1>
        <style jsx>{`
h1 {
  font-size: 23vmin;
  text-align: center;
  margin: 0;
}`}</style>
    </header>
}