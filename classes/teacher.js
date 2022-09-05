const Person = require('./person');
class Teacher extends Person{
    constructor(firstName,lastName, subject, yearsOfExperience){
      super(firstName,lastName);
        this.subject=subject,
        this.yearsOfExperience= yearsOfExperience
    }

    static combinedYearsOfExperience(arrayOfTeachers){
    //It was at this point that I got kinda confused
    let sum=0;
        arrayOfTeachers.forEach(function(ele){
            sum+=ele.yearsOfExperience;
        })
        /*The one above is my initial piece of code, save the additon of the .yearsOfExperience instance.*/
        /* const sum= arrayOfTeachers.reduce((prev,current)=>prev.yearsOfExperience + current.yearsOfExperience);*/
        return sum;
    }

}

const teacher1 = new Teacher("susan", "jones", "biology", 5);
const teacher2 = new Teacher("bobby", "roberts", "math", 15);
console.log(Teacher.combinedYearsOfExperience([teacher1, teacher2]));


// Your code here

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
