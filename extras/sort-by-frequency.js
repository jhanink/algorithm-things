// given a list of numbers
// print the frequency of each number
// in ascending frequency order
// and for items having equal counts, subsort by the key

function sortByFrequency(a) {
  let frequencyMap = {};

  for (i=0;i<a.length;i++) {
    let num = a[i];
    let count = frequencyMap[num];
    frequencyMap[num] = count?count+1:1;
  }

  const frequencyArr = Object.keys(frequencyMap).map(key => {
    return [key, frequencyMap[key]]
  })

  frequencyArr.sort((a,b) => {
    const a0 = parseInt(a[0]);
    const b0 = parseInt(b[0]);
    const a1 = parseInt(a[1]);
    const b1 = parseInt(b[1]);
    if (a1 !== b1) {
      return a1-b1;
    }
    return a0-b0;
  })
  
  return frequencyArr;
}


let input = [1, 1, 60, 60, 60, 60, 30, 30, 30, 25, 90, 90, 45, 45, 45, 45, 45, 45, 75, 16, 3, 99, 90, 45, 1, 2, 1, 44];

const output = sortByFrequency(input);
console.clear();
console.log(JSON.stringify(output))
