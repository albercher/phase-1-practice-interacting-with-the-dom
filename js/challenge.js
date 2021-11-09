// EVERYTHING WORKS EXCEPT HEART


const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const heart = document.querySelector("#heart");
const pause = document.querySelector("#pause");
const counter = document.querySelector("#counter");
const likesUl = document.querySelector(".likes");
const comments = document.querySelector(".comments");
const form = document.querySelector("#comment-form");
const formInput = document.querySelector("#comment-input");
const commentList = document.querySelector(".comments");

// listen for click on + button, increment 1
plus.addEventListener("click", () => {
    counter.innerHTML = `${++counter.innerHTML}`
})

// listen for click on - button, increment 1
minus.addEventListener("click", () => {
    counter.innerHTML = `${--counter.innerHTML}`
})


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let newComment = document.createElement("p");
    newComment.innerHTML = formInput.value;
    commentList.append(newComment);
    form.reset();
})




let pauseStatus = false; // pause status is defualt to false

pause.addEventListener("click", () => {isItPaused()}) // event listener calls isItPaused to figure out what to do

function isItPaused() { // function that changes pause status
    if (pauseStatus === false) {
        pauseStatus = true;
        // console.log("test 1") // test
    } else if (pauseStatus === true) {
        pauseStatus = false;
        // console.log("test 2") // test
    }
}


// make the counter increase every second
setInterval(() => {
    if (pauseStatus === true){ // if we are paused, dont increment
        counter.innerHTML = `${counter.innerHTML}`
    } else {
        counter.innerHTML = `${++counter.innerHTML}`
    }
    
}, 1000)

