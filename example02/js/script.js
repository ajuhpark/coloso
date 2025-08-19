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
