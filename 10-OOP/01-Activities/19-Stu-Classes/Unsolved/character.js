class Character {
  constructor(name, strength, hitPoints) {
    this.name = name;
    this.strength = strength;
    this.hitPoints = hitPoints
  }
  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`NAME has ${this.hitPoints} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {}

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    // console.log which character was attacked and how much damage was dealt
    // Then, change the opponent's hitPoints to reflect this
  }
}

// Create two unique characters using the "character" class

class Character {

  const derby = new Character("Derby", 30, 75);
  const winchester= new Character("Winchester", 50, 80);
  const cooper = new Character("Cooper", 15, 30);
  const imogen = new Character("Imogen", 100, 100);
  const mabel = new Character("Mabel", 99, 99);
}

// Create an interval that alternates attacks every 2000 milliseconds
clearInterval(2000);
