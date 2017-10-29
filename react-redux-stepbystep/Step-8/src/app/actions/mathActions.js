export function add (number) {
    return {
        type:"ADD",
        payload:number
    }
}

export function subtract (number) {
    return {
        type:"SUBTRACT",
        payload:number
    }
}