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

class PersonPlus extends Person{
    avg(){
        return (this.first + this.second) / 2;
    }

} 


var dongle = new PersonPlus('dongle', 10, 20);
console.log(dongle.sum());
console.log(dongle.avg());

