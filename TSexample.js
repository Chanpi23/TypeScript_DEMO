"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let grade = '85';
let grade2 = 85;
let test_total = 100;
let calcPercentage = (studentGrade, testTotal) => {
    let percentage = studentGrade / testTotal;
    return `This student got ${percentage} percent on the test!`;
};
console.log(calcPercentage(grade2, test_total));
