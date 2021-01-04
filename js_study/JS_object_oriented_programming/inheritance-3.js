// 1. __proto__ 이용

var dongle ={
    name : 'dongle',
    first : 10, second : 20,
    sum: function(){
        return this.first + this.second;
    }
}

var nano = {
    name : 'nano',
    first : 10, second : 10,
    avg:function(){
        return (this.first + this.second) / 2;
    }
}

nano.__proto__ = dongle;

console.log('nano.sum() :', nano.sum());
console.log('nano.avg() :', nano.avg());

// 2. Object.create() 이용

var dongle ={
    name : 'dongle',
    first : 10, second : 20,
    sum: function(){
        return this.first + this.second;
    }
}


var nano = Object.create(dongle);
nano.name = 'nano';
nano.first = 10;
nano.second = 10;
nano.avg = function(){
    return (this.first + this.second) / 2;
} 

console.log('nano.sum() :', nano.sum());
console.log('nano.avg() :', nano.avg());