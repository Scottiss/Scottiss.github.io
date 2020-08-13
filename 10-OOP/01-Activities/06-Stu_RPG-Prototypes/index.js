const Character = function(arg_name, arg_age) {
    // process arguments
this.name = arg_name;
this.age = arg_age;

// Initialize states
this.stats = {
    health: 100
    hitPoints: 100
    strength: Math.floor(15* Math.random())
}

this.printStats = () => {
    console.log(`
    ===== Character Stats ===== 
    Name: ${this.name}
    Age: ${this.age}
    HitPoints: ${this.stats.hitPoints}
    
    Max Health: ${this.stats.health}
    Strength: ${this.stats.strength}
    ============================
     `);
    }
};

Character.prototype.IsAlive () => { 
    if(this.stats.health >0){
        return true;
    }
    else {
        return false;
    }
};

Character.prototype.Attack(arg_target){
    arg_target.stats.hitPoints -= this.stats.hitPoints;

};

Character.prototype.LevelUp(){
    ;

};

function test(){
    const Scott = new Character("Scott", 25);
    const Lagas = new Character("Lagas", 25);
}
