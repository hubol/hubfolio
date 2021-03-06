import React, {useRef} from "react";
import {isPlaying} from "../utils/isPlaying";
import {waitForMediaToLoad} from "../utils/waitForMediaToLoad";

const flavors = {
    light: flavor("black", "white"),
    dark: flavor("white", "#B04030")
}

export function PlaySoundButton({ text, url, flavor, onPlay } : { text, url, flavor: keyof typeof flavors, onPlay?: (audio: HTMLAudioElement) => void })
{
    const { backgroundColor, color } = flavors[flavor];

    const audioRef = useRef<HTMLAudioElement>();

    async function togglePlayback()
    {
        const audio = audioRef.current;
        if (!audio)
            return;

        if (isPlaying(audio))
            audio.pause();
        else
        {
            audio.currentTime = 0;
            await waitForMediaToLoad(audio);
            if (onPlay)
                onPlay(audio);
            await audio.play();
        }
    }

    return <button onClick={togglePlayback}>
        <audio src={url} ref={audioRef}/>
        <img src={"static/speaker.png"} alt={"Speaker icon"} />
        <cite>{text}</cite>
        <style jsx>{`
button {
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 2.5vmin;
  outline: none;
}

img {
  position: relative;
  image-rendering: pixelated;
  width: 2em;
  z-index: 2;
}

button:hover img {
  transform: translateY(-0.1em) rotate(-1deg);
}

button:active img {
  transform: translateY(0.1em) rotate(3deg);
}

cite {
  position: absolute;
  font-style: normal;
  font-weight: 500;
  display: inline-block;
  background-color: ${backgroundColor};
  color: ${color};
  border-radius: 0 999px 999px 0;
  width: auto;
  max-width: 0;
  padding: .2em 0;
  transition: max-width 0.5s, padding 0.5s;
  overflow: hidden;
  transform: translate(-1em, .2875em);
  white-space: nowrap;
  z-index: 1;
}

button:hover cite {
  padding: .2em .5em .2em 1.2em;
  max-width: 300px;
}`}</style>
    </button>
}

function flavor(color, backgroundColor)
{
    return { color, backgroundColor };
}