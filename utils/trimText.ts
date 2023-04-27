// Handy function for trimming text to a certain length + '...' if it's longer than the length
export const trimText = (text: string, length: number) => {
    return text.length >= length ? text.slice(0,length) + "..." : text;
}