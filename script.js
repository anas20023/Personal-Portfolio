function CV() {
  document.getElementById("al_open").style.display = "flex";
}
function Close_alt() {
  document.getElementById("al_open").style.display = "none";
}


// For Navigation Bar
let hide=document.querySelector("#covered");
let cross=document.querySelector("#Showme");

function Hide_btn()
{
  hide.classList.remove("-left-full");
  hide.classList.add("left-0");

}
function Showme(){
  hide.classList.remove("left-0");
  hide.classList.add("-left-full");
}