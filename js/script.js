// Gioco dei dadi, chi fa di più vince
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// VARIABILI
var computer;
var utente;
var vincitore;

// VALORI
computer = Math.floor(Math.random()* 6)+ 1;
utente = Math.floor(Math.random()* 6)+ 1;
vincitore = 'Complimenti, hai vinto :)'

// IF

if (computer > utente) {
  vincitore = 'Hai perso. Ritenta!'
}

else if (computer == utente) {
  vincitore = 'Pareggio'
}

// VEDO SU HTML
document.getElementById('computer').innerHTML += ' ' + computer;
document.getElementById('utente').innerHTML += ' ' + utente;
document.getElementById('punteggio').innerHTML = ' ' + vincitore;
