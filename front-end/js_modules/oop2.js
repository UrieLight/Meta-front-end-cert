class Animal{
    constructor(color, energy){
        this.color = color;
        this.energy = energy;
    }

    isActive(){
        this.energy--;
        console.log('Energy: ', this.energy);
        if(this.energy==0)
            sleep();
    }

    sleep(){
        console.log('Sleeping!');
    }

    getColor(){
        console.log(this.color);
    }
}

class Cat extends Animal{
    constructor(color, energy, sound, canJump, canClimbTrees){
        super(color, energy);
        this.sound = sound;
        this.canJump = canJump;
        this.canClimbTrees = canClimbTrees;
    }

    makeSound(){
        //console.log(this.sound);
    }
}

class Bird extends Animal{
    constructor(color, energy, sound, canFly){
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }

    
    makeSound(){
        //console.log(this.sound);
    }
}

class HouseCat extends Cat{
    constructor(color, energy, houseCatSound, canJump, canClimbTrees){
        super(color, energy, houseCatSound, canJump, canClimbTrees);  
    }
    
    makeSound(option){
        if(option){
           super.makeSound();
            console.log(this.houseCatSound)
        }
    }
}

class Tiger extends Cat{
    constructor(color, energy, TigerSound, canJump, canClimbTrees){
        super(color, energy, TigerSound, canJump, canClimbTrees);  
    }
    
    makeSound(option){
        if(option){
           super.makeSound();
            console.log(this.TigerSound)
        }
    }
}

class Parrot extends Bird{
    constructor(color, energy, sound, canFly, canTalk){
        super(color, energy, sound, canFly);
        this.canTalk = canTalk;
    }

    
    makeSound(){
        //console.log(this.sound);
    }
}