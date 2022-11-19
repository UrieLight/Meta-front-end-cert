/*var age=10
if(age>=65)
    console.log("You get your income from your pension")
else if(age>=18 && age<65)
    console.log("You get an allowance")
else if(age<18)
    console.log("You get an allowance")
else
    console.log("The value of the age variable is not numerical")

var day="Sunday"
switch (day) {
    case 'Monday':
        console.log("Start the week")
        break;
    case 'Tuesday':
        console.log("House Church")
        break;
    case 'Tuesday':
        console.log("House Church")
        break;
    case 'Wednesday':
        console.log("Teaching evening")
        break;
    case 'Thursday':
        console.log("FreeDay")
        break;
    case 'Friday':
        console.log("Footsall && Prayer")
        break;
    case 'Saturday':
        console.log("Concert")
        break;
    case 'Sunday':
        console.log("Church Service Day")
        break;
    default:
        console.log("Rest")
        break;
}
*/
var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}

console.log(table)

function arraybuilder(one, two, three) {
    var arr = [];
    arr.push(one)
    arr.push(two)
    arr.push(three)

    return arr
}

var simpleArr = arraybuilder("Uriel", "Christelle", "Hekima")
simpleArr.push("intru")
simpleArr.pop("intru")
console.log(simpleArr)