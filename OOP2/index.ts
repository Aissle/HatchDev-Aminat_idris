let firstName = "jane";

class Car {
  brand: string;
  color: string;

  constructor(brand: string, color: string) {
    this.brand = brand;
    this.color = color;
  }
}

const bmw = new Car("bmw", "blue");
// bmw.brand = "bmw";
// bmw.color = "blue";

//console.log(bmw);

class Person {
  name: string;
  height: number;
  complexion: string;

  constructor(name: string, height: number, complexion: string) {
    this.name = name;
    this.height = height;
    this.complexion = complexion;
  }

  sleep(): void {
    console.log(`${this.name} is sleeping`);
  }
}

const tade = new Person("tade", 5.9, "Fair");
//tade.sleep();

const williams = new Person("Williams", 6.7, "dark");
//williams.sleep();


//class studen (name, age, ) every student should be able to introduce themselves
class Student {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  intro(): void {
    console.log(`Hi! my name is ${this.name}. Nice to meet you, I am ${this.age} years old.`);
  }
}

const aminat = new Student("Aminat", 12);
const tide = new Student("Tide", 16);
const femi = new Student("Femi", 15);

// aminat.intro();
// tide.intro();
// femi.intro();

class Animal {
  name: string;
  skinType: string;

  constructor(name: string, skinType: string) {
    this.name = name;
    this.skinType = skinType;
  }

  makeSound(): void {
    console.log(`${this.name} is making a sound`);
  }
}

const animal1 = new Animal('Dog', 'fur');

class Dog extends Animal {
  breed: string;

  constructor(name: string, skinType: string, breed: string) {
    super(name, skinType);
    this.breed = breed;
  }
  barks(): void {
    console.log(`${this.name} is barking wofff!!!`);
  }

  makeSound(): void {
    console.log(`${this.name} is making the sound wofff`);
  }
} 

const dog1 = new Dog("Dog", "fur", "german shepered");
// dog1.makeSound();
// dog1.barks();


class Bird extends Animal {
  fly() {
    console.log(`${this.name} is flying!`);
  }
}

const bird1 = new Bird("eagle", "feathered");
//bird1.fly();

class Car2 {
  public brand: string;
  public readonly color: string;
  private engineOn: boolean = false;

  constructor(brand: string, color: string) {
    this.brand = brand;
    this.color = color;
  }

  protected startEngine() {
    this.engineOn = true;
    console.log(`${this.brand}'s engine has started`);
  }

  public getReady() {
    console.log(`engine is on: ${this.engineOn}`);
    this.startEngine();
  }
}

class SpeedCar extends Car2 {
  public boost() {
    return this.startEngine();
  }
}

const toyota = new Car2("Toyota", "red");
const ferrari = new SpeedCar('Ferrari', 'red');
// console.log(toyota.brand);
// toyota.getReady();
// toyota.color = "brown";
// console.log(toyota.color);
// ferrari.boost();

class User {
  public name: string;
  public role: string;

  constructor(name: string, role: string) {
    this.name = name;
    this.role = role;
  }

  createGuest() {
    console.log(`${this.name} is a ${this.role} User`);
  }

  static greet(friend: string) {
    console.log(`Hello ${this.name} and ${friend}`);
  }

}


const user1 = new User("Aminat", "host");
User.greet("Tobi");
user1.createGuest();

//npm init
//npm install --save-dev typescript
//tsc --init
//tsc --watch