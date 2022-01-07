//1. print 1 - 255
// for (var i = 1; i <= 255; i++) {
//     console.log(i);
// }
// 2. Print Odds 1-255 
// for (var i = 1; i <= 255; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }
// 3. print integers from 0-255 and with each integer print the sum so far 
// function printIntsum() {
//     var sum = 0
//     for (var i = 0; i <= 255; i++) {
//         console.log(i);
//         sum += i;
//         console.log('Sum so far:', sum)
//     }
// }
// printIntsum()
// 4. iterate through an array and print each indexes value 
// function printArrayVals(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }
// printArrayVals([1, 5, 2, 7, 80])

//5. given array find and print largest element
// function printArrayMax(arr) {
//     //if no value in array or length is 0
//     if (!arr || arr.length == 0) {
//         console.log("Empty array!!")
//         //else run this
//     } else {
//         var largest = arr[0];
//         for (var i = 0; i < arr.length; i++) {
//             if (arr[i] > largest) {
//                 largest = arr[i]
//                 console.log(largest)
//             }
//         }
//     }
// }
// printArrayMax([30, 100, 2, 1, 45, 3])
// printArrayMax()
// printArrayMax([])

//6. print the average of all an arrays values
// function averageArray(arr) {
//     var sum = 0;
//     if (!arr || arr.length == 0) {
//         console.log("Empty array!!")
//     } else {
//         for (let i = 0; i < arr.length; i++) {
//             sum += arr[i];
//         }
//         var average = sum / arr.length;
//         console.log(average)
//     }
// }
// averageArray([1, 2, 3, 4])
// averageArray([1, 3, 4])
// averageArray()
// averageArray([])


//7. Create an array with odd integers between 1-255 inclusive
// function oddArray() {
//     var oddArray = [];
//     for (let i = 1; i <= 255; i += 2) {
//         oddArray.push(i)
//     }
//     console.log(oddArray)
// }
// oddArray();

//8.square each value in an array in place
//return the array
// function squareArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] * arr[i];
//         console.log(arr[i])
//     }
//     return arr
// }
// var result = squareArray([1, 4, 2, 3])
// console.log(result)

//9. return the count of values in an array that are greater than y
// function arrayGreaterY(arr, y) {
//     var count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > y) {
//             count += 1;
//             // console.log(count)
//         }
//     }
//     return count
// }
// // var result = arrayGreaterY([1, 5, 3, 10, 8, 100], 5)
// var result = arrayGreaterY([], 5);
// console.log("The array has " + result + " values greater than")

//10. retrurn the array in place after setting negative values to zero
// function arrayNegativeZeros(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             arr[i] = 0;
//         }
//     }
//     return arr
// }
// var result = arrayNegativeZeros([1, -2, 4, -2])
// console.log(result)

//11. given an array print the max, min, and average
// function minMaxAverageArray(arr) {
//     var max = arr[0]
//     var min = arr[0]
//     var average = 0;
//     for (let i = 0; i < arr.length; i++) {
//         average += arr[i];
//         if (arr[i] > max) {
//             max = arr[i]
//         } if (arr[i] < min) {
//             min = arr[i]
//         }
//     }
//     console.log(max)
//     console.log(min)
//     console.log(average / arr.length)
// }
// minMaxAverageArray([1, 5, 2, 10])

//12. given an array move all values left by one, drop the first, add 0 at end. 
// function shiftArrayLeft(arr) {

// }


// 13. replace negative numbers with string Dojo
// function stringForNegative(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             arr[i] = 'Dojo'
//         }
//     }
//     return arr
// }
// var result = stringForNegative([1, -1, -2, 3])
// console.log(result)