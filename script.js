let jsonCards = [];
const cardsContainer = document.querySelector('.card-container');
const testDiv = document.querySelector('.text');

window.onload = function() {
    getCards();
    console.log(cardsContainer);
};

async function getCards() {
    try {
        const response = await fetch("memorycards.json");

        if (!response.ok) {
            throw new Error('Failed to load JSON file');
        }

        jsonCards = await response.json();
        const allCards = jsonCards.concat(jsonCards); //using concat to double the information so we have pairs
        

        console.log(jsonCards);
        console.log(allCards);

        shuffleCards(allCards);

    } catch(err) {
        console.log(err);
    }
    
}

function generateCards(cards) {
    cardsContainer.innerHTML = '';

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];

        const cardObject = document.createElement('div');
        cardObject.className = 'card';
        cardObject.id = 'c' + i;
        console.log(cardObject.id);
        cardObject.addEventListener('click', function() {this.classList.toggle('flipped');});

        const cardFront = document.createElement('div');
        cardFront. className = 'front';
        cardFront.id = 'f' + i;

        const cardBack = document.createElement('div');
        cardBack. className = 'back';
        cardBack.id = 'b' + i;
        cardBack.style.backgroundImage = 'url(' + card.image + ')';


        cardObject.appendChild(cardFront);
        cardObject.appendChild(cardBack);
        cardsContainer.appendChild(cardObject);

        console.log(card.image);

    }
}

function shuffleCards(cards) {
    //using the fisher yates shuffle to shuffle the cards
    for (let i = cards.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    console.log(cards);
    generateCards(cards);
    return cards; 
}




