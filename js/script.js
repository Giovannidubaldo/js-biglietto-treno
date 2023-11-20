// punto 1
let km = prompt('Quanti km da percorrere?');

// punto 2
let eta = prompt('Inserisci la tua età');

// punto 3
let prezzo = 0.21 * km;
console.log(prezzo);

// bonus
document.getElementById('prezzo-biglietto').innerHTML = 'Il prezzo del tuo biglietto è: '

// punto 4
if(eta < 18){
    prezzo = prezzo - prezzo * 20 / 100;
    console.log(prezzo);
    document.getElementById('prezzo-biglietto').innerHTML = document.getElementById('prezzo-biglietto').innerHTML 
    + prezzo + '€' + ' ' + 'Prezzo scontato del 20%'
}
else if(eta >= 65){
    prezzo = prezzo - prezzo * 40 / 100;
    console.log(prezzo);
    document.getElementById('prezzo-biglietto').innerHTML = document.getElementById('prezzo-biglietto').innerHTML 
    + prezzo + '€' + ' ' + 'Prezzo scontato del 40%'
}
else{
    prezzo = prezzo;
    console.log(prezzo);
    document.getElementById('prezzo-biglietto').innerHTML = document.getElementById('prezzo-biglietto').innerHTML 
    + prezzo + '€' + ' ' + 'Prezzo base senza sconto'
}

