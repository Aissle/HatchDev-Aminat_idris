"use strict";
const car = {
    color: "blue",
    brandName: "Toyota",
};
class Car {
    constructor(name, color, brandName) {
        this.brandName = brandName;
        this.color = color;
        this.name = name;
    }
}
const bmw = new Car("bmw", "blue", "jp20");
console.log(bmw);
