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

const images = [
{filename: "pic1.jpg", alt:"Closeup of a human eye"}, 
{filename:"pic2.jpg", alt:"Rock that looks like a wave"}, 
{filename:"pic3.jpg", alt:"Purple and white pansies"}, 
{filename:"pic4.jpg", alt:"Section of wall from a pharaoh's tomb"}, 
{filename:"pic5.jpg", alt:"Large moth on a leaf"} 
];

const baseURL ="https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

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
    // Add keydown event listener to each thumbnail
    newImage.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            updateDisplayedImage(newImage);
        }
    });
    
    // keydown event handler
}
// Define the updateDisplayedImage function
// function updateDisplayedImage(img) {
//     displayedImage.src = img.src;
//     displayedImage.alt = img.alt;
function updateDisplayedImage(event) {
  displayedImage.src = event.target.src;
  displayedImage.alt = event.target.alt;
}

// Darken/Lighten button event handler
btn.addEventListener("click", function() {
    if (btn.classList.contains("dark")) {
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
        btn.classList.remove("dark");
    } else {
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
        //Toggle the dark class ready for next click
        btn.classList.toggle("dark");
    }   
});
