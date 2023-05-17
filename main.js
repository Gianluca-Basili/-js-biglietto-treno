// richiesta numeri chilometri all'utente 
let chilometri = parseInt( prompt('quanti chilometri devi percorrere?')); 
console.log(chilometri);

// richiesta eta all'utente 
let eta = parseInt( prompt('quanti anni hai?'));
console.log(eta);

//calcolo prezzo del biglietto base
let prezzo_base = (chilometri * 0.21);
console.log( prezzo_base);

// calcolo biglietto eta inferiore ai 18 anni
if(eta<18){
    console.log(eta);
    prezzo_biglietto = (prezzo_base * 20/100);
    console.log(prezzo_biglietto);

}else if (eta >= 18 && eta <= 65) //calcolo biglietto eta compresa tra i 18 e i 65
{
    console.log(eta)
    prezzo_biglietto = (prezzo_base)
    console.log(prezzo_biglietto)

}else if (eta > 65) //calcolo biglietto eta maggiore di 65 anni
{
    prezzo_biglietto = (prezzo_base * 40/100);
    console.log(prezzo_biglietto);
}
