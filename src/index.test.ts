import { readFileSync } from 'fs'
import { resolve } from 'path'
import { compress, compressToURI, decompress, decompressFromURI } from '.'

it('compresses UTF16', () => {
  const input = 'inputLala123'
  const compressed = compress(input)
  const decompressd = decompress(compressed)
  expect(decompressd).toBe(input)
})

it('compresses 500KB raw text file into JS string declaration', () => {
  const rawData = readFileSync(resolve(__dirname, '..', 'test', 'rawdata.txt'), { encoding: 'utf8' })
  const compressedRawData = '(' + compress(rawData) + ')'
  const jsStrEvalResult = eval(compressedRawData)
  expect(decompress(JSON.stringify(jsStrEvalResult))).toBe(rawData)
})

it('compresses 500KB raw text file into JS string declaration URI encoded', () => {
  const rawData = readFileSync(resolve(__dirname, '..', 'test', 'rawdata.txt'), { encoding: 'utf8' })
  const compressedRawData = '("' + compressToURI(rawData) + '")'
  const jsStrEvalResult = eval(compressedRawData)
  expect(decompressFromURI(jsStrEvalResult)).toBe(rawData)
})
