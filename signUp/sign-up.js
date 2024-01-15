
import handleMenuClick from "../handleMenuClick.js";

console.log(handleMenuClick)

let fnameEl = document.getElementById("fname");
let lnameEl = document.getElementById("lname");
let EmailEl = document.getElementById("Email");
let PassEl = document.getElementById("Pass");
let cpassEl = document.getElementById("cpass");

function isValidate() {

    let fname = fnameEl.value.trim()
    let lname = lnameEl.value.trim()
    let Email = EmailEl.value.trim()
    let Pass = PassEl.value.trim()
    let cpass = cpassEl.value.trim()

    if (!fname || !lname || !Email || !Pass || !cpass) {

        alert("All field is mandatory!")
        return false;
    }

    if (Pass != cpass) {
        alert("confirm password not match!")
        return false;
    }
    return true
}

function isUniqueEmail() {
    let user_arr = JSON.parse(localStorage.getItem("user_arr")) || [];
    for (let obj of user_arr) {
        if (obj.email == EmailEl.value) {
            alert('Email is already used. Please use a different email.');
            return false;
        }
    }
    return true
}

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()

    if (isValidate() == false) return;
    //ensure unique email
    if (isUniqueEmail() == false) return;


    let user_arr = JSON.parse(localStorage.getItem("user_arr")) || [];
    user_arr.push({
        fname: fnameEl.value,
        lname: lnameEl.value,
        email: EmailEl.value,
        password: PassEl.value,
    })

    localStorage.setItem("user_arr", JSON.stringify(user_arr));
    location.href = "../login/login.html"
})









let curr_user = JSON.parse(localStorage.getItem("curr_user")) || [];

document.querySelector("#myCart").addEventListener("click", () => {

    if (!curr_user || curr_user.length == 0) {
        alert("You are not login!")

    } else {
        // alert(`Already Login as ${curr_user.email}`);
        console.log(`Already Login as ${curr_user.email}`)

        location.href = "../cart/mycart.html"
    }
})


document.querySelector("#profile").addEventListener("click", () => {

    if (!curr_user || curr_user.length == 0) {
        alert("You are not login!")

    } else {
        // alert(`Already Login as ${curr_user.email}`)
        console.log(`Already Login as ${curr_user.email}`)
        location.href = "../profile/profile.html"
    }
})

document.querySelector("#my-icon").addEventListener("click", handleMenuClick)