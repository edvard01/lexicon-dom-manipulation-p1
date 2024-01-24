# lexicon-dom-manipulation-p1

Exercises on DOM Manipulation
Getting data from the DOM.
In this exercise you will try and get some data from the provided recipe website.
Use the appropriate methods and properties available to you to get the correct data from the "correct" recipe. All answers should be saved in some variable and logged to the console. If you don't know the right method or property to use, see this link for all available ones: https://www.w3schools.com/jsref/dom_obj_all.asp

What is the name of the recipe?
What HTML tag is used to display the Recipe name?
What is the font size of the paragraph tag with the class "description".
What is the value of the alt atrribute on the image?
What is the dimensions and the url of the image? Create an object that looks like this, and log it to the console:
{
url: string
height: number,
width: number,
}
How many ingredients has the paste?
Which is the forth element in the list containing the ingredients for the paste?
Create an an array of objects from the instructions. Each element in the array should be an object that looks like this:
{
order: number;
text: instruction;
}

### Exercises in DOM manipulation.

In this exercise you will be given a already built webside with some styling included. What's special about this website is that it comes in two versions. One which is the "correct" one and one that has many "errors" in it. Your task is to correct these errors with the aid of JavaScript. All of the right answers, styling, formatting and texts can be found in the correct version of the site. So there is your reference so to speak.

Each question in the following list of questions aims at a specific error on the website, and it goes from top to bottom and left to right on the website.

The solution to all these question can be reached by using the different DOM manipulation methods and properties that you might have or might not have learned during the course. Some googling might be required. This link might help you: https://www.w3schools.com/jsref/dom_obj_all.asp

The logo text of the site has the wrong color. Change it to the correct one.
The alignment of the elements inside the header element are wrong. Change it to the correct one. Hint, check the flex properties for the correct alignment. Here is a link that might help: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
The header has a border at the bottom, but it has the wrong color. Change it do the correct one.
The recipe name is wrong, change it to the correct one.
The clock icon beneath the recipe name has disappeared and been replaced by a text instead. This can be fixed by adding a class to that element.
The estimated time of the recipe is also incorrect. Change it to the correct time estimation.
The src path to the image is wrong, or atleast it's showing the wrong image. Change it to the correct one. The available images can be found in the assets folder.
The background color of the ingredients list container is wrong. Fix it.
The ingredients are divided in to two parts, one for the bottom and one for the paste. In the list of the ingredients to the bottom, there is a text instead of two list items. Remove the text and add those two list items.
The third ingredient in the list of ingredients to the paste is wrong. Change that specific ingredient to the correct one.
There is also a missing ingredient in the list of ingredients to the paste. Look and see what it is and add that one the the end of the list.
The text "Instructions" to the left, beneath the image, has some shadow styling applied to it. Remove that styling.
Two list elements of the list of instructions are incorrect. Find them and change them to the correct ones.
