export const useFormattedDate = unformattedDate => {
  const date = new Date(unformattedDate)
  const day = '0' + String(date.getDate()).slice(-2)
  const month = '0' + String(date.getMonth()).slice(-2)
  const year = date.getFullYear()
  return `${day}.${month}.${year}`
}
