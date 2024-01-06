// quick test for file write

const { writeSvgToFile } = require("../lib/svgWriter");
const fs = require("fs");

describe("SVG Writer", () => {
    test("Write SVG to file", () => {
        const filename = "testFile.svg";
        const content = "<svg>test content</svg>";
        writeSvgToFile(filename, content);

        const fileContent = fs.readFileSync(filename, "utf-8");
        expect(fileContent).toEqual(content);
    });
});
