function createuser(firstname,age) {
  let user = {
    firstname: this.firstname,
    age: this.age,
  
  };

  return user
}

let user1= new createuser("ganshyam",45);

console.log(user1);
