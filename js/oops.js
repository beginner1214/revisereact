// function createuser(firstname,age) {
//   let user = {
//     firstname: this.firstname,
//     age: this.age,

//   };

//   return user
// }

// let user1= new createuser("ganshyam",45);

// console.log(user1);

class Animal {
  #age
  constructor(name,age) {
    this.name = name;
    this.#age=age;
  }
  #getAge() {
    return this.#age;
  }
  get age() {
    return this.#getAge();
  }
  set age(value) {
    this.#age = value;
  }
}
class Animal2 extends Animal {
  constructor(name,age) {
    super(name,age);
  }
}

let hi = "samaltman";
let d = new Animal2("sampy",455);
console.log(d);
console.log(d.age);
d.age = 500;
console.log(d.age);
