import {
    getCookie
} from "../utils/cookie.js";
import {
    getData
} from "../utils/httpRequest.js";
const loginButton = document.getElementById("login");
const dashboardButton = document.getElementById("dashboard");
const mainContent = document.getElementById("products");
const showProducts = (products) => {
    mainContent.innerHTML = "";
    products.forEach((product) => {
        const jsx = `
        <div>
        <img alt=${product.title} src="${product.image}"/>
        <h4>${product.title}</h4>
        <div id="price">
        <p>${product.price}</p>
        <button>
        Buy
        <i class="fa-solid fa-cart-shopping"></i>
        </button>
        </div>
        <div class="rate">
        <i class="fa-solid fa-star"></i>
        <span>${product.rating.rate}</span>
        </div>
        <div class="count">
        <i class="fa-solid fa-user"></i>
        <span>${product.rating.count}</span>
        </div>
        </div>
        `
        mainContent.innerHTML+=jsx
    });
 
}
const init = async () => {
    const cookie = getCookie();
    if (cookie) {
        loginButton.style.display = "none";
    } else {
        dashboardButton.style.display = "none";
    }
    const allproduct = await getData("products");
    showProducts(allproduct)

}

document.addEventListener("DOMContentLoaded", init);