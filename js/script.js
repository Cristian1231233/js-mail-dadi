
// Chiedere all'utente la sua email
// Controllare se è nella lista di chi può accedere
// Stampare un messaggio appropriato al controllo





const emailUtente = 'Giovanni2gmail.com' ;//Inserisci la tua email
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
}else if(numPlayer < numPc){
    console.log('vince numPc');
}else{
    console.log('pareggio');
}
