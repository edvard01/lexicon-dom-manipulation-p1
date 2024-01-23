function recipeName() {
  const recipeName = document.getElementById("recipe-name").innerHTML;
  return recipeName;
}

function elementType() {
  const recipeName = document.getElementById("recipe-name").tagName;
  return recipeName;
}

function descFontSize() {
  const description = document.querySelector(".description");
  const fontSize = window.getComputedStyle(description).fontSize;
  return fontSize;
}

function imgAttr() {
  const img = document.querySelector(".image-container").firstChild.nextSibling;
  const alt = img.getAttribute("alt");
  return alt;
}

function getImgData() {
  const img = document.querySelector(".image-container").firstChild.nextSibling;
  let height = img.offsetHeight;
  let width = img.offsetWidth;
  let src = img.getAttribute("src");

  let dataString = `\n{\nurl: ${src}\nwidth: ${width}px\nheight: ${height}px\n}`;
  return dataString;
}

console.log(`The name of the recipe is: ${recipeName()}`);
console.log(`The recipe name is of the element ${elementType()}`);
console.log(
  `The paragraph with the class 'description' has the font size: ${descFontSize()}`
);
console.log(`The attribute of the image is: ${imgAttr()}`);
console.log("Information about the image:", getImgData());
