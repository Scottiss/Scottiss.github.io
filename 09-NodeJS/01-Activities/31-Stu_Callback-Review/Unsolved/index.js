const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);

  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];
  animalJSON.foreach(item=> {
    if(item.species === "dog") {
      dogs.push(item)
    } else if (item.species === "cat") {
      cats.push(item)
    }
  });


fs.writeFile('dogs.json', JSON.stringify(dogs, null, 2), err=>{
  if (err) {
    throw err;
  }
})

fs.writeFile('cats.json', JSON.stringify(cats, null, 2), err=>{
  if (err) {
    throw err;
  }
})

});
