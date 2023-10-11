/*
Consegna:
> Scrivi un programma che stampi in console i numeri da 1 a 100,
> ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
> Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
> Come faccio a sapere se un numero è divisibile per un altro?
> Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
 1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
 2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
*/

//creo una costante che selezioni il div dentro al quale voglio creare i quadrati
const boxwrapper = document.getElementById('boxwrapper');

//creo un ciclo per la creazione dei quadrati
for(let i = 1; i<=100; i++){

    //dichiaro la variabile a cui associerò i colori 
    let colorfizz;

    /*
    creo un if: se i sara un multiplo di 3 o 5 colorfizz stara alla classe pink
    sennò 
    se è multiplo di 3 starà alla classe verde
    se è multiplo di 5 starà alla classe gialla
    */
    

    if (i % 3 === 0) {

        if(i % 5 === 0) {
            colorfizz ='pink';
        } else {
            colorfizz = 'green';
        }

    } else if (i % 5 === 0) {

        colorfizz = 'yellow';

    } else {
        colorfizz = 'azure';
    }



    //creo una costante che mi crei un div dentro all'html
    let boxfizz = document.createElement('div');
    //inserisco il div dentro al boxwrapper
    boxwrapper.append(boxfizz);
    //do il risultato della variabile colorfizz al div 
    boxfizz.className = `
        box ${colorfizz} 
    `;
    //dico a boxfizz che all'interno della box voglio riportato il valore di i che sarà un numero
    boxfizz.innerHTML = i
}