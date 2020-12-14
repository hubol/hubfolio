export const now = {
    get date()
    {
        return new Date();
    },
    get ms()
    {
        return performance.now();
    },
    get s()
    {
        return this.ms / 1000;
    }
}