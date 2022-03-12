# lz-string-ts

LZ-based compression algorithm for TypeScript projects (Browser, Node.js).
This project is a TypeScript port of `lz-string` using modern tooling.

## Setup

    yarn add lz-string-ts

## Usage

```ts
import { compress, decompress } from 'ls-string-ts'

const compressed = compress('input')
const decompressed = decompress(compressed)
```

## Limitations

This project intentionally doesn't implement the `base64` and `uri` encodings
the original project has; also, there is no CLI.

## Test

    yarn test
