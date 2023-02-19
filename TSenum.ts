enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sept,
    Oct,
    Nov,
    Dec

}

function isItSummer (month:Month) {
    let isSummer:boolean
   let  monthName: string = typeof month === "string" ? month  : Month [month] 
    switch (month) {
        case Month.Jun:
            case Month.Jul:
                case Month.Aug:
                    isSummer= true 
                    break;
                    default:
                        isSummer=false
                        break;
    }
    return `${monthName}is ${isSummer} !`
}

console.log(isItSummer(13));