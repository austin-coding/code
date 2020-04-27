// This is the whole class Person
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
    thisPersonInfo(){
        return{
            person_name: this.name,
            person_age: this.age,
            person_race: this.race,
            person_gender: this.gender,
            
        }
    }
}
//  ^ return JSON.stringify can be used instead of listing all this shit above ^

// jack is the object and as well as the instance of the class Person
// jack, 39, white, and male are the arguments within the object

let jack = new Person('jack', 39, 'white', 'male')
// console.log({jack})
// console.log(jack.ifPersonYoung())
// console.log(jack.thisPersonInfo())

// jill is the object as well as the instance of the class Person
// jill, 38, white, and female are arguments within the object

let jill = new Person('jill', 38, 'white', 'female');
// console.log({jill})
// console.log(jill.ifPersonYoung())
// console.log(jill.thisPersonInfo())
