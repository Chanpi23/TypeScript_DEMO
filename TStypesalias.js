"use strict";
let student_info = (info, school = "West High School") => {
    let enrolled = info.is_enrolled ? "" : "not";
    return ` ${info.first_name} ${info.last_name} is ${enrolled} enrolled at ${school}.`;
};
console.log(student_info({
    student_id: 555,
    first_name: "Mary",
    last_name: "Sharp",
    middle_name: "Hat",
    is_enrolled: true,
    GPA_value: 4.0
}, "East High School"));
