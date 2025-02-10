import { getCookie } from "../utils/cookie.js";

const init=()=>{
    const cookie=getCookie();
    if(!cookie){
        location.assign("home.html");
    }
}

document.addEventListener("DOMContentLoaded",init);