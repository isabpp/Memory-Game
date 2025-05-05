
function selectCard() {
    
}

function fade(div) {
    const card = div.parentElement; 
    console.log(card.id);
    
    card.style.transform = 'rotateX(180deg)';
    
    setTimeout(() => {
        card.style.transform = 'rotateX(0deg)';
    }, 3000);
}