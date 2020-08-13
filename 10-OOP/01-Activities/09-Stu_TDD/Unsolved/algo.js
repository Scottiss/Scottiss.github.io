function Algo() {}

Algo.prototype.reverse = function(str) {
    return str.split("")
    .reverse()
    .join("")
};

Algo.prototype.isPalindrome = function(str) {
   return this.reverse(str) === str;
};

Algo.prototype.capitalize = function(str) {
    return str.toLowerCase().split(" ").map(word =>{
        return `${word[0].toUpperCase}${word.slice(1)}`;
    }).join(" ");
};

module.exports = Algo;
