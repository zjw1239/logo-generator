// write SVG file

const fs = require("fs");

function writeSvgToFile(filename, content) {
    fs.writeFileSync(filename, content);
}

module.exports = { writeSvgToFile };
