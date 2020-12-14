import {wait} from "pissant";

export async function waitForMediaToLoad(media: HTMLMediaElement)
{
    if (media.readyState === 4)
        return;
    media.preload = "";
    media.load();
    await wait(() => media.readyState === 4);
}