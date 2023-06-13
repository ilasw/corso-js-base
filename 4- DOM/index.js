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
function updateFullName() {
    if (outputEl) {
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

(function () {
    // -- Counter senza EventDelegation --

    // const buttonPlus = document.querySelector('.counter button.plus');
    // const buttonMinus = document.querySelector('.counter button.minus');
    // const spanValue = document.querySelector('.counter span.value');

    // if (spanValue && buttonMinus && buttonPlus) {

    //     buttonPlus.addEventListener('click', () => {
    //         console.log('click su buttonPlus')

    //         const currentValue = Number(spanValue.innerHTML); // torna html dentro il mio span, è sempre un "string"
    //         spanValue.innerHTML = currentValue + 1; // sostituisco html con il nuovo valore incrementato di 1;
    //     })

    //     buttonMinus.addEventListener('click', function () {
    //         console.log(this) // "this" -> elemento buttonMinus

    //         const currentValue = Number(spanValue.innerHTML); // torna html dentro il mio span, è sempre un "string"
    //         spanValue.innerHTML = currentValue - 1; // sostituisco html con il nuovo valore incrementato di 1;
    //     })

    // } else {
    //     console.error('Sei un folle a non avere questo HTML! >:( ')
    // }
})();

(function () {

    const counterEl = document.querySelector('.counter');
    const resultEl = counterEl.querySelector('.value');

    document.addEventListener('click', function(){
        console.log('evento arrivato fino al document');
    })

    counterEl.addEventListener('click', function (event) {
        // evento click
        console.log(event);

        // posso far si che il click non avvenga
        event.preventDefault();

        // questo metodo ferma il fenomeno del bubbling
        event.stopPropagation();

        // è l'elemento che è epicentro del mio evento
        console.log('event.target', event.target)

        // event.currentTarget è counterEl perché è l'elemento che ascolta l'evento
        // console.log('event.currentTarget', event.currentTarget)

        const targetClass = event.target.className;

        if (targetClass === 'plus') {
            resultEl.innerHTML = Number(resultEl.innerHTML) + 1;
        } else if (targetClass === 'minus') {
            resultEl.innerHTML = Number(resultEl.innerHTML) - 1;
        } else {
            console.log('non hai cliccato su nessun button')
        }

        // switch (targetClass) {
        //     case 'plus':{
        //         resultEl.innerHTML = Number(resultEl.innerHTML) + 1;
        //         break;
        //     }
        //     case 'minus':{
        //         resultEl.innerHTML = Number(resultEl.innerHTML) - 1;
        //         break;
        //     }
        //     default:{
        //         console.log('non hai cliccato su nessun button')
        //     }
        // }
    });

})();

