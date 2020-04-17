class Car  { 

    constructor(name, age, color){
        this.name = name;
        this.age = age;
        this.color = color;
    }

    isMyCarCool(){
        if(this.age <2000){
            return ' this car sucks'
        }else{
            return ' this car is cool'
        }
    }
}

let honda = new Car('Honda civic', 2020, "red")
console.log({honda})
console.log(honda.isMyCarCool())

// HW
// Create a class Called Animal
// Animal should have the following constructor (name, species, age)
// Create a method called isAnimalYoung() if the animal is older than 10, then say "yes this animal is young" otherwise say "no this animal is old af"
// Create another method that will return the animal as a JSON string
