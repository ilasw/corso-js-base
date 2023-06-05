console.log("Ciao mondo!");

// Per scrivere un codice qualsiasi abbiamo bisogno di 3 cose:
// 1. riuscire a salvare un dato in memoria e fare piccole operazioni;
// 2. Avere una struttura condizionale
// 3. eseguire cicli operativi su struttura

// Variabili
// sono alias che rappresentano in modo riconoscibile una particolare
// allocazione di memoria;

// var  -> la keyword che identifica la definizione di una variable
// name -> nome della variabile che potrò usare per richiamare/usare il valore a lei assegnata
// =    -> operatore di assegnazione
// "Pippo" -> stringa che voglio assegnare alla mia variable;
// ; -> viene usato per separare una linea dall'altra
var name = "Pippo";

// Prima dichiaro e dopo assegno;
var lastName; // dichiarare una variable è vuota
lastName = "Pluto"; // assegnazione di valore;

// alt + shift + giù
console.clear();
console.info("Stampo il nome");
console.log(name);
console.warn("Stampo il cognome");
console.log(lastName);

// Modi per dichiarare una variable:

// Var -> Riassegnabile, modificabile
console.clear();

console.log(typeof "Ciao");
console.log(typeof 14);
console.log(typeof "14");

console.log("#######");

console.log(typeof isolaCheNonCe);
console.log(typeof varVariable);

var varVariable = 1; // assegno un valore numerico "1"
console.log("valore varVariable");
console.log(varVariable);
console.log(typeof varVariable); // typeof ci torna il tipo di valore dentro una variabile/valore

varVariable = 2;
console.log("valore varVariable");
console.log(varVariable);

varVariable = "Ciao";
console.log("valore varVariable");
console.log(varVariable);
console.log(typeof varVariable); // typeof ci torna il tipo di valore dentro una variabile/valore

// Let -> riassegnabile e modificabile
console.clear();

console.log(letVariable);

let letVariable = "prova"; // assegnazione
console.log(letVariable);

letVariable = "nuovoValore"; // riassegnazione
console.log(letVariable);

// Const -> non è riassegnabile, ma è `modificabile`
const constVariable = "prova";
console.log(constVariable);

// constVariable = "nuovoValore";

// ---- NaN
console.clear();
const value = Number("ciao");
console.log(value);
console.log(typeof value);

const number = 12;
const string = String(number);
console.log(string);
console.log(typeof string);

console.log("4" ** 2);

// Boolean();
console.log("12" === 12);

// --- String
let saluto = "Ciao";
const stringa = `${saluto}
persona!`; // backtick

console.log(stringa);

saluto = "Salve";

console.log(saluto);
console.log(stringa);
