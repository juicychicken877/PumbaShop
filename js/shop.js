import { CLOTHES } from './data.js';

var clickedItem;

// men clothes
const MEN_TSHIRTS = CLOTHES.tshirts.men;
const MEN_TROUSERS = CLOTHES.trousers.men;
const MEN_HOODIES = CLOTHES.hoodies.men;
// women clothes
const WOMEN_TSHIRTS = CLOTHES.tshirts.women;
const WOMEN_TROUSERS = CLOTHES.trousers.women;
const WOMEN_HOODIES = CLOTHES.hoodies.women;

function wyswietlUbrania(ktore) {
    let menClothes, womenClothes;
    let menSection = document.getElementById('men_clothes');
    let womenSection = document.getElementById('women_clothes');

    switch(ktore) {
        case 'Koszulki': menClothes = MEN_TSHIRTS; womenClothes = WOMEN_TSHIRTS; break;
        case 'Spodnie': menClothes = MEN_TROUSERS; womenClothes = WOMEN_TROUSERS; break;
        case 'Bluzy': menClothes = MEN_HOODIES; womenClothes = WOMEN_HOODIES; break;
    }

    menClothes.forEach(element => {
        let div = createItemBox(element);
        menSection.appendChild(div);
    });

    womenClothes.forEach(element => {
        let div = createItemBox(element);
        womenSection.appendChild(div);
    })
}

function setClickedItem(element) {
    clickedItem = element;

    localStorage.setItem("name", element.nazwa);
    localStorage.setItem('img', element.zdjecie);
    localStorage.setItem("price", element.cena);
}

function createItemBox(element) {
    let link = document.createElement('a');
    link.href = 'ubranie.html';

    link.addEventListener('click', () => setClickedItem(element));

    let div = document.createElement('div');
    div.classList.add('box_item');

    let img = document.createElement('img');
    img.src = element.zdjecie;

    let header = document.createElement('h2');
    header.textContent = element.nazwa;

    let cena = document.createElement('p');
    cena.textContent = element.cena;

    div.appendChild(img)
    div.appendChild(header);
    div.appendChild(cena);

    link.appendChild(div);

    return link;
}

// make global variable for HTML document to invoke function
window.wyswietlUbrania = wyswietlUbrania;