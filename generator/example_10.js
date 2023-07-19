const loop = function* (){
    let i = 0;
    while (true){
        console.log(i++);
        yield;
    }
}

const generator = loop();
generator.next();
generator.next();
generator.next();