// body to variable
var body = document.body;

// elements
var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var pictureEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoritesEl = document.createElement("div");
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

// content for elements
h1El.textContent = "Welcome!";
h2El.textContent = "This was created with JavaScript and Chrome Dev tools.";
pictureEl.textContent = "My Picture";
nameEl.textContent = "Cat";
favoritesEl.textContent = "My favorite foods are:";
li1.textContent = "seafood";
li2.textContent = "pizza";
li3.textContent = "steak";
li4.textContent = "chicken";

// append elements
body.appendChild(h1El);
body.appendChild(h2El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(pictureEl);
infoEl.appendChild(nameEl);
body.appendChild(favoritesEl);
favoritesEl.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

// style
h1El.setAttribute("style", "margin:auto; width:50%; text-align-center;");
h2El.setAttribute("style", "margin:auto; width:100%; text-align-center;");
infoEl.setAttribute("style", "margin:auto; width:50% text-align-center;");





