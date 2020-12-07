export type HubolDate = ReturnType<typeof hubolDate>;

export function hubolDate(dateString: string)
{
    const date = new Date(dateString);
    return { date: date.getDate(), month: date.getMonth(), year: date.getFullYear() };
}

export function toDate(hubolDate: HubolDate)
{
    return new Date(hubolDate.year, hubolDate.month, hubolDate.date);
}