class Room {
    constructor(name, length, width, capacity = 18) {
        this.name = name;
        this.length = length;
        this.width = width;
        this.available = true;
        this.capacity = capacity;
    }

    getArea() {
        return this.length * this.width;
    }

    getPerimeter() {
        return (this.length * 2) + (this.width * 2);
    }
};

let room1 = new Room ("Sun", 30, 20);
let room2 = new Room ("Green", 15, 20, 18);
room2.available = false;

console.log("*** ROOM 1 ***");
console.log("Room1 Name = " + room1.name);
console.log("Room1 Length = " + room1.length);
console.log("Room1 Width = " + room1.width);
console.log("Room1 Area = " + room1.getArea() + " feet.");
console.log("Room1 Perimeter = " + room1.getPerimeter() + " feet.");
console.log("Room1 Availability = " + room1.available);
console.log("Room1 Capacity = " + room1.capacity);
console.log("          ")

console.log("*** ROOM 2 ***");
console.log("Room2 Name = " + room2.name);
console.log("Room2 Length = " + room2.length);
console.log("Room2 Width = " + room2.width);
console.log("Room2 Area = " + room2.getArea() + " feet.");
console.log("Room2 Perimeter = " + room2.getPerimeter() + " feet.");
console.log("Room1 Availability = " + room2.available);
console.log("Room2 Capacity = " + room2.capacity);

