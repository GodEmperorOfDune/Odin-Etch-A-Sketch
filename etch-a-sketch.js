// setting up elements from HTML and creating new ones in JS
const body = document.querySelector("body");
//const sketchArea = document.querySelector("#sketchArea");
const sketchArea = document.createElement("div");
sketchArea.setAttribute("id", "sketchArea");

const numberOfSquaresButton = document.getElementById("numberOfSquaresButton");

body.appendChild(sketchArea);


const userScreenHeight = window.innerHeight;
const userScreenWidth = window.innerWidth;
const sketchAreaHeight = sketchArea.offsetHeight;



console.log(userScreenHeight);
console.log(userScreenWidth);
console.log(sketchAreaHeight);

//function to create random colours using HSLA (HSLA over RGB or HEX to only get bright colours)
const randomHsla = () => `hsla(${Math.random() * 360}, 100%, 50%, 1)`;

//setting the properties to make the box square with a border
function boxPixelSetProperties(numberOfBoxesWide) {
    let sketchAreaSize = 0;
    if(userScreenHeight < userScreenWidth) {
        sketchAreaSize = userScreenHeight;
    } else {
        sketchAreaSize = userScreenWidth;
    }
    let sizeOfBoxes = (sketchAreaSize - 100) / numberOfBoxesWide;

    for(let i = 0; i < numberOfBoxesWide; i++) {
        let sketchRow = document.createElement("div");
        sketchArea.appendChild(sketchRow);
        for(let j = 0; j < numberOfBoxesWide; j++) {
            let boxPixel = document.createElement("div");
            // setting attributes of the boxes to be added
            boxPixel.setAttribute("style", `height: ${sizeOfBoxes}px; width: ${sizeOfBoxes}px;`);
            boxPixel.style.border = "solid";
            boxPixel.addEventListener("mouseover", function(){
                boxPixel.style.backgroundColor = randomHsla();
            })
            sketchRow.appendChild(boxPixel);
        }
    }
}

// gets the number of squares per side, resets the grid, and calls the function to build a new one
numberOfSquaresButton.addEventListener("click", () => {
    let numberOfBoxesWide;
    let correctInput = false;
    sketchArea.replaceChildren();
    while(!correctInput) {
        numberOfBoxesWide = parseInt(prompt("How many squares per side would you like"));
        if(!Number.isInteger(numberOfBoxesWide) || numberOfBoxesWide > 100 || numberOfBoxesWide < 1) {
            alert("Please enter an integer between 1 and 100")
        } else {
            correctInput = true;
            boxPixelSetProperties(numberOfBoxesWide);
        }
    }
})