function SquareArea() {
    var length = prompt("What is the length?");
    var width = prompt("What is the width?");
    var area = length * width;

    document.write("Your area is " + area);

}

function circleArea() {
    let radius = prompt("What is the radius?");
    var area = Math.PI * radius * radius;
    document.write("Your area is " + area);
}