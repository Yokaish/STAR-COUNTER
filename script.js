const star = document.getElementById('star');
const addStarBtn = document.getElementById('add-star-btn');
const resetStarBtn = document.getElementById('reset-star-btn');
const starCounter = document.getElementById('star-counter');
const title = document.getElementById('title');

let stars = [];
stars.push(star);
let counter;


function isOn(element) {
    return element.src.indexOf('desligado') === -1; // Retorna true se 'desligado' não estiver no src
}

function verifyBright(elementStar) {
    if (isOn(elementStar)) {
        elementStar.addEventListener('mouseover', function() {
            elementStar.classList.add('ligado');
        });
        
        elementStar.addEventListener('mouseleave', function() {
            elementStar.classList.remove('ligado');
        });
    } else {
        elementStar.addEventListener('mouseleave', function() {
            elementStar.classList.remove('ligado');
        });
    }
}

verifyBright(star);

function changeBtnColorBlack(btn) {
    btn.addEventListener('mouseover', function(){
        btn.style.backgroundColor = 'black';
        btn.style.color = 'white';
        btn.style.transition = '0.8s'
    })
    btn.addEventListener('mouseleave', function(){
        btn.style.background = 'none';
        btn.style.color = 'black';
        btn.style.border = '0.5px solid black';
        btn.style.transition = '0.8s ease'
    })
}

function changeBtnColorWhite(btn) {
    btn.addEventListener('mouseover', function(){
        btn.style.backgroundColor = 'white';
        btn.style.color = 'black';
        btn.style.transition = '0.8s'
    })
    btn.addEventListener('mouseleave', function(){
        btn.style.background = 'none';
        btn.style.color = 'white';
        btn.style.border = '0.5px solid white';
        btn.style.transition = '0.8s ease'
    })
}

addStarBtn.addEventListener('click', function() {
    const starContainer = document.getElementById('star-add-container');
    const newStar = document.createElement('img');
    newStar.src = 'Group 1272628224.png';
    newStar.classList.add('star-class', 'desligado');
    starContainer.appendChild(newStar);

    newStar.offsetHeight; // Força o reflow

    // Adiciona a classe "visible" para iniciar a transição
    setTimeout(() => {
        newStar.classList.add('visible');
    }, 10); // Pequeno atraso para garantir que o estilo inicial seja aplicado

    stars.push(newStar);
    counter = stars.length;
    starCounter.textContent = counter;
    verifyBright(newStar);

    starContainer.scrollTop = starContainer.scrollHeight;

    if (counter == 50) {
        document.body.style.backgroundColor = 'white';
        starCounter.style.color = 'black';
        addStarBtn.style.color = 'black';
        addStarBtn.style.border = '0.5px solid black';
        resetStarBtn.style.color = 'black';
        resetStarBtn.style.border = '0.5px solid black';
        title.style.color = 'black';
        changeBtnColorBlack(addStarBtn);
        changeBtnColorBlack(resetStarBtn);
    }

    resetStarBtn.addEventListener('click', function() {
        stars.forEach(newStar => {
            starContainer.removeChild(newStar);
            starContainer.appendChild(star);
        });
        stars = [document.getElementById('star')]; // Reinicializa o array com a estrela original
        starContainer.appendChild(stars[0]);
        starCounter.textContent = stars.length;
        document.body.style.backgroundColor = 'black';
        starCounter.style.color = 'white';
        title.style.color = 'white';
        changeBtnColorWhite(resetStarBtn);
        changeBtnColorWhite(addStarBtn);
        addStarBtn.style.color = 'white';
        addStarBtn.style.border = '0.5px solid white';
        resetStarBtn.style.color = 'white';
        resetStarBtn.style.border = '0.5px solid white';
    })
})



