// var arr2d = [[2, 5, 8],
// [3, 6, 1],
// [5, 7, 7]];

// // We can console.log the `8` in this array if we
// console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

function isPresent2d(arr2d, value) {
    for (let i = 0; i < arr2d.length; i++) {
        // console.log("loop")
        for (let j = 0; j < arr2d[i].length; j++) {
            // console.log(arr2d[i][j])
            if (arr2d[i][j] === value) {
                return true
            }
        }
    }
    return false
}
var result = isPresent2d([[2, 3, 4], [1, 11, 1], [3, 5, 8]], 1)
console.log(result)