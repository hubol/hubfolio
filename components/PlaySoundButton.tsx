import React from "react";

export function PlaySoundButton({ text, url })
{
    return <button>
        <img src={"speaker.png"} alt={"Speaker icon"} />
        <p>{text}</p>
        <style jsx>{`
button {
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 2.5vmin;
  outline: none;
}

img {
  image-rendering: pixelated;
  width: 2em;
}

p {
  position: absolute;
  font-weight: 500;
  display: inline-block;
  background-color: white;
  color: black;
  border-radius: 0 999px 999px 0;
  width: auto;
  max-width: 0;
  padding: .2em 0;
  transition: max-width 0.5s, padding 0.5s;
  overflow: hidden;
  transform: translate(-1em, .2875em);
  z-index: -1;
}

button:hover p {
  padding: .2em .5em .2em 1.2em;
  max-width: 300px;
}`}</style>
    </button>
}