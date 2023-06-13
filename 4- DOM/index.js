import './style.css';

console.log('Ciao!');

console.log(window); // è l'oggetto globale
console.log(globalThis);
console.log(document); // il DOM

// Come cercare elementi nel mio DOM
const mioDiv = document.querySelector('.pausa'); // null || primo l'elemento trovato
console.log(mioDiv);

// controllo se esiste il div
if (mioDiv) {
    // assegno un "display: block" 
    mioDiv.style.display = 'block';

    const h1 = mioDiv.querySelector('h1');
    console.log(h1);
}

console.log('tag script', document.querySelectorAll('div'));

const allScripts = document.querySelectorAll('script');
console.log(allScripts);
// puoi convertire una NodeList in array usando
const arrayAllScripts = Array.from(allScripts);
console.log(arrayAllScripts);

// Rinfrescata DOM, selector, eventi
// setTimeout, setInterval
// time.is
// 

// Abbiamo definito una function globale in modo da poterla usare in HTML
// dentro l'oninput abbiamo richiamato questa function così: 
// oninput="logOnInput(event)"
// event dentro HTML è una keyword che indica l'evento stesso
const firstNameInputSelector = `form input[autocomplete="given-name"]`;
const firstNameInput = document.querySelector(firstNameInputSelector);

const outputEl = document.querySelector('.output span');

let nome = '';
let cognome = '';

if (firstNameInput) {
    console.log(firstNameInput);
    
    // aggiungo un listener di eventi al mio firstNameInput
    // ascolto l'evento "input" usando la function che passo come 2° param
    firstNameInput.addEventListener('input', function (ev) {
        const mioCampo = ev.target; // prendo l'elemento dell'html che fa partire l'evento
        nome = mioCampo.value;
        updateFullName();
    })
}

window.logOnInput = function (ev) {
    const target = ev.target;
    cognome = target.value;
    updateFullName();
}

// aggiorniamo il nostro output con nome e cognome
function updateFullName (){
    if(outputEl){
        outputEl.innerHTML = `${nome} ${cognome}`;
    }
}


// Esercizio:
// in html:
// <button class="minus">-</button>
// <span class="value">0</span>
// <button class="plus">+</button>

// scrivere su JS il codice che permetta di:
// definire 1 variabile per ogni elemento in HTML (+, -, value);
// inserire 1 event listener per i due bottoni
// al click su ".minus" diminuiamo il valore dello span di uno e lo salviamo in html
// al click su ".plus" aumentiamo il valore dello span di uno e lo salviamo in html

document.querySelector() // per prendere gli elementi
console.log(outputEl.innerHTML) // torna lo HTML del mio elemento
outputEl.innerHTML = 2 // salva lo HTML nel mio elemento

buttonPlus.addEventListener('click', function(){

});