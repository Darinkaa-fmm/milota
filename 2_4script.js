console.log('Hello, World!');
alert ("знакомство с основами ООП в JS")

class Figure {
    #x;
    #y;

    square() {
        return undefined;
    }
}

class Circle extends Figure {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
      }
      square() {
        s = Math.PI*r*r;
        console.log(s);
        alert (s);
      }
}

class Rectangle extends Figure {
    constructor(x, y, h, w) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
      }

      square() {
        s = h*w;
        console.log(s);
        alert (s);
      }
}

const D = new Circle(2, 5, 7);
D.square();

const E = new Rectangle(6, 98, 10, 37);
E.square();


