export const useSplitText = () => {
  return (text: string, trim?: boolean) => {
    const chars = trim ? text.trim().split('') : text.split('')

    const splittedChars = chars
      .map(char => {
        if (char === ' ') {
          return `<span class="whitespace"> </span>`
        }

        return `<span class="char"><span class="char-inner">${char}</span></span>`
      })
      .join('')

    return splittedChars
  }
}
