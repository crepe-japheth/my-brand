const btn = document.querySelector(".toggle");
const nav = document.querySelector(".admin-nav");
console.log(btn)

btn.addEventListener("click", e => {
    if (nav.classList.contains("aside-admin")) {
        nav.classList.remove("aside-admin")
    } else {
        nav.classList.add("aside-admin")
    }
})