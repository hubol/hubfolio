export type HubolDate = ReturnType<typeof hubolDate>;

export function hubolDate(dateString: string)
{
    return { dateString };
}

export function toDate(hubolDate: HubolDate)
{
    return new Date(hubolDate.dateString);
}