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

changeLogoColor();
changeHeaderContentPosition();
changeHeaderBorder();
changeRecipeName();
fixTimeContainer();
changeImg();
