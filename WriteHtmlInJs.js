const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const paragraph = document.querySelector('.paragraph');
const pId = document.querySelector('#pId');
const input = document.querySelector('input')


console.log({
    h1,
    p,
    paragraph,
    pId,
    input
})


console.log(input.value)

//NON USARE LA PROPRIETA INNERHTML PERCHE GLI USUARI POTREBBERO USARE CODICE MALIZIOSO
// POTENDO ESEGUIRE CODICE JAVASCRIPT
h1.innerHTML = "Ciao sto programmando";

//INVECE DI INNERHTML USA INNERTEXT CHE TRASFORMA TUTTO IN STRINGHE

h1.innerText = "Ciao sto programmando <br>"

console.log(h1.getAttribute('schermo'))
console.log(h1.getAttribute('class'))
h1.setAttribute('class', 'rosso')

//aggiungere una classe
h1.classList.add('giallo')

//rimuovere una classse
h1.classList.remove('giallo')

//aggiungere se non abbiamo la classe, o rimuovere la classe se l'abbiamo
h1.classList.toggle('blue')
h1.classList.toggle('blue')

console.log(input.value='ciao') // cambia il valore di value sul html non essendo più 123 ma ciao