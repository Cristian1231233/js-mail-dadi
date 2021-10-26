
// Chiedere all'utente la sua email
// Controllare se è nella lista di chi può accedere
// Stampare un messaggio appropriato al controllo





 const emailUtente = '';// prompt('Inserisci la tua email');
console.log(emailUtente);

const listEmail = ['Giovanni2@gmail.com', 'Sara2@gmail.com', 'Marco3@gmail.com', 
'Silvio42@gmail.com', 'Carlo23@gmail.com',];
console.log(listEmail);
const emailValida = 'false';

for(let i = 0; i < listEmail.length; i++){
    console.log(listEmail[i]);

if(emailUtente === listEmail[i]){
    emailValida = 'true';
    console.log('emailValida');
}
}
const mail = document.getElementById('email');
mail.innerHTML = emailUtente;
// if(emailValida == true){
//     console.log('puoi accedere');
// }else{
//     console.log('non puoi accedere');
// }


//Giocatore e computer generano un numero da 1 a 6
// Vince il punteggio più alto

let numPlayer = Math.floor(Math.random() *6) +1;
console.log(numPlayer);

let numPc = Math.floor(Math.random() *6) +1;
console.log(numPc);

if(numPlayer > numPc){
    console.log('vince numPlayer');
    let result = document.getElementById('player');
    result.innerHTML = (
        ` Il player ha scelto ${numPlayer} <br>
        Il pc ha scelto ${numPc} <br>
        Quindi vince ${numPlayer}
        `
    )
}else if(numPlayer < numPc){
    console.log('vince numPc');
    let result = document.getElementById('player');
    result.innerHTML = (
        ` Il player ha scelto ${numPlayer} <br>
        Il pc ha scelto ${numPc} <br>
        Quindi vince ${numPc}
        `
    )
}else{
    console.log('pareggio');
    let result = document.getElementById('player');
    result.innerHTML = (
        ` Il player ha scelto ${numPlayer} <br>
        Il pc ha scelto ${numPc} <br>
        Quindi pareggio
        `
    )
}


