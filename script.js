let jsonCards = [];

window.onload = function() {
    getCards();
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
        return err;
    }
    
}

function shuffleCards(cards) {
    //using the fisher yates shuffle to shuffle the cards
    for (let i = cards.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    console.log(cards);
    return cards; 
}

function fade(div) {
    const card = div.parentElement; 
    console.log(card.id);
    
    card.style.transform = 'rotateX(180deg)';
    
    setTimeout(() => {
        card.style.transform = 'rotateX(0deg)';
    }, 3000);
}