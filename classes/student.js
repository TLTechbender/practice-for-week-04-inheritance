const Person = require('./person');
class Student extends Person{
    constructor(firstName,lastName, major, GPA){
        super(firstName,lastName);
        this.major=major;
        this.GPA= GPA;
    }

    static compareGPA(student1, student2){
        //It was at this point that a fella knew he was clueless...
        //Need I mention that a fella has also been making a whole lot of syntax errors
        if(student1.GPA> student2.GPA){

            return `${student1.firstName} ${student1.lastName} has the higher GPA.`;

        }
        else if(student2.GPA > student1){

            return `${student2.firstName} ${student2.lastName} has the higher GPA.`
        }
        else{
            return `Both students have the same GPA.`
        }
    }
}
// Your code here

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
