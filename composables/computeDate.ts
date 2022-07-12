export const useFormattedDate = unformattedDate => {
  const date = new Date(unformattedDate)
  const day = date.getDate() <= 9 ? '0' + date.getDate() : date.getDate()
  const month = date.getMonth() <= 9 ? '0' + date.getMonth() : date.getMonth()
  const year = date.getFullYear()
  return `${day}.${month}.${year}`
}
