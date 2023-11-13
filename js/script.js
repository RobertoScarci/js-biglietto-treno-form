// individuo le variabili presenti
const button = document.getElementById("button");

button.addEventListener("click", function() {

    //Assegno ad una variabile i valori inseriti dall'utente

    const numberKm = document.getElementById("area-km").value;
    const userAge = document.getElementById("area-age").value;
    const outputElement = document.getElementById('total-price')

    if (!numberKm) {
        alert("Distanza non valida!");
        return;
    }

    if(!userAge) {
        alert("Inserisci una fascia d'eta' per continuare");
        return;
    }

    // Calcolo del prezzo totale
    let ticketCost = numberKm * 0.1976;


    // Calcolo del prezzo scontato in base all'età
    if (userAge < 18 ) {
        console.log("teen")
        ticketCost = ticketCost * 17.65 / 100;
    } else if (userAge >= 65 ) {
        console.log("elder")
        ticketCost = ticketCost * 53.27 / 100;
    }

    outputElement.innerHTML = ticketCost


})