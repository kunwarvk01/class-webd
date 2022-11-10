const numbers = document.querySelectorAll(td);
const values = [
   "zero",
   "one",
   "two",
   "three",
   "four",
   "five",
   "six",
   "seven",
   "eight",
   "nine",
   "zero"
];

for (let i = 1; i < numbers.length; i++) {
   numbers[i].addEventListener("click", function() {
      const s = values[i.innerHTML];
      numbers[0].innerHTML = s;
   });
}
