//creo una costante che selezioni il div dentro al quale voglio creare i quadrati
const boxwrapper = document.getElementById('boxwrapper');

//creo un ciclo per la creazione dei quadrati
for(let i = 1; i<=100; i++){

    //dichiaro la variabile a cui associerò i colori 
    let colorfizz;

    //creo una costante che mi crei un div dentro all'html
    let boxfizz = document.createElement('div');

    /*
    creo un if: se i sara un multiplo di 3 o 5 colorfizz stara alla classe pink
    sennò 
    se è multiplo di 3 starà alla classe verde
    se è multiplo di 5 starà alla classe gialla
    */

    if (i % 3 === 0) {

        if(i % 5 === 0) {
            colorfizz ='pink';
            boxfizz.innerHTML = 'fizzbuzz';
        } else {
            colorfizz = 'green';
            boxfizz.innerHTML = 'fizz';
        }

    } else if (i % 5 === 0) {

        colorfizz = 'yellow';
        boxfizz.innerHTML = 'buzz';

    } else {
        colorfizz = 'azure';
        boxfizz.innerHTML = i;
    }

    //inserisco il div dentro al boxwrapper
    boxwrapper.append(boxfizz);
    //do il risultato della variabile colorfizz al div 
    boxfizz.className = `
        box ${colorfizz} d-flex justify-content-center align-items-center rounded-4
    `;
    //dico a boxfizz che all'interno della box voglio riportato il valore di i che sarà un numero
}