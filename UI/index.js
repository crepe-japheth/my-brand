'use strict';

const btn = document.querySelector(".toggle");
const nav = document.querySelector(".admin-nav");
const blogForm = document.querySelector(".blog-form")


btn.addEventListener("click", e => {
    if (nav.classList.contains("aside-admin")) {
        nav.classList.remove("aside-admin")
    } else {
        nav.classList.add("aside-admin")
    }
})

// creating blog post in local storage