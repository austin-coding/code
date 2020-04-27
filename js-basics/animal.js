class Animal {

    constructor(name, species, age){
        this.name = name;
        this.species = species;
        this.age = age; 
    }

    isAnimalYoung(){
        if(this.age <10){
            return 'yes this animal is young'
        }else{
            return 'no this animal is old af'
        }
    }

    getAsJson(){
        return JSON.stringify(this);
    }

}

// leo is an object
// leo is an instance of the class Animal
let leo = new Animal('leo', 'bold stripe leopard gecko', '9')
console.log(leo.getAsJson())
// console.log({leo})
// console.log(leo.isAnimalYoung())

let max = new Animal('max', 'dog', 8);
console.log(max.getAsJson())