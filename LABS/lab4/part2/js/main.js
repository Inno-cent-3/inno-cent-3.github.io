/*
Name: Innocent Amini
	Date: 20 November 2025
	File: main.js
	Desc: This is the JavaScript file for the lab 4 assignment part 2.
*/

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const images = [{filename: "pic1.jpg", alt: "Closeup of a human eye"}, {filename:"pic2.jpg", alt:"Rock that looks like a wave"}, 
{filename:"pic3.jpg", alt:"Purple and white pansies"}, {filename:"pic4.jpg", alt:"Section of wall from a pharaoh's tomb"}, 
{filename:"pic5.jpg", alt:"Large moth on a leaf"} ]

const baseURL =
"https://raw.githubusercontent.com/mdn/learning-area/master/javascript/apis/document/image-gallery/images/";

    // using a for...of loop
for (const image of images) {
    const newImage = document.createElement("img");
    newImage.src = baseURL + image.filename;
    newImage.alt = image.alt;
    newImage.setAttribute("tabindex", "0");
    thumbBar.appendChild(newImage);
    // Update the display to show the image full size when a thumb is clicked
    newImage.addEventListener("click", updateDisplayedImage);
  // click event handler

    newImage.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            updateDisplayedImage(newImage);
        }
    });
  // keydown event handler
}



































//     Project brief
// You have been provided with some HTML, CSS, and a few lines of JavaScript code. Your job is to follow the instructions below, writing the necessary JavaScript to turn this into a working image gallery.

// The gallery will consist of a large image and a row of thumbnails. When a thumbnail is clicked or tabbed to and Enter/Return then pressed, that thumb should then display as the large image. The relevant <img> element should also be updated with the correct alt text.

// In the top-left corner there is a button that, when repeatedly pressed, toggles the large image between a darker and lighter tint, achieved by changing the transparency of a <div> element that has been overlaid on top of the large image.

// The images you need to embed in the example and their required alt text are as follows:

// pic1.jpg: "Closeup of a human eye".
// pic2.jpg: "Rock that looks like a wave".
// pic3.jpg: "Purple and white pansies".
// pic4.jpg: "Section of wall from a pharaoh's tomb".
// pic5.jpg: "Large moth on a leaf".
// Create a data object
// First of all, we'd like you to declare an array of objects called images. Each object should contain two properties:

// filename: The name of the image file (not the full URL).
// alt: The image's alt text.
// Add the images to the thumbnail bar
// Next, we want you to loop through the images and use some DOM scripting to embed them all on the page via <img> elements. They should be included as children of the <div> element with the class of thumb-bar, which we've already referenced in the thumbBar constant.

// Create a constant called baseURL containing the base URL of each image file (all of the URL not including the filename).
// Create a for ... of loop to loop through the images.
// For each image, create a new <img> element.
// Set the <img> source to equal the URL of the image, which should be a combination of the baseURL and the filename, and the alt attribute equal to the alt text.
// Add another attribute to the <img> to make it focusable via the keyword.
// Append the <img> to the thumbBar.
// Add a click event handler to the <img> so that when it is clicked, a function called updateDisplayedImage() is run, which displays the clicked image at full size. You'll create this function later on.
// Add another event handler to the <img> so that once it is focused via the keyboard, the clicked image can be displayed at full size by pressing the Enter/Return key (and no other key). This is a stretch goal that will take a bit of research to figure out.
// Create the updateDisplayedImage() function
// Now it's time to create the function to display an activated thumbnail at full size. We've stored a reference to the full size <img> element in the displayedImage constant.

// Define the updateDisplayedImage() function.
// Inside the function body, set the displayedImage source to equal the source of the <img> that was activated.
// Set the displayedImage alt text to equal the alt text of the <img> that was activated.
// Wire up the Darken/Lighten button
// We've stored a reference to the "Darken/Lighten" <button> in the btn constant, and a reference to the transparent <div> we have overlaid on top of the full size <img> in the overlay constant. We'd like you to:

// Add a click event handler to the <button> with an anonymous function set as the handler function.
// Inside the function body, add a conditional structure that tests whether the <button> has a class set on it of dark or not.
// If the <button> has a class of dark when clicked, change its text content to Lighten, and change the overlay element's background color to rgb(0 0 0 / 0.5). Remove the <button> element's dark class.
// If the <button> does not have a class of dark when clicked, change its text content to Darken, and change the overlay element's background color to rgb(0 0 0 / 0). Add the <button> element's dark class.
// Can you think of a way to toggle the dark class using a single line of code, run after the conditional structure? This is another stretch goal, but give it a go.
