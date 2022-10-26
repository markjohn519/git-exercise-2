export const square = (n) => n * n

export const fahrenheit = (celsius) => celsius * 1.8 + 32

export const rectangleArea = (a, b) => a * b

export const isPalindrome = (str) => {
  const str2 = str.toLowerCase()
  const reverse = str2.split('').reverse().join('')

  return str2 === reverse
}
