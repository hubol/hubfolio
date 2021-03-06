import React from "react";

const flavors = {
    youtube: flavor("Videos", "https://www.youtube.com/c/HubolPerssonGordon/videos", "#ff0000"),
    itch: flavor("Games", "https://hubol.itch.io/", "#FA5C5C"),
    bandcamp: flavor("Music", "https://hubol.bandcamp.com/", "#1DA0C3"),
};

export function PlatformLink({ flavor }: { flavor: keyof typeof flavors})
{
    const { backgroundColor, text, color, url } = flavors[flavor];
    return <a href={url} target={"_blank"}>{text}
        <style jsx>{`
a {
  font-size: 200%;
  font-weight: 500;
  background-color: ${backgroundColor};
  color: ${color};
  display: block;
  width: 100%;
  text-align: center;
  text-decoration: none;
  padding: .2em 0;
  border-radius: 999px;
  transition: filter .2s, box-shadow .2s, transform .2s;
  cursor: pointer;
  user-select: none;
}

a:hover {
  filter: saturate(0.8) brightness(1.2);
  box-shadow: .1em .1em .3em rgba(153,190,71,0.72);
  transform: translateY(-.1em);
}

a:active {
  filter: saturate(1.1) brightness(0.9);
  transform: translateY(.1em);
}`}</style>
    </a>
}

function flavor(text: string, url: string, backgroundColor: string, color: string = "#eaf1f1")
{
    return {
        text,
        url,
        backgroundColor,
        color
    };
}