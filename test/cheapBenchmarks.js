var cases = require('./cases')
var microtime = require('microtime')
var sorting = require('../lib/sorting')

console.log('\nbubble sort')
console.log(clock(sorting.bubbleSort))

console.log('\nmerge sort')
console.log(clock(sorting.mergeSort))

console.log('\ninsertion sort')
console.log(clock(sorting.insertionSort))

console.log('\nquick sort')
console.log(clock(sorting.quickSort))

function clock (sortingAlgorithm) {
  var start = microtime.now()
  sortingAlgorithm(cases.tenThousand)
  var end = microtime.now()

  return end - start
}
