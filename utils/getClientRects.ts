function getDocumentElements(tagNames: string[])
{
    return tagNames.flatMap(x => Array.from(document.getElementsByTagName(x)));
}

function getNodes(element: Element)
{
    return Array.from(element.childNodes);
}

function createGetClientRect(node: Node)
{
    const range = document.createRange();
    range.selectNodeContents(node);

    return () => range.getClientRects();
}

export function createGetClientRects(...tagNames: string[])
{
    const elements = getDocumentElements(tagNames);

    const nodes = elements.flatMap(getNodes);
    const clientRectGetters = nodes.map(createGetClientRect);

    return function()
    {
        return clientRectGetters.flatMap(x => Array.from(x()));
    }
}