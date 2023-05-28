const emails = ['mario@email.com', 'luigi@email.com', 'maurizio@gmail.com'];

let mail_utente = 'mario@email.com'
let email_trovata = false;

for(let i = 0; i < emails.length; i++) {
    if(mail_utente === emails[i]) {
        email_trovata = true;
    }
}

if(email_trovata) {
    console.log('trovata')
} else {
    console.log('non trovata')
}