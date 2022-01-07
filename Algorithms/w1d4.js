// //declare variable x with integer value 5
// var x = 5;

// function setX(newValue) {
//     x = newValue;
// }

// console.log(x);
// //function is called
// setX(15);
// console.log(x);
// //console.log 5
// // x is now 15
// //console.log 15


// //the return of return 
// //varible x delared with value of 5
var x = 5;

function addToX(amount) {
    return x + amount;
    console.log("hello there");
}

// console.log(x);
// var result = addToX(-10);
// console.log(result);
// console.log(x);
// //console.log 5
// // var result gets the value of -5 
// // console.log -5
// // console.log 5 


//is array a palindrome
function isPal(arr) {
    for (var left = 0; left < arr.length / 2; left++) {
        var right = arr.length - 1 - left;
        if (arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}

var result1 = isPal([1, 1, 2, 2, 1]);
console.log(result1);
//not a pal-indrome

var result2 = isPal([3, 2, 1, 1, 2, 3]);
console.log(result2);
//pal-indrome
