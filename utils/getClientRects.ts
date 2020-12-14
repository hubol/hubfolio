import {onViewportResize} from "./onViewportResize";

function getElementsOrNodes(element: Element)
{
    switch (element.tagName)
    {
        case "P":
        case "H1":
        case "H2":
            return getTextNodes(element);
        case "A":
        case "IMG":
            return [ element ];
        default:
            return Array.from(element.childNodes);
    }
}

function getTextNodes(element: Element)
{
    return Array.from(element.childNodes).filter(x => x instanceof Text);
}

function createGetClientRect(nodeOrElement: Node | Element)
{
    if (nodeOrElement instanceof Element)
    {
        return () => [ nodeOrElement.getBoundingClientRect() ];
    }
    const range = document.createRange();
    range.selectNodeContents(nodeOrElement);

    return () => range.getClientRects();
}

export function createGetClientRects(selectors: string)
{
    const elements = Array.from(document.querySelectorAll(selectors));

    const nodes = elements.flatMap(getElementsOrNodes);
    const clientRectGetters = nodes.map(createGetClientRect);

    let dirty = true;

    onViewportResize(() => dirty = true);
    document.addEventListener('scroll', () => dirty = true);

    let memoizedResult: DOMRect[];

    return function()
    {
        if (dirty)
        {
            memoizedResult = clientRectGetters.flatMap(x => Array.from(x()));
            dirty = false;
        }
        return memoizedResult;
    }
}