import { postData } from "../utils/httpRequest.js";
import { setCookie } from "../utils/cookie.js";
import authHandler from "../utils/authHandler.js";
import {validationForm} from "../utils/validation.js"
const inputBox = document.querySelectorAll("input");
const loginButton = document.querySelector("button");

const submitHandler = async () => {
    const username = inputBox[0].value;
    const password = inputBox[1].value;
    const validation= validationForm(username,password);
    if(!validation) return;
    if (!username || !password) {
        alert("Please enter username and password.");
        return;
    }

    const data = {
        username,
        password
    };

    try {
        const response = await postData("/auth/login", data);
        setCookie(response.token);
        location.assign("index.html")
    } catch (error) {
        console.error("Login failed:", error);
        alert("Login failed! Check the console for details.");
    }
};


authHandler();


loginButton.addEventListener("click", submitHandler);


 



