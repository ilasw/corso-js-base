import './style.css';

console.log('Ciao!');

console.log(window); // è l'oggetto globale
console.log(globalThis);
console.log(document); // il DOM

// Come cercare elementi nel mio DOM
const mioDiv = document.querySelector('.pausa'); // null || primo l'elemento trovato
console.log(mioDiv);

// controllo se esiste il div
if(mioDiv){
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

window.logOnInput = function (ev){
    const target = ev.target;
    console.dir(target);
    console.log(`Hai digitato: "${target.value}"`);
}
