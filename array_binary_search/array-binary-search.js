const array = [1, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function binarySearch(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  // console.log(mid);
  while (start !== end) {
    mid = Math.floor((start + end) / 2);
    if (key === arr[mid]) {
      return mid;
    } else if (key < arr[mid]) {
      end = mid - 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    }
  }
}
// binarySearch(array, 9);
