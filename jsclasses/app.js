
class Dog {
	constructor(newName, newBreed, newCollar, newAge, newCuteness = true){
		this.name = newName;
		this.breed = newBreed;
		this.collar = newCollar;
		this.age = newAge;
		this.cuteness = newCuteness;

		Dog.#numberOfDogs++;
	}

	static #numberOfDogs = 0;

	static get numberOfDogs(){
		return Dog.#numberOfDogs;
	}
	static set numberOfDogs(newValue){
		throw new NumberOfDogsError();
	}

	static resetDogCount(){
		Dog.numberOfDogs = 0;
	}

	bark(){
		console.log("Woof! I am a " + this.name);
		throw new BarkError(this.name, this.breed);
	}
}

class NumberOfDogsError extends Error{
	constructor(){
		super("Cannot modify the number of dogs unless you're creating a dog via the Dog constructor.");
	}
}

let fido = new Dog("Fido", "Frenchie", "leather", 7);

console.log(Dog.numberOfDogs);

Dog.numberOfDogs = 10;

console.log(Dog.numberOfDogs);

// console.log(fido);
// console.log(fido.cuteness);

// fido.bark();

// let someExampleError = new Error()

class BarkError extends Error {
	constructor(dogName, dogBreed){
		super(`${dogName} of breed ${dogBreed} failed to bark.`);
	}
}

try {
	fido.bark();
} catch (error){
	// throw new BarkError(fido.name, fido.breed);
	// console.log(typeof error);
	if (error instanceof BarkError){
		console.log("Bark error occured.");
	}
}

