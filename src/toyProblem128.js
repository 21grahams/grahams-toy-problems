// Flipper - Flip every pair of characters in a string

// input: a string
// output: the same string, but with each pair of characters (pair of 2 at a time) flipped in the string
// constraints: none at this time
// edge cases: none at this time
const flipPairs = string => {
  // create a flipped string var
  let flipped = ''
  // split string by every letter
  let splitter = string.split('')
  // loop over splitter
  for (let i = 0; i < splitter.length; i++) {
    if (splitter[i + 1] === undefined) {
      flipped += splitter[i]
      break
    }
    // increment next element to flipped var
    flipped += splitter[i + 1]
    // increment current element to flipper var
    flipped += splitter[i]
    // if next element is undefined
    // increment current element to flipped var
    i = i + 1
  }
  // return flipped
  return flipped
}

let testInput = 'check out how interesting this problem is, it\'s insanely interesting!'
let testOutput = flipPairs(testInput)
console.log(testOutput) // hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!