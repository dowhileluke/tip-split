const MoneyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

// n is the number of cents
export function formatMoney(n: number | null) {
  if (n === null) return ''

  return MoneyFormat.format(n / 100)
}

const ignoredChars = /[$,]/g

// convert the given string into an integer representing cents. '$1.5' -> 150
export function parseMoney(s: string) {
  if (s.includes('e')) return null // scientific notation

  const digits = s.replace(ignoredChars, '')

  if (!digits) return null

  const n = Number(digits)

  if (Number.isNaN(n)) return null
  
  return Math.trunc(n * 100)
}
