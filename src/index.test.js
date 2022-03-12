const lz = require('../index')

it('compresses UTF16', () => {
  const input = 'inputLala123'
  const compressed = lz.compress(input)
  const decompressd = lz.decompress(compressed)
  expect(decompressd).toBe(input)
})
