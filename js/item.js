function setItem() {
    let imgHTML = document.getElementById('img');
    let nameHTML = document.getElementById('name');
    let priceHTML = document.getElementById('price');

    let price = localStorage.getItem('price');
    let name = localStorage.getItem('name');
    let img = localStorage.getItem('img');

    imgHTML.src = img;
    nameHTML.textContent = name;
    priceHTML.textContent = price;
}