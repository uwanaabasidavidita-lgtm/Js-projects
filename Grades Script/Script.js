let arr = [{name: "David", grade: 78, grade2: 80, grade3: 85}, {name: "John", grade: 87, grade2: 90, grade3: 95}, {name: "Jane", grade: 92, grade2: 94, grade3: 96}];
console.log(arr);
function averageGrade(arr) {
   for (let i = 0; i < arr.length; i++) {
     arr[i].average = (arr[i].grade + arr[i].grade2 + arr[i].grade3) / 3;
   }
   return arr;  
}
console.log(averageGrade(arr));
function highestGrade(arr) {
    let highest = 0;
    let name = "";
    for (let i = 0; i < arr.length; i++) {
       if (arr[i].average > highest) {
         highest = arr[i].average;
         name = arr[i].name;
       }
    }
    return {name: name, average: highest};
}
console.log(highestGrade(arr));
for(const {name, average} of arr) {
    console.log(`${name} has an average grade of ${average}`);
}
