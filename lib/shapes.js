// set shape profiles and descriptions

class Shape {
    constructor() {
        this.color = "";
        this.textColor = "";
    }
    setColor(color) {
        this.color = color;
        this.textColor = color;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />
        <text x="150" y="120" font-size="20" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />
        <text x="150" y="100" font-size="20" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="40" width="220" height="120" fill="${this.color}" />
        <text x="150" y="120" font-size="20" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>`;
    }
}

module.exports = { Triangle, Circle, Square};
