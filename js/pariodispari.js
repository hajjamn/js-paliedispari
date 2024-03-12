let finalChoice
finalChoice =  askOddsAndEvens()
console.log(`Pari o dispari: ${finalChoice}`)

let finalNumber = askNumber()
console.log(`Numero lanciato: ${finalNumber}`)

const randomNumber = randomNumberOneToFive();
console.log(`Numero lanciato dal computer: ${randomNumber}`)

const finalResult = finalNumber + randomNumber;
console.log(`Risultato finale: ${finalResult}`)

if (finalChoice === isNumberEven(finalResult)) {
  alert('Hai vinto!')
} else {
  alert('Hai perso!')
}

console.log(`All'inizio hai scelto ${finalChoice} e lanciato il numero ${finalNumber}. Il computer ha lanciato ${randomNumber}, che sommato al tuo numero fa ${finalResult}, che è un numero ${isNumberEven(finalResult)}`)

/* FUNCTIONS */

/* function askOddsAndEvens() {
  let verifiedChoice
  let unverifiedChoice = prompt('Scegli pari o dispari');
  unverifiedChoice = unverifiedChoice.toLowerCase();
  console.log(unverifiedChoice)
  if (unverifiedChoice != 'pari' && unverifiedChoice != 'dispari') {
    alert('La scelta non è valida')
    return askOddsAndEvens()
  } else {
    verifiedChoice = unverifiedChoice;
    return verifiedChoice
  }
} */

function askOddsAndEvens() {
  let verifiedChoice
  let unverifiedChoice
  do {
    unverifiedChoice = prompt('Scegli pari o dispari');
    console.log(unverifiedChoice);
  } while (unverifiedChoice != 'pari' && unverifiedChoice != 'dispari')

  verifiedChoice = unverifiedChoice;
  return unverifiedChoice;
}

function askNumber() {
  let verifiedNumber
  let unverifiedNumber = prompt('Scegli un numero da 1 a 5');
  unverifiedNumber = parseInt(unverifiedNumber);
  console.log(unverifiedNumber)
  if (unverifiedNumber > 5 || unverifiedNumber <= 0 || isNaN(unverifiedNumber)) {
    alert('Il numero inserito non è valido')
    return askNumber()
  } else {
    verifiedNumber = unverifiedNumber;
    return verifiedNumber
  }
}

function randomNumberOneToFive () {
  let max = 5;
  let min = 1;
  return Math.floor(Math.random() * max) + min;
}

function isNumberEven (number) {
  if (number % 2 === 0) {
    return 'pari';
  } else {
    return 'dispari';
  }
}