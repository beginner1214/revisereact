// function createuser(firstname,age) {
//   let user = {
//     firstname: this.firstname,
//     age: this.age,
  
//   };

//   return user
// }

// let user1= new createuser("ganshyam",45);

// console.log(user1);


class Animal{
  constructor(name){
    this.name=name;
  }
}
class Animal2 extends Animal{
  constructor(name){
    this.name=name;
  }
}

let d=new Animal2("sampy");
console.log(d);
