
import handleMenuClick from "./handleMenuClick.js";



console.log(handleMenuClick, JSON.parse(localStorage.getItem("curr_user")), localStorage.getItem("curr_user"))

if (JSON.parse(localStorage.getItem("curr_user"))) {
    // alert("You are Logged in!")
    console.log("You are Logged in!")
    location.href = "./shop/shop.html";
}

document.getElementById("loginBtn")?.addEventListener("click", () => {
    location.href = "./login/login.html";
})




document.getElementById("sighupBtn")?.addEventListener("click", () => {

    location.href = "./signUp/sign-up.html"
})

let curr_user = JSON.parse(localStorage.getItem("curr_user")) || [];
document.getElementById("myCart")?.addEventListener("click", () => {
    if (!curr_user || curr_user.length == 0) {
        alert("You are not login!");

    } else {
        // alert(`Already Login as ${curr_user.email}`);
        console.log(`Already Login as ${curr_user.email}`)
        location.href = "./cart/mycart.html";
    }
})


document.getElementById("profile").addEventListener("click", () => {
    if (!curr_user || curr_user.length == 0) {
        alert("You are not login!");

    } else {
        // alert(`Already Login as ${curr_user.email}`);
        console.log(`Already Login as ${curr_user.email}`)

        location.href = "./profile/profile.html";
    }
})



document.querySelector("#my-icon").addEventListener("click", handleMenuClick);




