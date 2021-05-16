///////////////////////////////////////////////////////////////////////////////////////////
// METHODS


/*
let rabbit = {};
rabbit.speak = function(line) {
    console.log(`The rabbit says '${line}'`);   
}

rabbit.speak("I'm alive.");
*/


///////////////////////////////////////////////////////////////////////////////////////////


/*
function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry", speak };

whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
hungryRabbit.speak("I could use a carrot right now.");

speak.call(hungryRabbit, "Burp!");
*/


///////////////////////////////////////////////////////////////////////////////////////////


/*
function normalize() {
    console.log(this.coords.map(n => n / this.length));
}

normalize.call({ coords: [0, 2, 3], length: 5});
*/


///////////////////////////////////////////////////////////////////////////////////////////
// PROTOTYPES


/*
let empty = {};
console.log(empty.toString);
console.log(empty.toString());
console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));
*/


///////////////////////////////////////////////////////////////////////////////////////////


/*
console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);

let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEEE!");
*/


///////////////////////////////////////////////////////////////////////////////////////////
// CLASSES
// OLD STYLE


/*
function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");
weirdRabbit.speak("huuuuu");

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);
*/


///////////////////////////////////////////////////////////////////////////////////////////
// CLASS NOTATION
// NEW STYLE


class Rabbit {
    constructor(type) {
        this.type = type;
    }

    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

killerRabbit.speak("RHIIIII!");

let object = new class { getWord() { return "hello"; } };
console.log(object.getWord());



///////////////////////////////////////////////////////////////////////////////////////////
// OVERRIDING DERIVED PROPERTIES


Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);

killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
console.log(blackRabbit.teeth);
console.log(Rabbit.prototype.teeth);

console.log(Array.prototype.toString == Object.prototype.toString);
console.log([1, 2].toString());
console.log(Object.prototype.toString.call([1, 2]));


///////////////////////////////////////////////////////////////////////////////////////////
// MAPS
