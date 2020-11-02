export default function getJsonLocalStorage(itemName) {
  if(window.localStorage) {
    return JSON.parse(localStorage.getItem(itemName))
  }
  return null
}
