const toggleBtn = document.getElementById("toggle_btn");
const toggleBtnIcon = document.getElementById("hamburger");
const dropDownMenu = document.getElementById("dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("nav-items").style.transform = "translate(-300%)";
  document.getElementById("openBtn").style.visibility = "visible";
  document.getElementById("closeBtn").style.visibility = "hidden";
});
document.getElementById("openBtn").addEventListener("click", function () {
  document.getElementById("nav-items").style.display = "block";
  document.getElementById("nav-items").style.transform = "translate(0)";
  document.getElementById("closeBtn").style.display = "block";
  document.getElementById("openBtn").style.visibility = "hidden";
});

//Api for currency change
const api = "http://api.exchangerate-api.com/v4/latest/USD";

//selecting variables
let amount = document.getElementById("amount");

let result = document.getElementById("result");

let resultFrom;

let resultTo;

fromCurrency.addEventListener("inputValue");

toCurrency.addEventListener("result");
