import { getCookie } from "../utils/cookie.js";
import { getData } from "../utils/httpRequest.js";
const loginButton=document.getElementById("login");
const dashboardButton=document.getElementById("dashboard");

const init=async()=>{
    const cookie=getCookie();
    if(cookie){
        loginButton.style.display="none";
    }else{
        dashboardButton.style.display="none";
    }
    const allproduct=await getData("products");
    console.log(allproduct);
    
}

document.addEventListener("DOMContentLoaded",init);