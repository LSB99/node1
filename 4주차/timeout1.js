function printTime(msg){
    console.log(msg , new Date());
}

 setTimeout(printTime,1000,"1 초후");
 setTimeout(printTime,2000,"2 초후");
 setTimeout(printTime,3000,"3 초후");