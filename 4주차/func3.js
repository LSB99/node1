function outterFunc(){
    print ("hello");

    function print(msg){
        console.log(msg);
    }
}

outterFunc();
//print("word"); 여기서 호출할 수 없다.