//jshint esversion:6
document.querySelector("button").addEventListener("click", function() {
    setTimeout(function() {
        alert("You clicked");
    }, 300);
});

let arr = [1, 2, 3, 4];
let x = arr[5];

try {
    nonExistentFunction();
} catch (error) {
    alert(error);
}
