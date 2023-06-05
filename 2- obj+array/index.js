// --- Metodi per dichiarare variables
var varVariable = null;     // (Deprecato) Sia modificabile che riassegnabile, non va dichiarata prima dell'uso.
let letVariable = null;     // Sia modificabile che riassegnabile, va dichiarata prima dell'uso.
const constVariable = null; // È modificabile, ma non riassegnabile.

// Il "var" in particolare funziona prima della sua dichiarazione perché affetto dall' - HOISTING -

console.log(prova);

var prova = 'testo';

// Come funziona la lettura di JS
// - Rapida lettura
// - Porta in cima le dichiarazioni di var e delle function (con scope globale)
// - rilegge il codice

// --- Tipi di dato:

const boolean = true; // false
const string = "Sono tutti i testi chiusi tra apici"; // 'string' `stringa`

const userInput = prompt('Cosa vuoi dirmi?'); // prompt inserirà nella mia variabile o la risposta o "null";
const dueStringhe = "prima parte" + " " + "seconda parte"; // il "+" si chiama operatore di concatenamento;

console.log(typeof userInput); // null -> "object" || stringa -> "string";

const typeOfInput = typeof(userInput);

if 
(typeOfInput === "string") // condizione
{ // corpo dell'if
  console.log("L'utente ha inserito una stringa, evviva!");
  console.log("Stringa inserita =", userInput);
}

  // Come si definisce un Obj
  let teacher = {
    firstName: "Luca", // chiave (firstName) e valore (Luca)
    lastName: "Pagliaro", // chiave (lastName) e valore (Pagliaro)
    age: 28, // chiave (age) e valore (28)
    skills: ["JavaScript", "HTML", "CSS"],
    address: {
      city: "Catania"
    }
  };
  let insegnante = teacher; // referenza
  // unico modo per ottenere una copia per valore: structuredClone(teacher)

  insegnante.age = 35;

  console.log("teacher", teacher);
  console.log("insegnante", insegnante);

// Alcuni metodi/props di stringhe
const myName = "luca";
const firstChar = myName.charAt(0); // prendiamo il primo carattere
console.log("firstChar:", firstChar);

const otherChars = myName.substring(1); // prendiamo gli altri caratteri
console.log("otherChars:", otherChars);

const firstCharToUpper = firstChar.toUpperCase();

const output = firstCharToUpper.concat(otherChars);
console.log("output:", output);


// Array / Obj
console.clear();

(function () {
  const string = "sono una stringa"; // valore

  if (string === "sono una stringa") {
    console.log("Luca aveva ragione");
  }

  // Come si definisce un Obj
  let teacher = {
    firstName: "Luca", // chiave (firstName) e valore (Luca)
    lastName: "Pagliaro", // chiave (lastName) e valore (Pagliaro)
    age: 28, // chiave (age) e valore (28)
    skills: ["JavaScript", "HTML", "CSS"],
    address: {
      city: "Catania"
    }
  };
  let insegnante = teacher; // referenza
  // unico modo per ottenere una copia per valore: structuredClone(teacher)

  insegnante.age = 35;

  console.log("teacher", teacher);
  console.log("insegnante", insegnante);

  // Comparazione tra OBJ non avviene per valore, ma solo per indirizzo o referenza
  // const teacherCopy = {
  //   firstName: "Luca",
  //   lastName: "Pagliaro",
  //   age: 28
  // };

  // if (teacher === insegnante) {
  //   console.log("i due obj sono uguali");
  // } else {
  //   console.log("i due obj NON sono uguali");
  // }

  // Array

  const array = ["Razvan", "Costanza", "Ali", "Daniele", "Nicola"];
  console.log(typeof array);

  // Come accedere/modificare elementi di un array/obj
  console.clear();
  console.log(teacher);
  console.log(teacher.firstName);
  console.log(teacher["lastName"]);
  console.log(array[2], array[3]); // [X] che sta all'indirizzo/chiave X
  console.log("Città =", teacher.address.city);
  console.log("Prima skill =", teacher.skills.at(1));

  // togliere elementi?
  const arrayCopy = array; // copio la referenza
  console.log(array.toString());
  // 1. togliere l'ultimo elemento
  const lastEl = arrayCopy.pop();
  console.log(lastEl, array.toString());
  // 2. togliere il primo
  const firstEl = arrayCopy.shift(); // Non ottimizzato!! Usare con cautela.
  console.log(firstEl, array.toString());
  // 3. slice/splice
  const removed = arrayCopy.splice(1, 2); // partendo da indice 1 vogliamo togliere 2 elementi
  console.log(removed, array.toString());

  // aggiungere:
  array.unshift("Gianluca"); // unshift() -> ad indice 0
  array.push("Aurora"); // alla fine

  console.log(array.toString());

  // modificare ad indice
  console.log(array.toString());

  // Ciclare
  // ( CONDIZIONE DI INIZIO, CONDIZIONE DI Proseguo, CODICE PER OGNI ITERAZIONE )
  // Definiano una var con valore 0;
  // Vogliamo che la variabile sia inferiore alla lunghezza dell'array
  // Voglio che ad ogni giro index sia incrementato
  for (let index = 0; index < array.length; index = index + 1) {
    const name = array[index];
    console.log(index, name);
    console.log("Buon pranzo a ".concat(name));
  }
})();
