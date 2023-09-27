import handleMenuClick from "../handleMenuClick.js";

let fnameEl = document.getElementById("fname");
let lnameEl = document.getElementById("lname");
let OldPasswEl = document.getElementById("OldPassw");
let NewPassEl = document.getElementById("NewPass");
let cpassEl = document.getElementById("cpass");

let savwInfoBtn = document.getElementById("savwInfoBtn");
let ChangePasswordBtn = document.getElementById("ChangePasswordBtn");
let LogoutBtn = document.getElementById("LogoutBtn");

let user_arr = JSON.parse(localStorage.getItem("user_arr")) || [];
let curr_user = JSON.parse(localStorage.getItem("curr_user"));

//guard
function z() {
    if (!user_arr || user_arr.legth == 0) {
        alert("Sign up first!")
        location.href = "../signUp/sign-up.html"
        return;
    }
    if (curr_user) {
        fnameEl.value = curr_user.fname;
        lnameEl.value = curr_user.lname
    } else {
        alert("curr user not found, Login First!");
        location.href = "../login/login.html"
        return;
    }

}

z();


savwInfoBtn.addEventListener("click", () => {

    if (fnameEl.value.trim() == "" || lnameEl.value.trim() == "") {
        alert("all fields is mandatory!");
        return;
    }

    if (!user_arr) {
        alert("user not found.")
    } else {
        //update the profile
        user_arr.forEach(obj => {
            if (obj.email == curr_user.email) {
                obj["fname"] = fnameEl.value;
                obj["lname"] = lnameEl.value;
            }
        });

        localStorage.setItem("user_arr", JSON.stringify(user_arr));


        curr_user["fname"] = fnameEl.value;
        curr_user["lname"] = lnameEl.value;
        localStorage.setItem("curr_user", JSON.stringify(curr_user))

        fnameEl.value = ""
        lnameEl.value = ""
        alert("User info saved successfully!");
    }
})



ChangePasswordBtn.addEventListener("click", () => {
    if (OldPasswEl.value.trim() == "" ||
        NewPassEl.value.trim() == "" ||
        cpassEl.value.trim() == "") {
        alert("all field is mandatory!")
        return;
    }

    if (NewPassEl.value.trim() !== cpassEl.value.trim()) {
        alert("confirm password not matched!")
        return;
    }

    if (OldPasswEl.value != curr_user.password) {
        alert("Old password not match!");
        return;
    }

    if (!user_arr) {
        alert("users not found!")
    } else {
        //update the password
        user_arr.forEach((obj) => {
            if (obj.email == curr_user.email) {
                obj["password"] = NewPassEl.value;
            }
        })
        localStorage.setItem("user_arr", JSON.stringify(user_arr));

        curr_user["password"] = NewPassEl.value;
        localStorage.setItem("curr_user", JSON.stringify(curr_user))


        OldPasswEl.value = ""
        NewPassEl.value = ""
        cpassEl.value = ""
        alert("Password changed successfully!");
    }



})



LogoutBtn.addEventListener("click", () => {

    if (confirm("do you want to log out?")) {
        localStorage.removeItem("curr_user");
        alert("successfully log out!");
        location.href = "../login/login.html"
    }
})


document.querySelector("#my-icon").addEventListener("click", handleMenuClick)

