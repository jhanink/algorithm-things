function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function quicksort(arr, left, right) {
  const index = partition(arr, left, right);
  if (left < index - 1) {
    quicksort(arr, left, index - 1);
  }
  if (index > right) {
    quicksort(arr, index, right);
  }
  return arr;
}

function partition(arr, i, j) {
  const pivot = arr[Math.floor((i+j)/2)];
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot){
      j--;
    }
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
}


// ------- test ------

function test(arr) {
  console.log(quicksort(arr, 0, arr.length - 1));
}

const input = [1, 9, 2, 3, 4, 5, 7, 2, 9, 2, 9, 2, 9, 13, 3, 6, 4];


test(input);
