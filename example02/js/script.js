console.log("hello")

const text = "andrew park"; // Change this to any string
const container = document.getElementById('logo-letters');
container.innerHTML = ""; // Clear previous content

for (const char of text) {
  if (char === " ") {
    // Add a spacer for spaces
    const spacer = document.createElement("span");
    spacer.style.display = "inline-block";
    spacer.style.width = "16px";
    container.appendChild(spacer);
    continue;
  }
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "logo-letter");
  svg.setAttribute("viewBox", "0 0 32 40");
  const textElem = document.createElementNS("http://www.w3.org/2000/svg", "text");
  textElem.setAttribute("x", "0");
  textElem.setAttribute("y", "32");
  textElem.textContent = char.toUpperCase();
  svg.appendChild(textElem);
  container.appendChild(svg);
}
