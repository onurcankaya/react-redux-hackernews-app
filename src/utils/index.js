export const shortenString = (string) => {
  return string.length > 35 ? string.slice(0, 35) + '...' : string
}
