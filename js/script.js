// punto 1
let km = prompt('Quanti km da percorrere?');

// punto 2
let eta = prompt('Inserisci la tua età');

// punto 3
let prezzo = 0.21 * km;
console.log(prezzo)

// punto 4
if(eta < 18){
    prezzo = prezzo - prezzo * 20 / 100 + ' ' + 'Prezzo scontato del 20%'
    console.log(prezzo)
}
else if(eta >= 65){
    prezzo = prezzo - prezzo * 40 / 100 + ' ' + 'Prezzo scontato del 40%'
    console.log(prezzo)
}

