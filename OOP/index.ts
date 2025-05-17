interface Icar {
  color: String;
  brandName: string;
}

const car: Icar = {
  color: "blue",
  brandName: "Toyota",
};

class Car {
  color: string;
  brandName: string;
  name: string;

  constructor(name: string, color: string, brandName: string) {
    this.brandName = brandName;
    this.color = color;
    this.name = name;
  }
}


const bmw = new Car("bmw", "blue", "jp20");
console.log(bmw);
