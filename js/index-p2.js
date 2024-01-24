function changeLogoColor() {
  const logo = document.querySelector(".logo-text");
  logo.style.color = "#384241";
}

function changeHeaderContentPosition() {
  const header = document.getElementsByTagName("header");
  header[0].style.justifyContent = "flex-start";
}

function changeHeaderBorder() {
  const header = document.getElementsByTagName("header");
  header[0].style.borderColor = "lightgray";
}

function changeRecipeName() {
  const name = document.getElementById("recipe-name");
  name.innerHTML = "Frozen Cheesecake";
}

function fixTimeContainer() {
  const element = document.getElementsByClassName("time-container")[0];
  element.children[0].className = "material-icons";
  element.children[1].innerHTML = "60+ min";
}

function changeImg() {
  const img = document.querySelector(".image-container").firstChild.nextSibling;
  img.src = "assets/frozen-cheesecake-slice.jpg";
}

function changeIngredientsBg() {
  const element = document.querySelector(".ingredients-container");
  element.style.backgroundColor = "#f9f9f9";
}

function fixIngredientList() {
  const element = document.querySelector(".ingredients-list-bottom");
  const htmlListItem = "<li>15st digistivetex</li><li>Lite smör</li>";
  element.innerHTML = htmlListItem;
}

function changeThirdPasteIng() {
  const pasteList = document.querySelector(".ingredients-list-paste").children;
  pasteList[2].innerHTML = "<li>3tsk vaniljsocker</li>";
}

function addPasteIngredient() {
  const pasteList = document.querySelector(".ingredients-list-paste");
  const newElement = document.createElement("li");
  const newListItemText = document.createTextNode(
    "400g naturell philadelphiaost"
  );
  newElement.appendChild(newListItemText);

  pasteList.insertAdjacentElement("beforeend", newElement);
}

function removeInstructionShadow() {
  const instructionTitle = document.querySelector(".instructions");
  instructionTitle.className = "instructions";
}

function fixInstructions() {
  const list = document.querySelector(".instructions-list").children;
  list[1].innerHTML =
    "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.";

  list[8].innerHTML = "Ställ in i frysen över natten.";
}

changeLogoColor();
changeHeaderContentPosition();
changeHeaderBorder();
changeRecipeName();
fixTimeContainer();
changeImg();
changeIngredientsBg();
fixIngredientList();
changeThirdPasteIng();
addPasteIngredient();
removeInstructionShadow();
fixInstructions();
