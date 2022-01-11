//is sunny
var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";

if (isSunny) {
    whatToBring += "sunglasses, ";
}
if (temperature < 50) {
    whatToBring += "a coat, ";
}
if (isRaining) {
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

console.log(whatToBring);
// I should bring: sunglasses, a coat, and a smile! 


// prepare for downcount 
for (var i = 10; i > 0; i--) {
    if (i != 2) {
        console.log(i);
    } else {
        console.log("ignition!");
    }
}
console.log("liftoff!");
// 10,9,8,7,6,5,4,3,ignition,1,liftoff 


//count positives
var countPositives = 0;
var numbers = [];

// your code here!
//is 0 a positive number?
//is the array empty or null?
if (numbers.length != 0) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0) {
            countPositives++;
        }
    }
} else {
    console.log('Empty array!!')
}

console.log("there are " + countPositives + " positive values");
