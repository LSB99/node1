/*console.log(3/0);
console.log(3/null);
console.log(3/"a");
console.log(3/"3");*/

/*unction sum(msg , ...a){
    console.log(msg);
    let result = 0;

    for(let i =0;i<a.length;i++){
        result+=a[i];
    }

    return result;
}

console.log(sum("hello",1,2,3,4));*/

/*function add(a,b){
    return a + b;
}

console.log(add);  

add = 3;
console.log(add);*/

function createPerson(name, age) {
    return { name, age };
  }
  
  let person1 = createPerson("홍길동", 16);
  let person2 = createPerson("임꺽정", 18);
  
  console.log(person1);
  console.log(person2);
  