import path from "path";
import {AsyncReturnType} from "../utils/asyncReturnType";
import fs from "fs";

export async function getGamesCatalog()
{
    const gamesCatalogDirectory = path.join(process.cwd(), "catalog");
    const paths = fs.readdirSync(gamesCatalogDirectory).map(x => path.join(gamesCatalogDirectory, x));
    return await Promise.all(paths.map(readGame));
}

export type Game = AsyncReturnType<typeof readGame>;

async function readGame(file: string)
{
    const id = path.basename(file).replace(/\.html$/, '');
    const text = await fs.promises.readFile(file, "utf8");
    // const html = document.createElement("html");
    // html.innerHTML = text;
    // Array.from(html.getElementsByTagName("head")).forEach(x => x.remove());

    return {
        id,
        // details: html.innerHTML
    }
}