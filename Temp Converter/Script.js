
let tempArr = [23, 45, 67, 89, 12, 34, 56, 78, 90];
let unit = prompt("Celcius or Fahrenheit?");
function convertTemp(tempArr, unit) {
    let convertedArr = [];
    if (unit === "Fahrenheit") {
        for (let i = 0; i < tempArr.length; i++) {
            convertedArr.push((tempArr[i] * 9/5 + 32).toFixed(1));
        }
    } else if (unit === "Celcius") {
        for (let i = 0; i < tempArr.length; i++) {
            convertedArr.push((tempArr[i] - 32 * 5/9).toFixed(1));
        }
    } else {
        return "Invalid unit";
    }
    return convertedArr;
}
console.log(convertTemp(tempArr, unit));
