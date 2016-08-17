## Get Yourself Sorted

Here's a collection of sorting algorithms in Javascript, including Bubble Sort, Insertion Sort, Mergesort, Quicksort, Selection Sort and Tree Sort.

### Usage

```
var sorting = require('[your-relative-path]/lib/sorting')

sorting.bubbleSort(myArray)
sorting.insertionSort(myArray)
sorting.mergeSort(myArray)
sorting.quickSort(myArray)
sorting.selectionSort(myArray)
sorting.treeSort(myArray)
```

### Testing

It's best to run the files one at a time. Mocha melts down if you try to run them all at once.

```
mocha test/treeSort.test.js
```
