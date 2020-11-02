export default function setJsonLocalStorage(itemName, payload) {
  if(window.localStorage) {
    return localStorage.setItem(itemName, JSON.stringify(payload))
  }
  return null
}
