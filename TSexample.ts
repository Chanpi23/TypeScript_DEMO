let grade:string = '85'
let grade2:number = 85 
let test_total:number = 100


let calcPercentage= (studentGrade:number, testTotal:number):string  => {
    let percentage= studentGrade/testTotal
    return `This student got ${percentage} percent on the test!`
}


 console.log(calcPercentage(grade2,test_total))

 export{}