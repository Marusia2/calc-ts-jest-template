import { generateEstonianCode } from '../src/code-generator'
import { generateLatvianCode } from '../src/code-generator'
import { generateLithuanianCode } from '../src/code-generator'

// task 5. Each function returns a code with the correct prefix for the corresponding country.
// The codes consist of eight characters and contain a four-digit number after the prefix.

test('should generate Estonia code', () => {
  const code = generateEstonianCode()
  expect(code.startsWith('EST-')).toBe(true)
  expect(code.length).toBe(8)
  expect(/EST-\d{4}/.test(code)).toBe(true)
})

test('should generate Latvia code', () => {
  const code = generateLatvianCode()
  expect(code.startsWith('LVA-')).toBe(true)
  expect(code.length).toBe(8)
  expect(/LVA-\d{4}/.test(code)).toBe(true)
})

test('should generate Lithuania code', () => {
  const code = generateLithuanianCode()
  expect(code.startsWith('LTU-')).toBe(true)
  expect(code.length).toBe(8)
  expect(/LTU-\d{4}/.test(code)).toBe(true)
})
