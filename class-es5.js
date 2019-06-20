function Animal(gender,age) {
	this.age = age;
	this.gender = gender;
}

Animal.sayHi= function() {}
Animal.prototype.isMammal = function() { }
Animal.prototype.mate = function() { }

function Duck(beakColor) {
	Animal.call(this, age, gender);
	this.beakColor = beakColor;
}

Duck.prototype.swim = function() { }
Duck.prototype.quack = function() { }
Duck.prototype = Animal.prototype;
Duck.prototype.constructor = Duck;

function Fish() {
	Animal.call(this, age, gender);
}
Fish.prototype = Animal.prototype;
Fish.prototype.constructor = Fish;


function Zebra(is_wild) {
	Animal.call(this, age, gender);
	this.is_wild = is_wild;
}

Zebra.prototype.run = function() {}
Zebra.prototype = Animal.prototype;
Zebra.prototype.constructor = Zebra;


