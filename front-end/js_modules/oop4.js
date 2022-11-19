/*
var globalVar = 77;

function scopeTest() {
    var localVar = 88;
}

console.log(localVar);

*/

/*
function meal(animal) {
    animal.food = animal.food + 10;
}

var dog = {
    food: 10
};
meal(dog);
meal(dog);

console.log(dog.food);
*/

//console.log(["abc", "jgo"] + ["def", "hid"]); // ["abcdef"]

var bird = {
    canFly: true,
    canTalk: false,
    canRun: false,
}

var chicken = Object.create(bird)
console.log("Chicken", chicken)

var ostrich = Object.create(bird)
ostrich.canFly = false
ostrich.canRun = true
console.log("Ostrich", ostrich)

var parrot = Object.create(bird)
parrot.canTalk = true
console.log("Parrot", parrot)
