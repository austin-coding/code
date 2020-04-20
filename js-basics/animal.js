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
}

let leo = new Animal('leo', 'bold stripe leopard gecko', '10')
console.log({leo})
console.log(leo.isAnimalYoung())
