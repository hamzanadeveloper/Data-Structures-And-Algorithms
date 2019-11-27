console.log("hello world");

var person1 = {first:'Hamza', last:'Arshad', age:'20'};

var person = function(first, last, age){
    this.first = first;
    this.last = last;
    this.age = age;
};

var person2 = new person('Cierra', 'Jagan', '19');

outPerson(person1);
outPerson(person2);

var personArr = [];
personArr.push(person1);
personArr.push(person2);

console.log(personArr);
console.log("-----");
console.log(personArr[1].first);

function outPerson(individual){
    for(var key in individual){
        console.log(key);
        console.log(individual[key]);
    }
}

