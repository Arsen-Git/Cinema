export const STATUSES = Object.freeze({
    CHOISE: "choise",
    FREE: "free",
    PICKED: "picked"
})
export const SVG = `<svg width="50" height="46" viewBox="0 0 50 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.75 45.5C10.825 45.5 12.5 43.825 12.5 41.75V38H37.5V41.75C37.5 43.825 39.175 45.5 41.25 45.5C43.325 45.5 45 43.825 45 41.75V35.5C45 32.75 42.75 30.5 40 30.5H10C7.25 30.5 5 32.75 5 35.5V41.75C5 43.825 6.675 45.5 8.75 45.5ZM45 18H47.5C48.875 18 50 19.125 50 20.5V23C50 24.375 48.875 25.5 47.5 25.5H45C43.625 25.5 42.5 24.375 42.5 23V20.5C42.5 19.125 43.625 18 45 18ZM2.5 18H5C6.375 18 7.5 19.125 7.5 20.5V23C7.5 24.375 6.375 25.5 5 25.5H2.5C1.125 25.5 0 24.375 0 23V20.5C0 19.125 1.125 18 2.5 18ZM37.5 25.5H12.5V5.5C12.5 2.75 14.75 0.5 17.5 0.5H32.5C35.25 0.5 37.5 2.75 37.5 5.5V25.5Z" fill="#FADD48"/>
</svg>
`

export function saveToStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value))
}
export function deleteFromStorage(key){
    localStorage.removeItem(key)
}
export function getFromStorage(key){
    let data = localStorage.getItem(key);
    return JSON.parse(data)
}