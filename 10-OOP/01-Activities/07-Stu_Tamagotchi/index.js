const { Console } = require("console");

const DigitalPal = function(arg_name, arg_age) {
    // member property declaration
    this.name = arg_name;
    this.age = arg_age;

    // dynamic property declaration
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.outside = false;
    this.houseCondition = 100;

}
// feed pal
DigitalPal.prototype.feed = function(){
    // if pal is hungry
    if(this.hungry){
        console.log("That was yummy!");
        this.hungry = false;
        this.sleepy = true;

    }
// if pal is not hungry
    else{
        console.log("No thanks, I'm full.")
    }
}
//  put pal to sleep
DigitalPal.prototype.sleep= function(){

    // if pal is sleepy
    if(this.sleepy){
        console.log("zzzzzzzzz");

        // pal wakes up older and bored, but rested
        this.bored = true;
        this.sleepy = false;
        this.increaseAge();
    }

    // if pal is not sleepy
    else{
        console.log("No way! I'm not tired!")
    }
}
// play with pal
DigitalPal.prototype.play = function(){

    // if pal is bored
    if(this.bored){
        console.log("Yay! Let's play!");

        // pal hungry but entertained
        this.hungry = true;
        this.bored = false;
    }
    else{
        console.log("Not right now.")
    }
}

// pal grows older
DigitalPal.prototype.increaseAge = function(){
    console.log(`Happy Birthday to me! I'm ${this.age} days old`);
}

// pal barks
DigitalPal.prototype.bark = function(){ console.log("Woof Woof!");}

// pal meows
DigitalPal.prototype.meow = function(){ console.log("Meow!");}

// pal goes outside
DigitalPal.prototype.goOutside = function(){
    if(this.outside){
        console.log("But we're already outside though...");
    }
    else{
        console.log("Yay! I love the outdoors");
        this.bark();
        this.outside = true;
    }
}

// pal goes inside
DigitalPal.prototype.goInside = function(){
    if(this.outside){
        console.log("Do we have to? Fine...");
    }
    else{
        console.log("I'm already inside...");
}


DigitalPal.prototype.destroyFurniture = function(){
    console.log("HAHAHAHAHA! TAKE THAT, COUCH!");
    this.houseCondition -= 10;
    this.bored = false;
    this.sleepy = true;

    if(this.houseCondition === 0){
        // ?
    }
}

DigitalPal.prototype.buyNewFurniture = function(){
    console.log("Are you sure about that?");
    this.houseCondition += 50;
}
if(this.bored){
    console.log("Yay! Let's play!");
}
else{
    console.log("Not right now.");
}

function test(){
    const dog = new DigitalPal ("Rover");
    const cat = new DigitalPal ("Fluffles");

    dog.play();
    dog.goInside();
    dog.goOutside();
    dog.sleep();
    dog.feed();
    dog.goInside();
    dog.destroyFurniture();

}

// runs game
async function runGame(){
    let t_input = "";
    while(t_input != "quit"){
        { input: t_userInput  } await inquirer.prompt([{
            type: "list",
            name: "input",
            message: "What would you like to do?",
            choices: ["Feed", "Sleep", "Play", "Go Outside", "Go Inside", "Buy New Furniture"]
        }]);

        t_input = t_userInput;
    
}
}

runGame();
