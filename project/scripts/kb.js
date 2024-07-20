let currentYear = document.querySelector("#currentYear");
let lastModified = document.querySelector("#lastModified");
const today = new Date();
currentYear.textContent = today.getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`



//Code for hamburger button
const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

const dessert = [ {
    dessertName: "Hummingbird Cake",
    description: "Spiced pineapple-banana cake topped with cream cheese frosting and pecans.",
    price: "$26"
},
{
    dessertName: "Carrot Cake",
    description: "Spiced flavor, super moist crumb, and velvety cream cheese frosting.",
    price: "$25"   
},
{
    dessertName: "Authentic German Chocolate Cake",
    description: "Super moist, mild chocolate, and frosted with the most delectable Pecan Coconut Frosting.",
    price: "$25"   
}
{
    dessertName: "Strawberry Cake",
    description: "Layers of strawberry flavored cake with strawberry flvored cream chesse frosting.",
    price: "$26"   
}
   





]