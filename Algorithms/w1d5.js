// //incorrect variable swap
// var fruit1 = "apples";
// var fruit2 = "oranges";

// fruit2 = fruit1;

// console.log(fruit2 + " and " + fruit1);
// //apples and apples

// //correct way to swap 
// var fruit1 = "apples";
// var fruit2 = "oranges";

// var temp = fruit1; // temp is a common name for this //temp=apples
// fruit1 = fruit2; //fruit1=oranges
// fruit2 = temp; //fruit2 = apples

// console.log(fruit2 + " and " + fruit1);
// //console.log apples and oranges


// //while loops
// var start = 0;
// var end = 12;

// while (start < end) {
//     console.log("start: " + start + ", end: " + end);
//     start += 2;
//     end -= 2;
// }
// //start: 0, end: 12
// //start: 2, end: 10
// //start: 4, end: 8

// xxxxxxxxxxx===============================
// reverse an array 
function reverse(arr) {
    for (var left = 0; left < Math.floor(arr.length / 2); left++) {
        var right = arr.length - 1 - left;
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        // console.log(arr) shows the two loops
    }
    console.log(arr)
}

reverse(['a', 'b', 'c', 'd', 'e'])