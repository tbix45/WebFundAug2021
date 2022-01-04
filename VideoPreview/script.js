console.log("page loaded...");

function playVideo(vid) {
    vid.play();
}

function pauseVideo(vid) {
    vid.pause();
    vid.currentTime = 0;
}
var newsub = 0;
function addview() {
    newsub++;
    document.querySelector(".newsub").innerHTML = newsub + " subscriber(s)";
}