// Task 5. implementing functions for generating identification codes for the three countries: Estonia, Latvia, and Lithuania.
// Each function should return a code that starts with a unique country prefix (EST-, LVA-,LTU-) followed by a randomly generated four-digit number.

export function generateEstonianCode() {
  const randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
  // and found the option with this formula -> Math.floor(1000 + Math.random() * 9000);

  return `EST-${randomNumber}`
}

export function generateLatvianCode() {
  const randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
  return `LVA-${randomNumber}`
}

export function generateLithuanianCode() {
  const randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
  return `LTU-${randomNumber}`
}
