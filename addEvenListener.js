const h1= document.querySelector('h1')
const input1= document.querySelector('#calcolo1')
const input2= document.querySelector('#calcolo2')
const btn= document.querySelector('#btncalcolo')
const pResult = document.querySelector('#result')

function sommaOnClick () {
    console.log(`Ascoltando l'evento di click`)
    // let somma = Number(input1.value) + Number(input2.value)
    let primoInput = Number(input1.value)
    let secondoInput = Number(input2.value)
    let somma = primoInput + secondoInput
    pResult.innerText = 'La tua somma è: ' + somma
    
}