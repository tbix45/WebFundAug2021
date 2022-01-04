// HACKER HERO
// #9 Swap values of a given array

// function swapTowardCenter(arr) {
//     for (i = 0; i < arr.length / 2; i++) {
//         var temp = arr[i];
//         arr[i] = arr[arr.length - 1 - i];
//         arr[arr.length--1 - i]=temp;
//     }
//     return arr;
// }


// #10 Create threesFives(n) that adds values from 1 and n (inclusive) if that value is not divisible by 3 or 5. Return the final sum.

// For example, threesFives(10) returns 22 as it only returns the sum of 1, 2, 4, 7, and 8. On that example, it skips 3, 6, 9 as those are divisible by 3. It also skips 5, and 10 as it's divisible by 5.
function threeFives(num) {

    var sum = 0;// Enter code below
    for (var i = 0; i <= num; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            // do nothing
        }
        else {
            sum += i;

        }
        return sum;
    }

}
threeFives(3);