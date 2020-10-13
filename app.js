//setting global variables
let btnCircle = document.getElementById("btnCircle");
let btnTriangle = document.getElementById("btnTriangle");
let btnRectangle = document.getElementById("btnRectangle");
let btnSquare = document.getElementById("btnSquare");
let inputCircle = document.getElementById("inputCircle");
let inputTriangle = document.getElementById("inputTriangle");
let inputRectangleWidth = document.getElementById("inputRectangleWidth");
let inputRectangleLength = document.getElementById("inputRectangleLength");
let inputSquare = document.getElementById("inputSquare");
let canvas = document.getElementById("canvas");
let shapeFdBk = document.getElementById("shape");
let widthFdBk = document.getElementById("width");
let lengthFdBk = document.getElementById("length");
let radiusFdBk = document.getElementById("radius");
let areaFdBk = document.getElementById("area");
let perimeterFdBk = document.getElementById("perimeter");
//setting parent class with color and board position to pass down to other shapes
class Shape {
  constructor(color, positionX, positionY) {
    //all items need to be give a color and info needs to be put in infobox
    this.color = color;
    this.positionX = positionX;
    this.positionY = positionY;
  }

  setColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColor);
    this.color = `#${randomColor}`;
  }
  setPosition() {
    this.randomX = ranNum(0, 600);
    this.randomY = ranNum(0, 600);
    function ranNum(min, max) {
      return Math.random() * (max - min) + min;
    }
    this.positionX = `${this.randomX}px`;
    this.positionY = `${this.randomY}px`;
  }
}
//setting circle class
class Circle extends Shape {
  constructor(color, positionX, positionY, radius) {
    super(color, positionX, positionY);
    let circle = document.createElement("div");
    this.circle = circle;
    circle.id = "circle";
//i have a feeling i could/should rename these measurement variables radius/side/base some version of width and length and have them being passed in the parent shape class
    radius = inputCircle.value;

    this.setColor();
    circle.style.backgroundColor = this.color;
    this.setPosition();
    circle.style.top = this.positionX;
    circle.style.left = this.positionY;
    console.log(this.positionX, this.positionY);
    canvas.appendChild(circle);
    if (radius !== "") {
      circle.style.width = `${radius * 2}px`;
      circle.style.height = `${radius * 2}px`;
    }
    circle.addEventListener("click", function () {
      //i also have that same feeling for all of my feedback stuff- its working but i think this whole thing should be moved to Shape class... i will hopefully redo all of this after watching the walkthrough a lot of this code feels redundant...
      shapeFdBk.innerHTML = btnCircle.name;
      radiusFdBk.innerHTML = radius;
      areaFdBk.innerHTML = Math.round(Math.PI * Number(radius * radius));
      perimeterFdBk.innerHTML = Math.round(2 * Math.PI * Number(radius));
    });
    circle.addEventListener("dblclick", function () {
      circle.remove();
    });
    console.log(radius);
    console.log(btnCircle.name);
  }
}
//setting triangle class
class Triangle extends Shape {
  constructor(color, positionX, positionY, base) {
    super(color, positionX, positionY);
    let triangle = document.createElement("div");
    triangle.id = "triangle";
    //    console.log(inputTriangle.value)

    base = inputTriangle.value;
    this.base = base;
    console.log(triangle.style);
    this.setColor();
    triangle.style.borderBottomColor = this.color;
    this.setPosition();
    triangle.style.top = this.positionX;
    triangle.style.left = this.positionY;

    canvas.appendChild(triangle);

    triangle.style.borderRightWidth = `${base}px`;
    triangle.style.borderBottomWidth = `${base}px`;

    console.log(triangle.style.borderBottom);
    triangle.addEventListener("click", function () {
      shapeFdBk.innerHTML = btnTriangle.name;
      lengthFdBk.innerHTML = base;
      widthFdBk.innerHTML = base;
      areaFdBk.innerHTML = Math.round(Number(base * base) / 2);
      perimeterFdBk.innerHTML = Math.round(
        Number(base * 2) + Math.sqrt(Number (base * base) + Number(base * base))
      );
    });
    triangle.addEventListener("dblclick", function () {
      triangle.remove();
    });
  }
}
//setting rectangle class
class Rectangle extends Shape {
  constructor(color, positionX, positionY, length, width) {
    super(color, positionX, positionY);
    let rectangle = document.createElement("div");
    rectangle.id = "rectangle";
    length = inputRectangleLength.value;
    width = inputRectangleWidth.value;
    this.length = length;
    this.width = width;

    this.setColor();
    rectangle.style.backgroundColor = this.color;
    this.setPosition();
    rectangle.style.top = this.positionX;
    rectangle.style.left = this.positionY;

    canvas.appendChild(rectangle);
    if (width !== "") {
      rectangle.style.width = `${width}px`;
    } else {
      width = 200;
    }
    if (length !== "") {
      rectangle.style.height = `${length}px`;
    } else {
      length = 100;
    }

    console.log(rectangle.style.borderBottom);
    rectangle.addEventListener("click", function () {
      shapeFdBk.innerHTML = btnRectangle.name;
      lengthFdBk.innerHTML = length;
      widthFdBk.innerHTML = width;
      areaFdBk.innerHTML = Math.round(length * width);
      perimeterFdBk.innerHTML = (Number(length) * 2) + (Number(width)*2);
    });
    rectangle.addEventListener("dblclick", function () {
      rectangle.remove();
    });
    console.log(this.randomX, this.randomY);
  }
}
//setting square class
class Square extends Shape {
  constructor(color, positionX, positionY, side) {
    super(color, positionX, positionY);
    side = inputSquare.value;
    this.side = side;
    let square = document.createElement("div");
    square.id = "square";
    this.setColor();
    square.style.backgroundColor = this.color;
    this.setPosition();
    square.style.top = this.positionX;
    square.style.left = this.positionY;
    square.style.width = side;
    square.style.height = side;
    canvas.appendChild(square);

    if (side !== "") {
      square.style.width = `${side}px`;
      square.style.height = `${side}px`;
    } else {
      side = 100;
    }
    square.addEventListener("click", function () {
      shapeFdBk.innerHTML = btnSquare.name;
      lengthFdBk.innerHTML = side;
      widthFdBk.innerHTML = side;
      areaFdBk.innerHTML = side * side;
      perimeterFdBk.innerHTML = Number(side * 4);
    });
    square.addEventListener("dblclick", function () {
      square.remove();
    });
  }
}
//functions listening for buttons to make new shapes!
btnCircle.addEventListener("click", function () {
  new Circle(this.color, this.positionX, this.positionY, this.radius);
  //   if (inputCircle="") {this.radius=`${50}px`}
});
btnRectangle.addEventListener("click", function () {
  new Rectangle(
    this.color,
    this.positionX,
    this.positionY,
    this.length,
    this.width
  );
});

btnTriangle.addEventListener("click", function () {
  new Triangle(this.color, this.positionX, this.positionY, this.base);
});
btnSquare.addEventListener("click", function () {
  new Square(this.color, this.positionX, this.positionY, this.side);
});
