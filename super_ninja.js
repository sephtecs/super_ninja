class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(Ninja.name);
    }

    showStats() {
        console.log("Name: " + this.name + ", " + "Health: " + this.health + ", " + "Speed: " + this.speed + ", " + "Strength: " + this.strength);
        // console.log(this.strength);
        // console.log(this.speed);
        // console.log(this.health);
    }

    drinkSake() {
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();


// Sensei Class
/**
 * Extend the Ninja class and create the Sensei class. 
 * A Sensei should have 200 Health, 10 speed, and 10 strength by default. 
 * In addition, a Sensei should have a new attribute called wisdom, and the 
 * default should be 10. Finally, add the speakWisdom() method. speakWisdom() 
 * should call the drinkSake() method from the Ninja class, before console.logging 
 * a wise message.
 */

class Sensei extends Ninja {
    constructor (name) { //
        super(name); //
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() { // Child Function 1
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
    showStats() {
        super.showStats();
    }
}

// example output
const superSensei = new Sensei("Master Splinter"); // variable created and assign it to a new Sensei (using this class as a blueprint, which in essence a new object) this is a new instance of a class, which is an object
superSensei.speakWisdom(); // access the speakWisdom method of Sensei object
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats(); // access the showStats method of Sensei object
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
