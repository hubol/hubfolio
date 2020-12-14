import {wait} from "pissant";
import {useEffect} from "react";
import {createGetClientRects} from "../utils/getClientRects";
import {areRectanglesOverlapping} from "../utils/rectangle";
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
    const width = 9;
    const height = width * (image.naturalHeight / canvas.width);
    canvas.style.width = `${width}vmin`;
    canvas.style.height = `${height}vmin`;
    canvas.style.cursor = "pointer";
    canvas.style.zIndex = "1000";

    const drawDrummerFrame = makeDrawDrummerFrame(image, canvas);

    document.body.appendChild(canvas);

    const drummer = makeDrummer(canvas);
    canvas.onclick = () => {
        if (drummer.dy === 0)
        {
            drummer.dy = -21.1;
            drummer.dx *= -1;
        }
    }

    function doGameLoop()
    {
        if (token.isCancelled)
            return;

        requestAnimationFrame(doGameLoop);
        doGameLogic(drummer);
        canvas.style.left = `${drummer.x - drummer.width / 2}px`;
        canvas.style.top = `${drummer.y - drummer.height}px`;
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
    const strip = element.scrollWidth * .25;
    const x = box.x + dx + strip / 2;
    const y = box.y + dy;
    const width = element.scrollWidth - strip;
    const height = element.scrollHeight;

    return areRectanglesOverlapping(
        { x, y, width, height },
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
        x: viewport.width / 2,
        y: 9999999999,
        dx: 1,
        dy: 0,
        get width() {
          return canvas.scrollWidth;
        },
        get height() {
            return canvas.scrollHeight;
        },
        collides(dx: number, dy: number)
        {
            return collides(canvas, dx, dy);
        }
    }
}

function doGameLogic(drummer: Drummer)
{
    const xMax = document.body.clientWidth - drummer.width / 2;
    const xMin = drummer.width / 2;

    drummer.frame = (drummer.frame + 0.1) % 2;
    drummer.x += drummer.dx;
    if (drummer.x >= xMax)
        drummer.dx = Math.abs(drummer.dx) * -1;
    else if (drummer.x < xMin)
        drummer.dx = Math.abs(drummer.dx);
    if (drummer.dx !== 0)
        drummer.xScale = Math.sign(drummer.dx);
    drummer.dy = Math.min(12, drummer.dy + 1);
    if (drummer.dy > 0)
    {
        for (let i = 0; i < Math.floor(drummer.dy); i++)
        {
            if (drummer.collides(0, 1) || drummer.y >= document.body.clientHeight)
            {
                drummer.dy = 0;
                drummer.y = Math.min(drummer.y, document.body.clientHeight);
                break;
            }

            drummer.y++;
            drummer.frame = 3;
        }
    }
    else
    {
        drummer.y += drummer.dy;
    }

    drummer.x = Math.min(xMax, Math.max(xMin, drummer.x));

    if (drummer.dy < 0)
        drummer.frame = 2;
}

export function useDrummerPlayer()
{
    useEffect(() => {
        const token = { isCancelled: false };
        setTimeout(async () => await createDrummerPlayer(token));
        return () => token.isCancelled = true;
    }, []);
}