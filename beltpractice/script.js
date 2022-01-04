function shiftleft() {
    document.querySelector(".mainjpg").setAttribute('src', 'images/pexels-sam-6347788.jpeg');
    document.querySelector("#sp").setAttribute('class', 'box purplebox');
    document.querySelector("#pn").setAttribute('class', 'box graybox');
}
function shiftright() {
    document.querySelector(".mainjpg").setAttribute('src', 'images/pexels-chait-goli-3722918.jpeg');
    document.querySelector("#sp").setAttribute('class', 'box graybox');
    document.querySelector("#pn").setAttribute('class', 'box purplebox');
}
var cart = 0;
function addtocart() {
    cart++;
    document.querySelector('.cart').innerHTML = cart;
    // document.querySelector('.cart').innerHTML++; this line alone converts the string to integer and adds 1 to it.
}