const giocatore = Math.floor(Math.random() * 6) + 1;
const computer = Math.floor(Math.random() * 6) + 1;

console.log(`giocatore: ${giocatore}, computer: ${computer}`);

if (giocatore > computer) {
    console.log('giocatore vince!')
} else if (computer > giocatore) {
    console.log('computer vince!');
} else {
    console.log('pareggio!');
}