// Consegna
// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
// BONUS
// Facciamo accendi e spegni:
// Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
// Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
// E così via...
// Per fare questo bonus potremmo aver bisogno di del metodo string.includes() :occhiolino:
// Buon Lavoro e buon divertimento! :sorridere:



// <div>
// <img src="./img-5/white_lamp.png" id="lamp">
// <button id="btn">Accendi</button>
// </div>


// 1. Seleziono gli elementi all'interno del dom

const lamp = document.getElementById("lamp");
const button = document.getElementById("btn");


// 2. Creo una variabile che mi gestisca la lampadina accesa  

const lampOn = `./img-5/yellow_lamp.png`
const lampOff = `./img-5/white_lamp.png`


 // .3 Creo una funzione per la quale al Click di Button la lampadina si accende
 button.addEventListener("click", function(){
 lamp.src = lampOn;});






/* Bonus. (commentare da riga 32 a 35, poi togliere dal commento tutto il codice sottostante)



let isLampOn = false;  // Creo una variabile che mi inizializza la lampadina come spenta

button.addEventListener("click", function(){  //. Creo una funzione per la quale al click di button la lampadina si accende
  if (isLampOn) {
    // Creo delle istruzioni: se la lampadina è accesa, la spengo e cambio il testo del bottone
    lamp.src = lampOff;
    button.textContent = "Accendi";  // Cambia il testo del bottone a "Accendi"
  } else {
    // Se la lampadina è spenta, la accendo e cambio il testo del bottone
    lamp.src = lampOn;
    button.textContent = "Spegni";  // il testo del bottone diventa "Spegni"
  }
  
  isLampOn = !isLampOn; // la negazione mi permette di tenere traccia dello stampo della lampadina. Se prima del click la lampadina è accesa  l'operatore ! la trasforma in false, quindi spegnendola al click. E viceversa. Senza l'operatore ! non si protrarrebbe l'azione e si fermerebbe al primo click.
});

*/