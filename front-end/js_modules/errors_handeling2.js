/*
    console.log(Math.ceil(0.4))
    console.log(Math.round(0.4))
    console.log(Math.round(0.5))
    console.log(Math.floor(0.7))
    console.log(Math.random()*100)

*/

/*
    var nom="hekima"
    console.log(nom.match(/b/))

    var nomg
    console.log(nomg)
*/

function addTwoNums(a, b){
    //console.log(typeof(b))
    try{
        if(typeof(a) != "number")
            throw new ReferenceError("The first argument is not a number")
        else if(typeof(b) != "number")
            throw new ReferenceError("The second argument is not a number")
        else
            console.log(a+b)
    }catch(err){
        console.log("Error! ", err)
    }
}
addTwoNums (5, "5")