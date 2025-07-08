// setting up elements from HTML and creating new ones in JS
const body = document.querySelector("body");
//const sketchArea = document.querySelector("#sketchArea");
const sketchArea = document.createElement("div");
sketchArea.setAttribute("id", "sketchArea");


body.appendChild(sketchArea);


const userScreenHeight = window.innerHeight;
const userScreenWidth = window.innerWidth;
const sketchAreaHeight = sketchArea.offsetHeight;



console.log(userScreenHeight);
console.log(userScreenWidth);
console.log(sketchAreaHeight);



//setting the properties to make the box square with a border
function boxPixelSetProperties(numberOfBoxesWide) {
    let sketchAreaSize = 0;
    if(userScreenHeight < userScreenWidth) {
        sketchAreaSize = userScreenHeight;
    } else {
        sketchAreaSize = userScreenWidth;
    }
    let sizeOfBoxes = Math.floor((sketchAreaSize - 100) / numberOfBoxesWide);

    for(let i = 0; i < numberOfBoxesWide; i++) {
        let sketchRow = document.createElement("div");
        sketchArea.appendChild(sketchRow);
        for(let j = 0; j < numberOfBoxesWide; j++) {
            let boxPixel = document.createElement("div");
            // setting attributes of the boxes to be added
            boxPixel.setAttribute("style", `height: ${sizeOfBoxes}px; width: ${sizeOfBoxes}px;`);
            boxPixel.style.border = "solid";
            sketchRow.appendChild(boxPixel);
        }
    }
}

boxPixelSetProperties(16);