const TokenKey = 'fast-token'
const TokenPrefix = 'Bearer '
const isToken = () => {
  return !!localStorage.getItem(TokenKey)
}
const getToken = () => {
  return localStorage.getItem(TokenKey)
}
const setToken = (token: string) => {
  localStorage.setItem(TokenKey, token)
}
const clearToken = () => {
  localStorage.removeItem(TokenKey)
}
export { TokenPrefix, isToken, getToken, setToken, clearToken }
