
class Dog {
	constructor(newName, newBreed, newCollar, newAge, newCuteness = true){
		this.name = newName;
		this.breed = newBreed;
		this.collar = newCollar;
		this.age = newAge;
		this.cuteness = newCuteness;
	}
}

let fido = new Dog("Fido", "Frenchie", "leather", 7);

console.log(fido);
console.log(fido.cuteness);