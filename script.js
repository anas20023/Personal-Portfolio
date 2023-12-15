// For CV
let alt_cv;
alt_cv = document.querySelector("#not_av");

function CV() {
  alt_cv.classList.remove("hidden");
  alt_cv.classList.add("flex");
}
function Close_alt() {
  alt_cv.classList.remove("flex");
  alt_cv.classList.add("hidden");
}

// For Navigation Bar
let hide = document.querySelector("#covered");
let cross = document.querySelector("#Showme");

function Hide_btn() {
  hide.classList.remove("-left-full");
  hide.classList.add("left-0");
}
function Showme() {
  hide.classList.remove("left-0");
  hide.classList.add("-left-full");
}

// Dark Mode /// Light Mode

let toogle = document.querySelector("#darkmode");
toogle.addEventListener("click", () => {
  document.documentElement.classList.add("dark");
});
