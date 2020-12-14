import {wait} from "pissant";
import {useEffect} from "react";
import {viewport} from "../utils/viewport";
import {createGetClientRects} from "../utils/getClientRects";
import {areRectanglesOverlapping} from "../utils/rectangle";

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

let cachedGetClientRects: ReturnType<typeof createGetClientRects>;

function getClientRects()
{
    if (!cachedGetClientRects)
        cachedGetClientRects = createGetClientRects("h2, h1, h2 ~ p, button img, a");
    return cachedGetClientRects();
}

type Drummer = ReturnType<typeof makeDrummer>;

function collidesImpl(element: HTMLElement, dx: number, dy: number, target: DOMRect)
{
    const box = element.getBoundingClientRect();
    const x = box.x + dx;
    const y = box.y + dy;

    return areRectanglesOverlapping(
        { x, y, width: element.scrollWidth, height: element.scrollHeight },
        target);
}

function collides(element: HTMLElement, dx: number, dy: number)
{
    const elements = getClientRects();
    for (let i = 0; i < elements.length; i++)
    {
        if (collidesImpl(element, dx, dy, elements[i]))
            return true;
    }

    return false;
}

function makeDrummer(canvas: HTMLCanvasElement)
{
    return {
        frame: 0,
        xScale: 1,
        x: 900,
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