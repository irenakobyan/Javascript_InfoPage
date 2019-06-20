class Animal{
	#color = "yellow";
	constructor(age, gender) {
	this.age = age;
	this.gender = gender;
}
isMammal() {}
male() {}
static sayHi(){
	}
}

class Duck extends Animal{
	constructor(beakColor) {
		super(age, gender);
		this.beakColor = beakColor;
}
	swim() {}
	quack() {}
}

class Zebra extends Animal{
	constructor(is_wild) {
		super(age, gender);
		this.is_wild = is_wild;
}
	run();
}
