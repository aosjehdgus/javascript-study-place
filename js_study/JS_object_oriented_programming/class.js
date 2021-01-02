class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }

    sum(){
        return this.first + this.second;
}


} 

var dongle = new Person('dongle', 10, 20);

dongle.sum = function(){
    return 'this : ' +  (this.first + this.second);
}

console.log(dongle.sum());

