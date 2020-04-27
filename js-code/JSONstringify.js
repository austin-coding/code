// This is the whole class Person
// Person is the object which contains propeties such as name, age, and race.
// The Object also contains methods such as "ifPersonYoung"
class Person {

    constructor(name, age, race, gender){
        this.name = name;
        this.age = age;
        this.race = race;
        this.gender = gender;
    }

    ifPersonYoung(){
        if(this.age <50){
            return ' this person is young '
        }else{
            return ' this person is old '
        }
    }
    // This method retuns a JSON String
    // "this" represents the entire object
    thisPersonInfo(){
        return JSON.stringify(this) 
    }
}


// jack is the object and as well as the instance of the class Person
// jack, 39, white, and male are the arguments within the object

let jack = new Person('jack', 39, 'white', 'male')
// console.log({jack})
// console.log(jack.ifPersonYoung())
console.log(jack.thisPersonInfo())

// jill is the object as well as the instance of the class Person
// jill, 38, white, and female are arguments within the object

let jill = new Person('jill', 38, 'white', 'female');
// console.log({jill})
// console.log(jill.ifPersonYoung())
console.log(jill.thisPersonInfo())
