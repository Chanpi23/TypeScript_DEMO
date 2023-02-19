type  Student = {
    student_id:number,
    first_name:string,
    last_name:string,
    middle_name:string,
    is_enrolled:boolean 
}

type StudentGPA= {
    GPA_value: number 
}

type StudentWithGPA = Student & StudentGPA 

let student_info = (info:StudentWithGPA,school:string = "West High School"): string => {
    let enrolled =  info.is_enrolled ? "" : "not"

    return ` ${info.first_name} ${info.last_name} is ${enrolled} enrolled at ${school}.`
}

console.log(student_info({
    student_id:555,
    first_name:"Mary",
    last_name:"Sharp",
    middle_name:"Hat",
    is_enrolled:true,
    GPA_value:4.0
}, "East High School"))