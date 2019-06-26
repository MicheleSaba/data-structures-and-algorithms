// InsertionSort(int[] arr)

//     FOR i = 1 to arr.length

//       int j <-- i - 1
//       int temp <-- arr[i]

//       WHILE j >= 0 AND temp < arr[j]
//         arr[j + 1] <-- arr[j]
//         j <-- j - 1

//       arr[j + 1] <-- temp

function insertionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    let value = arr[i];
    for (var j = i - 1; j > -1 && arr[j] > value; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = value;
  }
  return arr;
}
module.exports = insertionSort;
