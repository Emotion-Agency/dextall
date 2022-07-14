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

    const words = splittedChars.split('<span class="whitespace"> </span>')

    const splittedWords = words
      .map(word => `<span class="word">${word}</span>`)
      .join(' ')

    return splittedWords
  }
}
