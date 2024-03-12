const userWord = prompt('Inserisci una parola per verificare se è palindroma').toLowerCase();

console.log(isPalindrome(userWord))

function isPalindrome(possiblePalindrome) {

  const possiblePalindromeReverse = [];

  for (let i = possiblePalindrome.length - 1; i >= 0; i--) {
    possiblePalindromeReverse.push(possiblePalindrome[i])
  }

  let isUserWordPalindrome = true

  for (let i = 0; i < possiblePalindrome.length; i++) {

    if (possiblePalindrome[i] !== possiblePalindromeReverse[i]) {
      isUserWordPalindrome = false;
    }
  }

  return isUserWordPalindrome
}