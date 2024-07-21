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

// const menu = [ {
//     menuName: "Honey Fried Chicken",
//     description: "Honey Fried Chicken with two country sides.",
//     price: "$10.95"
// },
// {
//     menuName: "Sandwich with one Side",
//     description: "Sandwich of choice served with one side.",
//     price: "$10.95"   
// },
// {
//     menuName: "Slow Smoked Pulled Pork Plate",
//     description: "Pulled pork plate with two sides.",
//     price: "$12.95"   
// }
// {
//     menuName: "Strawberry Cake",
//     description: "Layers of strawberry flavored cake with strawberry flvored cream chesse frosting.",
//     price: "$4.50"   
// }
   





// ]