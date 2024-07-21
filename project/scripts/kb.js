
/************************
    Common on All Pages
**************************/ 

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

/************************
          Menu Page
**************************/
const menu = [ 
    {
        menuName: "Honey Fried Chicken",
        description: "Honey Fried Chicken with two country sides.",
        price: "$10.95"
    },
    {
        menuName: "Sandwich with one Side",
        description: "Sandwich of choice served with one side.",
        price: "$10.95"   
    },
    {
        menuName: "Slow Smoked Pulled Pork Plate",
        description: "Pulled pork plate with two sides.",
        price: "$12.95"   
    },
    {
        menuName: "Strawberry Cake",
        description: "Layers of strawberry flavored cake with strawberry flavored cream chesse frosting.",
        price: "$4.50"   
    }

]
 const menuList = document.querySelector("#menuList")

 if (menuList) {
    menu.forEach(item => {
        const itemSelector = document.createElement("div")
        itemSelector.setAttribute("class", "itemSpecial")
        itemSelector.innerHTML = `
            <h3>${item.menuName}</h3>
            <p>${item.description}</p>
            <p>${item.price}</p>
        
        `;   
        menuList.appendChild(itemSelector);

    });
}

/************************
    Contact Us Page
**************************/
let count = localStorage.getItem("count");

const postReview = document.querySelector("#postReview")
if (postReview) {
    postReview.addEventListener("click", () => {
        count++
        localStorage.setItem("count", count)

    });
}

/************************
    Project Review Page
**************************/
const reviewCount = document.querySelector("#reviewCount")
if (reviewCount) {
    reviewCount.innerHTML = localStorage.getItem("count")
}