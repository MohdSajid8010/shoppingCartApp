export default function handleMenuClick() {
    if (document.querySelector("#my-icon").innerText == "menu") {
        document.querySelector("#my-icon").innerText = "close"
    } else {
        document.querySelector("#my-icon").innerText = "menu"

    }
    document.querySelector(".nav-left").classList.toggle("nav-left2");

}