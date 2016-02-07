# Code Samples

## `quicksort`

Quicksort has two steps
* Partitioning
* Sorting

`Partitioning` an array is the act of moving data around a chosen Pivot. Specifically, it rearranges data so that Left <= Pivot <= Right. The result is that the Pivot is "sorted" with respect to Left and Right, but the Left and Right sides are not themselves sorted. 

This is then repeated on the Left and Right subarrays.

This process of recursive partitioning results in a fully sorted array.
