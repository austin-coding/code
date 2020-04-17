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