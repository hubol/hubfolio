import path from "path";
import {AsyncReturnType} from "../utils/asyncReturnType";
import fs from "fs";
import { JSDOM } from "jsdom";
import {hubolDate, toDate} from "../utils/hubolDate";

export async function getGamesCatalog()
{
    const gamesCatalogDirectory = path.join(process.cwd(), "catalog");
    const paths = fs.readdirSync(gamesCatalogDirectory).map(x => path.join(gamesCatalogDirectory, x));
    return (await Promise.all(paths.map(readGame))).sort((a, b) => toDate(b.releaseDate) as any - (toDate(a.releaseDate) as any));
}

export type Game = AsyncReturnType<typeof readGame>;

async function readGame(file: string)
{
    const id = path.basename(file).replace(/\.html$/, '');
    const text = await fs.promises.readFile(file, "utf8");
    const document = new JSDOM().window.document;
    const html = document.createElement("html");
    html.innerHTML = text;

    const metadata = getMetadata(html);

    return {
        id,
        title: metadata["title"] as string,
        collaborators: (metadata["collaborators"] ?? null) as string | null,
        description: metadata["description"] as string,
        releaseDate: hubolDate(metadata["release-date"]),
        detailsHtml: getBodyElement(html).innerHTML,
        screenshots: getScreenshots(id),
        playBrowserUrl: (metadata["play:browser"] ?? null) as string | null,
        playWindowsUrl: (metadata["play:win"] ?? null) as string | null
    }
}

function getMetadata(html: HTMLHtmlElement)
{
    const result = {};
    Array.from(html.getElementsByTagName("head"))
        .flatMap(x => Array.from(x.children))
        .forEach(x => {
            const tagName = x.tagName.toLowerCase();
            if (tagName === "meta")
            {
                const meta = x as HTMLMetaElement;
                result[meta.name] = meta.content;
            }
            else
                result[tagName] = x.textContent;
        });
    return result;
}

function getBodyElement(html: HTMLHtmlElement)
{
    return html.getElementsByTagName("body")[0];
}

function getScreenshots(gameId: string)
{
    const screenshotsDirectory = path.join(path.join(process.cwd(), "public"), "screenshots");
    return fs.readdirSync(screenshotsDirectory)
        .filter(x => {
            const fileNameNoExtension = x.replace(/\..*$/, "");
            return fileNameNoExtension.length === gameId.length + 2 && fileNameNoExtension.startsWith(gameId);
        })
        .sort()
        .map(x => `screenshots/${x}`);
}