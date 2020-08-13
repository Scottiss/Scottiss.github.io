const inquirer = require ('inquirer');
const fs = require ('fs');

inquirer.prompt = [
    {
    type: "input",
    name: "name",
    message: "What is your name?"
},
{
    type: "checkbox",
    name: "stack",
    message: "What languages do you know?",
    choices: [
        "HTML",
        "CSS",
        "JavaScript",
        "MySql"
    ]
}, 
{
    type: "list",
    name: "contact",
    message: "What's your preferred method of contact?",
    choices: [
        "email",
        "phone",
        "morse code"
    ]
}

].then(function (data){
    let filename = data.name.toLowerCase().split(' ').join("")+".json";
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err){
        if(err){
            return console.log(err);
        }
        console.log("Success!");
    })
})