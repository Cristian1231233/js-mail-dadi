
// Chiedere all'utente la sua email
// Controllare se è nella lista di chi può accedere
// Stampare un messaggio appropriato al controllo





const emailUtente = 'Giovanni2gmail.com' ;//Inserisci la tua email
console.log(emailUtente);

const listEmail = ['Giovanni2@gmail.com', 'Sara2@gmail.com', 'Marco3@gmail.com', 
'Silvio42@gmail.com', 'Carlo23@gmail.com',];
console.log(listEmail);
const emailValida = 'false';

for(let i = 0; i < (listEmail.length); i++){
    console.log(listEmail[i]);

if(emailUtente === listEmail[i]){
    emailValida = 'true';
    console.log('email trovata');
    console.log('ciao');
}
}