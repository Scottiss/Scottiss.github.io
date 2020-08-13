// make variables for increment, decrement and count - set count to 0
var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

// set up our functions
function setCountingText() {
    countEl.textContent = count;
}

// increment up counting
incrementEl.addEventListener("click", function() {
    count++;
    setCountingText();
});

// decrement with code to stop from going below 0
decrementEl.addEventListener("click", function() {
    if(count > 0) {
    count--;
    setCountingText();
    }
});

