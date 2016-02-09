# Algorithm Things

## `quicksort`

Quicksort is a divide-and-conquer algorithm that repeatedly "sorts" pivot values on consecutively smaller subarrays until every value has been a pivot so that every value becomes sorted. The "sorting" of a pivot is known as `partitioning`.

`Partitioning` an array is the act of moving data around a chosen Pivot. Specifically, it rearranges data so that `Left <= Pivot <= Right`. The result is that the Pivot is "sorted" with respect to Left and Right, but the Left and Right sides are not themselves sorted. This is then repeated on the Left and Right subarrays. The process of recursive partitioning ultimately results in a fully sorted array.

* [quicksort - efficient](https://github.com/jhanink/code-samples/blob/master/quicksort.js)
* [quicksort - compact](https://github.com/jhanink/code-samples/blob/master/quicksort-compact.js)

## `merge sort`
