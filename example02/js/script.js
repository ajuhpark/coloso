console.log("hello")

const text = "andrew park"; // replace text here
const container = document.getElementById('logo-letters'); // Get the container div by its ID
container.innerHTML = ""; // Clear any previous content in the container

const vh_scale = 0.5; // change 0.5 here for vh
// Set container height to match scaled SVG height
const scaleY = window.innerHeight * vh_scale / 100; 
container.style.height = `${40 * scaleY}px`; // 40 is the viewBox height

for (const char of text) { // Loop through each character in the string
  if (char === " ") {
    // If the character is a space, add a spacer div to visually separate words
    const spacer = document.createElement("div");
    spacer.style.display = "inline-block"; // Make sure the spacer takes up horizontal space
    spacer.style.width = "16px"; // Set the width of the space between words
    container.appendChild(spacer); // Add the spacer to the container
    continue; // Skip to the next character
  }
  // For non-space characters, create an SVG for each letter
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "logo-letter");
  svg.setAttribute("viewBox", "0 0 32 40");
  svg.style.transform = `scaleY(${scaleY})`;

  const textElem = document.createElementNS("http://www.w3.org/2000/svg", "text");
  textElem.setAttribute("x", "16"); // Center horizontally (half of 32)
  textElem.setAttribute("y", "22");
  textElem.setAttribute("text-anchor", "middle"); // Center text horizontally
  // textElem.style.transform = `scaleY(${window.innerHeight * 0.5 / 100})`;
  textElem.textContent = char.toUpperCase();

  
  
  svg.appendChild(textElem);
  container.appendChild(svg);
}

// SVG path animation setup
const path = document.querySelector('.drawing path');
const pathLength = path.getTotalLength();

// Set the stroke-dasharray and initial stroke-dashoffset to the path length
path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;


// getting random position for the numbers and words (steps)
// 1. load html dom element
const links = document.querySelectorAll(".link-tree li")

// 2. give these things random positions. 
console.log(Math.round(Math.random() * (window.innerWidth - 0) + 0))

// 3. assign elements random positions
// console.log(links[0])
links[0].style.top = `${Math.round(Math.round(Math.random() * (window.innerHeight - 0) + 0))}px`
links[0].style.left = `${Math.round(Math.round(Math.random() * (window.innerWidth - 0) + 0))}px`

const getRandomPosition = (min, max) =>{
  return Math.round(Math.round(Math.random() * (max - min) + min))
}

for(let i=0; i<links.length; i++){
  // console.log(i)
  console.log(links[i])
  // links[i].style.top = `${Math.round(Math.round(Math.random() * (window.innerHeight - 0) + 0))}px`
  // links[i].style.left = `${Math.round(Math.round(Math.random() * (window.innerWidth - 0) + 0))}px`
  links[i].style.top = `${getRandomPosition(0, window.innerHeight)}px`
  links[i].style.left = `${getRandomPosition(0, window.innerWidth)}px`
}

console.dir(links[0])