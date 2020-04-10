let person1 = {name:"홍길동", age:16};

console.log(Object.isFrozen(person1));

Object.freeze(person1);
console.log(Object.isFrozen(person1));