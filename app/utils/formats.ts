export function toUpper(str: string | undefined){
    return `${str[0].toUpperCase()}${str.slice(1,str.length)}` 
}

export function rounded(number: number | undefined) {
    return Math.round(number - 273.15)
}