
let studentReportCard = [{name: "David", subjects: [{subject: "Math", grade: 85}, {subject: "English", grade: 90}, {subject: "Science", grade: 78}]}, {name: "John", subjects: [{subject: "Math", grade: 92}, {subject: "English", grade: 88}, {subject: "Science", grade: 95}]}, {name: "Jane", subjects: [{subject: "Math", grade: 78}, {subject: "English", grade: 85}, {subject: "Science", grade: 80}]}];
function calculateAverageGrade(studentReportCard) {
    for (let i = 0; i < studentReportCard.length; i++) {
        let totalGrade = 0;
        for (let j = 0; j < studentReportCard[i].subjects.length; j++) {
            totalGrade += studentReportCard[i].subjects[j].grade;
        }
        studentReportCard[i].averageGrade = totalGrade / studentReportCard[i].subjects.length;
    }
    return studentReportCard;
}
calculateAverageGrade(studentReportCard);

function bestSubject(studentReportCard) {
    for (let i = 0; i< studentReportCard.length; i++){
        let bestGrade = 0;
        let worseGrade = 100;
        let bestSubject = "";
        let worseSubject = "";
        let arr = []
        for (let j = 0; j < studentReportCard[i].subjects.length; j++) {
            if (studentReportCard[i].subjects[j].grade > bestGrade) {
                bestGrade = studentReportCard[i].subjects[j].grade;
                
                bestSubject = studentReportCard[i].subjects[j].subject;
                
            }
            else if (studentReportCard[i].subjects[j].grade < worseGrade) {
                worseGrade = studentReportCard[i].subjects[j].grade;
                worseSubject = studentReportCard[i].subjects[j].subject;
            }
        }    
        arr.push({subject: bestSubject, grade: bestGrade, worseGrade: worseGrade, worseSubject: worseSubject});
        console.log(`${studentReportCard[i].name}'s best subject is ${bestSubject} with a grade of ${bestGrade} and worst subject is ${worseSubject} with a grade of ${worseGrade}.`);  
    }
    return studentReportCard;
}
bestSubject(studentReportCard);

function ranks(studentReportCard) {
    studentReportCard.sort((a, b) => b.averageGrade - a.averageGrade);
    for (let i = 0; i < studentReportCard.length; i++) {
        console.log(`${i + 1}. ${studentReportCard[i].name} - Average Grade: ${studentReportCard[i].averageGrade.toFixed(2)}`);
    }
    return studentReportCard;
}
ranks(studentReportCard);

function passingStudents(studentReportCard) {
    let passing = studentReportCard.filter(student => student.averageGrade >= 50);
    console.log("Passing Students:");
    passing.forEach(student => {
        console.log(`${student.name} - Average Grade: ${student.averageGrade.toFixed(2)}`);
    });
    return passing;
}
passingStudents(studentReportCard);



function findReportCard(studentReportCard) {
    let findName = prompt("Enter the name of the student you want to find:");
    let student = studentReportCard.find(student => student.name === findName);
    if (student) {
        console.log(`Report Card for ${student.name}:`);
        student.subjects.forEach(subject => {
            console.log(`${subject.subject}: ${subject.grade}`);
        });
    } else {
        console.log("Student not found.");
    }
}

console.log(calculateAverageGrade(studentReportCard));


let obj = {name: "David"};
console.log(obj.y);
