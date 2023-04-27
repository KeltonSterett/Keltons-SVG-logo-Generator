// this class will be the parent class for Square, Circle, and Triangle
     class Shape {
        constructor() {
            this.color= "";
        }
        // Shape class will take in a color value and set it to the color property
         setColor(colorValue) {
            this.color = colorValue;
        }
            
    }
    
        
    
// square class will inherit from Shape class
    class Square extends Shape {
        render() {
            // this will return a square with the color property set to the color value passed in
            return '<rect x="73" y="40" width="160" height="160" fill="${this.color}"/>';
        } 
    }
    
    class Triangle extends Shape {
        render() {
            // this will return a triangle with the color property set to the color value passed in
            return '<polygon points="150,40 73,200 227,200" fill="${this.color}"/>';
        }
    }

    class Circle extends Shape {
        render() {
            // this will return a circle with the color property set to the color value passed in
            return '<circle cx="150" cy="150" r="80" fill="${this.color}"/>';
        }
    }

    module.exports = {Square, Triangle, Circle};