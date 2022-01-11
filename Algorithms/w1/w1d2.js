// declare a variable a with a value of 25 
var a = 25;
// 25 - 13 = 12 new value of variable a
a = a - 13;
//console log 12/2 =6
console.log(a / 2);
// answer = 6

// variable a declared with string hello
a = "hello";
//console.log hello + hello // concatenate strings
console.log(a + " hello");


//predict loops
for (var i = 0; i < 10; i++) {
    console.log(i);
    i = i + 3;
}
// console.log 0,4,8
// i=0+3 --> i=4 --> i++ i=5 ,i=9

console.log("outside of the loop " + i);
//outside the loop i=12


//lesson 3
function getTotal(arrayOfNumbers) {

    var sum = arrayOfNumbers[0];
    //sum equals the value at index 0
    //sum = 1
    //for loop declared through array of numbers

    for (var i = 0; i < arrayOfNumbers.length; i++) {
        //1+=1
        //sum is 2
        //sum+=3
        //sum is 5
        //sum+=5
        //sum is 10
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum);
    }

    console.log("the total is: " + sum);
    //the total sum is 10
}

getTotal([1, 3, 5]);
