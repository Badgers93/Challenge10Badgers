class Shape {
    constructor(fill = "green"){
        this = {};
        this.fill = fill;
    }
}

class Circle extends Shape {
    constructor(fill, radius){
        super(fill);
        this.radius = radius;
    }
    render(){
        return `<circle cx="50" cy="50" r="50" fill="${this.fill}" />`
    }

}

class Triangle extends Shape {
    constructor(){
        super(fill);
    }
    render(){
        return `<polygon width="100" height="100" points="50,10 90,90 10,90" fill="${this.fill}" />`
    }
}

class Square extends Shape {
    constructor(){
        super(fill);
    }
    render(){
        return `<rect width="100" height="100" fill="${this.fill}" />`
    }
}