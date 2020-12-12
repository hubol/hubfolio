import React from "react";

const flavors = {
    youtube: flavor("Videos", "https://www.youtube.com/c/HubolPerssonGordon", "#ff0000"),
    itch: flavor("Games", "https://hubol.itch.io/", "#FA5C5C"),
    bandcamp: flavor("Music", "https://hubol.bandcamp.com/", "#1DA0C3"),
};

export function PlatformLink({ flavor }: { flavor: keyof typeof flavors})
{
    const { backgroundColor, text, color, url } = flavors[flavor];
    return <a href={url}>{text}
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
}

a:hover, a:focus {
  filter: saturate(0.8) brightness(1.2);
}

a:active {
  filter: saturate(1.1) brightness(0.9);
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