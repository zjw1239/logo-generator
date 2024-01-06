// set requirements for code to run

const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");
const { writeSvgToFile } = require("./lib/svgWriter");

// function to prompt and generate logo

async function generateLogo() {
    try {
    
    //promp for user input

    const userInput = await inquirer.prompt([
        {
            type: "input", 
            name: "text", 
            message: "Enter up to three characters:",
            validate: input => input.length <= 3,
        },
        
        {
            type: "input",
            name: "textColor",
            message:"Enter text color (keyword or hexadecimal):"
        },
        
        {
            type: "list",
            name: "shape",
            message: "Choose a shape:",
            choices: ["circle", "triangle", "square"]
        },

        {
            type: "input",
            name: "shapeColor",
            message: "Enter shape color (keyword or hexadecimal):"
        }
    ]);

    // create shape based on user choice
    let shape;
    switch (userInput.shape) {
        case "circle":
            shape = new Circle();
            break;
        case "triangle":
            shape = new Triangle();
            break;
        case "square":
            shape = new Square();
            break;
        default:
            console.error("Invalid shape choice");
            return;
    }

    shape.setColor(userInput.shapeColor);

    shape.text = userInput.text;

    shape.textColor = userInput.textColor;

    //generate SVG
    const svgContent = `<svg width="300" height="200">${shape.render()}</svg>`

    console.log('generated svg content:', svgContent)

    //save to file
    const filename = "logo.svg";
    writeSvgToFile(filename, svgContent);
    
    console.log(`Generated ${filename}`);
} catch (error) {
    console.error('Error in logo generation:', error.message);
    }
}

// call logo generation function

generateLogo();
