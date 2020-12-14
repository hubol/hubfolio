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