// ProductPage.js

function changeProductImage(thumbnail) {
    var mainImage = document.getElementById('mainProductImage');
    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;
}