
const tipiDiAbbonamenti = {
    Free: "Puoi usare solo i corsi gratis",
    Basic: "Puoi usare i corsi di platzi in un mese",
    Expert: "Puoi usare i corsi di platzi in un anno",
    ExpertDuo: "Tu e un altra persona potete usare i corsi di plazti in un anno"
};

console.log(tipiDiAbbonamenti.Free)  // Puoi usare solo i corsi gratis
console.log(tipiDiAbbonamenti['Free'])  // usando questa sintassi da lo stesso risultato. output: Puoi usare solo i corsi gratis.

const abbonamento = 'Free'

console.log(tipiDiAbbonamenti[abbonamento])


function ottenereAbbonamento (abbonamento) {

    if (tipiDiAbbonamenti[abbonamento]) {
        
        console.log(tipiDiAbbonamenti[abbonamento])
        return;

    }

    console.warn('Tipo di abbonamento non valido')

}

ottenereAbbonamento(abbonamento);

