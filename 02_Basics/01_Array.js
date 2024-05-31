// Creation of Array
const arr1 = [0, 1, 2, 3, 4, 5];
const arr2 = ["cat", "Dog"];
const arr3 = new Array(5, 6, 7, 8, 9);
//
//
//
const arr4 = [0, 1, 2, 3, 4, 5];
// arr4.push(6)
// arr4.push(7)
// console.log(arr4);
//
//
//
//  const arr5 = [0,1,2,3,4,5]
//  arr5.unshift(-1) // add elements at the begning
//  console.log(arr5);
//  arr5.shift(-1) // remove front
// console.log(arr5);
//
//
//
// const arr6 = [5,6,7,8,9,10]
// console.log(arr6.includes(8));
// console.log(arr6.includes(80));
// console.log(arr6.indexOf(7));
// //
// //
// const arr7 = arr6.join()
// // convert into string can be check by using typeof
// console.log(arr6);
// console.log(arr6);
// console.log(typeof arr7);
//
//
// Slice -> Do not change original arr
//       -> excludes last index of the range
//  const arr8 = [11,22,33,44,55]
//  console.log("arr is", arr8);
//  const x1  = arr8.slice(1,4)
//  console.log(x1);
//  console.log(arr8);
//
//
//
// splice -> Do change original arr
//         -> Includes last index of the range
const arr9 = [11, 22, 33, 44, 55];
console.log("arr is", arr9);
const x2 = arr9.splice(1, 3);
console.log(x2);
console.log(arr9);
//
//
//
