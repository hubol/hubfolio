import {PlaySoundButton} from "./PlaySoundButton";
import * as React from "react";
import {wait} from "pissant";
import {useState} from "react";

export function HubolHeader()
{
    const [progress, setProgress] = useState(0);
    function doAnimatePronunciation(audio: HTMLAudioElement)
    {
        setTimeout(async () => await animatePronunciation(audio, setProgress));
    }

    return <header>
        <h1>Hubol<PlaySoundButton text={"Pronounce"} url={"static/hubol-pronunciation.mp3"} flavor={"light"} onPlay={doAnimatePronunciation}/></h1>
        { progress > 0 && <PronunciationGuide progress={progress} /> }
        <style jsx>{`
h1 {
  font-size: 23vmin;
  text-align: center;
  margin: 0;
}`}</style>
    </header>
}

async function animatePronunciation(audio: HTMLAudioElement, setProgress: (n: number) => void)
{
    await wait(() => audio.currentTime > 0);
    setProgress(1);
    await wait(() => audio.currentTime >= .3);
    setProgress(2);
    await wait(() => audio.currentTime >= .55);
    setProgress(0);
}

function PronunciationGuide({ progress })
{
    return <div>
        <p>
        [<span className={progress === 1 ? "highlight" : ""}><strong>huhb</strong></span>-<span className={progress === 2 ? "highlight" : ""}><i>uh</i>l</span>]
        </p>
        <style jsx>{`
div {
  position: fixed;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px);
  top: 0;
  left: 0;
  z-index: 100;
}

p {
  display: inline-block;
  position: relative;
  font-size: 18vw;
  white-space: nowrap;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: yellow;
  color: red;
}

.highlight {
  color: blue;
}
`}</style>
    </div>
}