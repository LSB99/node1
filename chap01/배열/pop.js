let a = [1,3,5,7];

while(a.length>0){
    let value = a.pop();
    console.log("pop value = %d , array = [%s]", value , a.toString());
}

let b = [1,3,5,7];

while(b.length>0){
    let value = b.shift();
    console.log("shift value = %d , array = [%s]", value , b.toString());
}