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

  let dataObject = {
    height: height,
    width: width,
    src: src,
  };
  return dataObject;
}

function getIngredientCount() {
  const listCount = document.querySelector(
    ".ingredients-list-paste"
  ).childElementCount;

  return listCount;
}

function getPasteListItem(item) {
  const list = document.querySelector(".ingredients-list-paste").children;
  console.log(list);
  return list[item - 1].innerHTML;
}

function instructionObject() {
  const instructionList = document.querySelector(".instructions-list").children;
  let inst1;
  let inst2;
  let inst3;
  let inst4;
  let inst5;
  let inst6;
  let inst7;
  let inst8;
  let inst9;
  let inst10;

  const arr = [
    inst1,
    inst2,
    inst3,
    inst4,
    inst5,
    inst6,
    inst7,
    inst8,
    inst9,
    inst10,
  ];

  for (let i = 0; i < arr.length; i++) {
    arr[i] = {
      number: i + 1,
      text: instructionList[i].innerHTML,
    };
  }

  return arr;
}

console.log(`The name of the recipe is: ${recipeName()}`);
console.log(`The recipe name is of the element ${elementType()}`);
console.log(
  `The paragraph with the class 'description' has the font size: ${descFontSize()}`
);
console.log(`The attribute of the image is: ${imgAttr()}`);
console.log("Information about the image:", getImgData());
console.log(`There are ${getIngredientCount()} ingredients in the paste`);
console.log(`The 4th item is: ${getPasteListItem(4)}`);

instructionObject();
