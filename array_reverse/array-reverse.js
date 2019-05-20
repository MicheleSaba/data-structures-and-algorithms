function arrayReverse(arr) {
  if (typeof arr === "object") {
    let newArray = [];
    for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
      let x = arr[i];
      let y = arr[arr.length - (i + 1)];
      newArray[i] = y;
      newArray[arr.length - (i + 1)] = x;
    }
    return newArray;
  } else {
    console.log("error");
  }
}
arrayReverse([1, 2, 3, 5, 6, "hvghv"]);
