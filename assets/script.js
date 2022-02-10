
// window.FavoriteStarElement = document.registerElement(
//     'favorite-star', 
//     { prototype: proto }
// );

var dogArray = [];

var saveBtn = document.getElementById("saveDog");;
var clearBtn = document.getElementById("clear");
var searchBtn = document.getElementById("search");

searchBtn.addEventListener("click", function(e){
    e.preventDefault();
    var userInput = document.getElementById("breedInput").value;
    fetch(`https://dog.ceo/api/breed/${userInput}/images`)
    .then(function(response) {return response.json()})
    .then(data => console.log(data));
    console.log(userInput);
})

saveBtn.addEventListener("click", myFunction);
function myFunction() {
    document.getElementById("saved-list").innerHTML = "hey";
}

clearBtn.addEventListener("click", clearHistory)
function clearHistory() {
    document.getElementById("saved-list").innerHTML = ""
}



function displayFinder(data){

}

function loadListofBreeds(){
    fetch("https://dog.ceo/api/breeds/list/all")
    
    .then(function(response) {return response.json()})
    .then(data => console.log(data));
}

function getDog(){

    fetch(`https://dog.ceo/api/${userInput}/image/random`)
    .then(function(response) {return response.json()})
    .then(data => console.log(data));
    console.log(userInput);
}
