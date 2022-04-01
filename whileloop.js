const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard = ''

while(currentCard!=='spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  // Math.floor(Math.random() * 4) will give us a random number from 0 to 3. We’ll use this number to index the cards array, and assign the value of currentCard to a random element from that array.
  console.log(currentCard)
}

