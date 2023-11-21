// punto 1
let km = prompt('Quanti km da percorrere?');

// punto 2
let eta = prompt('Inserisci la tua età');

// punto 3
let prezzo = (0.21 * km).toFixed(2);
console.log(prezzo);

// punto 4 - punto 5 - punto 6
if(eta < 18){
    prezzo = (prezzo - prezzo * 20 / 100).toFixed(2);
}
else if(eta >= 65){
    prezzo = (prezzo - prezzo * 40 / 100).toFixed(2);
}
else{
    prezzo = prezzo
}

// Bonus
console.log(prezzo);
document.getElementById('prezzo-biglietto').innerHTML = 'Il prezzo del tuo biglietto è: ' + prezzo + '€'

