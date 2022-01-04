var count = [9, 12, 9]
var countElement = [document.querySelector(".count"), document.querySelector(".count2"), document.querySelector(".count3")];
console.log(countElement);
function add(value) {
    count[value]++;
    countElement[value].innerHTML = count[value] + " like(s) ";
    console.log(count);

}
// var count2 = 12;
// var count2Element = ;
// console.log(count2Element);
// function add2() {
//     count2++;
//     count2Element.innerHTML = count2 + " like(s) ";
//     console.log(count2);

// }