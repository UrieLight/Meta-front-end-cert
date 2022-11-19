class Train{
    constructor(color, lightsOn){
        this.color = color;
        this.lightsOn = lightsOn;
    }

    toggleLights(){
        this.lightsOn = !this.lightsOn;
        //console.log("Lights On?: ", this.lightsOn)
    }

    lightStatus(){
        console.log("Lights On?: ", this.lightsOn);
    }

    getSelf(){
        console.log(this);
    }

    getPrototype(){
        var proto = Object.getPrototypeOf(this);
        console.log(proto) ;
    }
}

var intercity = new Train('red', true);
//console.log(intercity);
/*intercity.toggleLights();
intercity.lightStatus();
intercity.getSelf();
intercity.getPrototype();
*/

class HighSpeedTrain extends Train {
    
    constructor(passengers, highSpeedOn, color, lightsOn){
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }

    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }

    toggleLights(){
        super.toggleLights();
        super.lightStatus();
        console.log('Lights are 100% operational.');
    }
}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

//train5.toggleLights();
//train5.lightStatus();

highSpeed1.toggleLights();
highSpeed1.getPrototype();
train5.getPrototype();