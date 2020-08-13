console.log(process.argv);
var a = process.argv[2];
var b = process.argv[3];

if (a === b) {
    console.log(true);
} else {
    console.log(false);
}

console.log(a === b ? true : false)

console.log(a === b);

console.log('true or false', process.argv[2] === process.argv[3]);
return process.argv[2] === process.argv[3];