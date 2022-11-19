function testBracketsDynamicAccess() {
    var dynamicKey = Math.random() > 0.5 ? "speed" : "color";
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
//   testBracketsDynamicAccess();


  const car = {
    engine: true,
    steering: true,
    speed: "slow",
    color: "orange"
  }

  console.log(Object.keys(car));
  /*
  const sportsCar = Object.create(car);
  sportsCar.speed = "fast"
  sportsCar.price = 599
  console.log(sportsCar)
  for (const prop in sportsCar) {
    //console.log(prop)
  }

for (const prop of Object.keys(sportsCar)) {
    console.log(prop, ": ", sportsCar[prop])
}
*/