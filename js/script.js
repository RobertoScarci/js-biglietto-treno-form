// individuo le variabili presenti
const buttonElement = document.querySelector('button');
const numberKm = document.getElementById('area-km');
const userAge = document.getElementById('area-age');
const costperKm = 0.1976;

buttonElement.addEventListener( 'click', function(){

    //Assegno ad una variabile i valori inseriti dall'utente
    const distance = parseFloat(numberKm.value)
    const age = parseInt(userAge.value)
    const outputElement = document.getElementById('total-price');

    if(!numberKm) {
        alert("Inserire di nuovo la distanza!");
        return;
    }

    if(!userAge) {
        alert("Inserisci la tua età!");
        return;
    }

    // Calcolo del prezzo totale
    let ticketCost = numberKm * costperKm;


    // Calcolo del prezzo scontato in base all'età
    if (userAge < 18 ) {
        ticketCost = ticketCost * 17.65 / 100;
    } else if (userAge >= 65 ) {
        ticketCost = ticketCost * 53.27 / 100;
    }

    console.warn(distance, age, ticketCost);

})