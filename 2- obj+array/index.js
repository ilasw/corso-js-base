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


// Alcuni metodi/props di stringhe
const myName = "luca";
const firstChar = myName.charAt(0); // prendiamo il primo carattere
console.log("firstChar:", firstChar);

const otherChars = myName.substring(1); // prendiamo gli altri caratteri
console.log("otherChars:", otherChars);

const firstCharToUpper = firstChar.toUpperCase();

const output = firstCharToUpper.concat(otherChars);
console.log("output:", output);