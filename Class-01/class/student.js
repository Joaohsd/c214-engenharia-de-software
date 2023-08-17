class Student{
    constructor(name){
        this.name = name;
        this.grades = [];
    }

    addGrade(grade){
        this.grades.push(grade);
        console.log(`Grade ${grade} added for student ${this.name}.`);
    }

    calculateMean(){
        if (this.grades.length === 0){
            console.log (`The student ${this.name} does not have grades yet.`);
        }
        else{
            const gradesSum = this.grades.reduce((total, grade) => total+grade, 0);
            const gradesMean = gradesSum/this.grades.length;
            return gradesMean.toFixed(2);
        }
    }

    verifyAcceptance(){
        const minimumGradeForAcceptance = 60;
        const meanGrade = this.calculateMean();
        if (meanGrade >= minimumGradeForAcceptance){
            return `${this.name} has been approved and mean ${meanGrade}.`;
        }
        else{
            return `${this.name} has not been approved and media ${meanGrade}.`;
        }
    }
}

const student1 = new Student('João');
const student2 = new Student('Maria');

student1.addGrade(60);
student1.addGrade(100);

student2.addGrade(50);
student2.addGrade(65);

console.log(student1.verifyAcceptance());
console.log(student2.verifyAcceptance());