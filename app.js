const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const searchIcon = document.getElementById("search-icon");
const nav = document.querySelector(".nav");
const searchInput = document.querySelector(".search-input");
const menuToggle = document.querySelector(".menu-toggle");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
