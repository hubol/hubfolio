import {wait} from "pissant";
import {useEffect} from "react";
import {viewport} from "../utils/viewport";

async function createDrummerPlayer(token: { isCancelled: boolean })
{
    const frameCount = 4;
    const image = new Image();
    image.src = "drummer-player.png";
    await wait(() => image.complete);

    const canvas = document.createElement("canvas");
    canvas.width = image.naturalWidth / frameCount;
    canvas.height = image.naturalHeight;
    canvas.style.imageRendering = "pixelated";
    canvas.style.position = "absolute";
    canvas.style.width = "10vmin";
    canvas.style.height = canvas.style.width;

    const drawDrummerFrame = makeDrawDrummerFrame(image, canvas);

    document.body.appendChild(canvas);

    const drummer = makeDrummer(canvas);

    function doGameLoop()
    {
        if (token.isCancelled)
            return;

        requestAnimationFrame(doGameLoop);
        doGameLogic(drummer);
        canvas.style.left = `${drummer.x}px`;
        canvas.style.top = `${drummer.y}px`;
        canvas.style.transform = `scaleX(${drummer.xScale})`;
        drawDrummerFrame(drummer.frame);
    }

    doGameLoop();

    setTimeout(async () => {
       await wait(() => token.isCancelled);
       canvas.remove();
    });
}

function makeDrawDrummerFrame(image: HTMLImageElement, canvas: HTMLCanvasElement)
{
    const inferredFrameCount = image.naturalWidth / canvas.width;
    const context = canvas.getContext("2d");
    let lastRenderedFrameIndex = -1;

    return function(frameIndex: number)
    {
        frameIndex = Math.abs(Math.floor(frameIndex % inferredFrameCount));
        if (lastRenderedFrameIndex === frameIndex)
            return;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, -frameIndex * canvas.width, 0);
        lastRenderedFrameIndex = frameIndex;
    }
}

let cachedDocumentNodes;

function getDocumentNodes()
{
    if (!cachedDocumentNodes)
        cachedDocumentNodes = getDocumentNodes2("p", "button", "a", "h2");
    return cachedDocumentNodes;
}

function getDocumentNodes2(...tagNames): Element[]
{
    return tagNames.flatMap(x => Array.from(document.getElementsByTagName(x)));
}

type Drummer = ReturnType<typeof makeDrummer>;

function collidesImpl(element: HTMLElement, dx: number, dy: number, target: HTMLElement)
{
    const box = element.getBoundingClientRect();
    const targetBox = target.getBoundingClientRect();
    const x = box.x + dx;
    const y = box.y + dy;

    return areRectanglesOverlapping(
        { x, y, width: element.scrollWidth, height: element.scrollHeight },
        { x: targetBox.x, y: targetBox.y, width: target.scrollWidth, height: target.scrollHeight });
}

export interface Rectangle
{
    x: number;
    y: number;
    width: number;
    height: number;
}

export function areRectanglesOverlapping(a: Rectangle, b: Rectangle)
{
    return a.x + a.width > b.x
        && a.x < b.x + b.width
        && a.y + a.height > b.y
        && a.y < b.y + b.height;
}

function collides(element: HTMLElement, dx: number, dy: number)
{
    const elements = getDocumentNodes();
    for (let i = 0; i < elements.length; i++)
    {
        if (element !== elements[i] && collidesImpl(element, dx, dy, elements[i]))
            return true;
    }

    return false;
}

function makeDrummer(canvas: HTMLCanvasElement)
{
    return {
        frame: 0,
        xScale: 1,
        x: 0,
        y: 0,
        dx: 1,
        dy: 0,
        collides(dx: number, dy: number)
        {
            return collides(canvas, dx, dy);
        }
    }
}

function doGameLogic(drummer: Drummer)
{
    drummer.frame = (drummer.frame + 0.1) % 2;
    drummer.x += drummer.dx;
    if (drummer.x >= viewport.width - 64)
        drummer.dx = Math.abs(drummer.dx) * -1;
    else if (drummer.x < 0)
        drummer.dx = Math.abs(drummer.dx);
    if (drummer.dx !== 0)
        drummer.xScale = Math.sign(drummer.dx);
    drummer.dy = Math.min(12, drummer.dy + 1);
    if (!drummer.collides(0, drummer.dy))
    {
        drummer.frame = 3;
        drummer.y += drummer.dy;
    }
    else
        drummer.dy = 0;
}

export function useDrummerPlayer()
{
    useEffect(() => {
        const token = { isCancelled: false };
        setTimeout(async () => await createDrummerPlayer(token));
        return () => token.isCancelled = true;
    }, []);
}