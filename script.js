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

        console.log(jsonCards);

    } catch(err) {
        return err;
    }
    
}

function fade(div) {
    const card = div.parentElement; 
    console.log(card.id);
    
    card.style.transform = 'rotateX(180deg)';
    
    setTimeout(() => {
        card.style.transform = 'rotateX(0deg)';
    }, 3000);
}