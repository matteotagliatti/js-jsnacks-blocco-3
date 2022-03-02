const output = document.getElementById("output");

let number = parseInt(prompt("inserisci un numero"));
if (number > 100) number = 100;

const array = [];

for (let i = 0; i < number; i++) {
  array[i] = [];

  while (array[i].length < 10) {
    const arrayNumber = Math.floor(Math.random() * 4528 + 4);
    array[i].push(arrayNumber);
  }

  output.innerHTML += `<li>${array[i].join(", ")}</li>`;
}
