const insertionSort = require('./insertionSort');

describe('Insertion sort', () => {
  let arr = [2, 5, 3, 90, 50, 100, 10000, -200];
  it('takes an array and sorts it using insertion sort', () => {
    expect(insertionSort(arr)).toEqual([-200, 2, 3, 5, 50, 90, 100, 10000]);
  });
})