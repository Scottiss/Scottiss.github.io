const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function combineAnimals() {
  try {
    const files = ['dog', 'cat', 'hamster', 'goldfish'];
    let animalJSON = [];
    for (let fileName of files) {
      let animal = await readFileAsync(`${filename}.json`, 'utf8');
      animal.json.push(JSON.parse(animal));
    };
    const sortedAnimals = animalJSON.sort ((a, b)=> a.age - b.age)
    await writeFileAsync('combined.json', JSON.stringify(sortedAnimals, null, 2),)
    console.log('Successfully wrote to combined.json')
  } catch(err) {
    console.log(err)

  }
}

combineAnimals();
