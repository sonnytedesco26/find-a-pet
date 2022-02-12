const apiSecret = 'iilHX2WeaB32z0UiDuGCUblsqUZgzMhJPkBEZEUh'
var dogArray = [];
var saveBtn = document.getElementById("saveDog");;
var clearBtn = document.getElementById("clear");
var searchBtn = document.getElementById("search");
var image = document.getElementById("image")
// change button funtion 
function picturetest(e){
    e.preventDefault();
    var userInput = document.getElementById("breedInput").value;
    fetch(`https://dog.ceo/api/breed/${userInput}/images`)
        .then(function (response) { return response.json() })
        .then(data => console.log(data));
    console.log(userInput);
    fetch("https://api.petfinder.com/v2/oauth2/token", {
        method: "POST",
        body: "grant_type=client_credentials&client_id=" + apiKey + "&client_secret=" + apiSecret,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }).then(function(response) {
        return response.json();
    }).then(function(data){
        console.log('token', data)
        return fetch('https://api.petfinder.com/v2/animals?' + searchBtn ,{
            headers: {
                'Authorization': data.token_type + ' ' + data.access_token,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (response){
            return response.json();
        }).then(function (data){
            console.log(userInput, data)
        })
    }).catch(function(error){
        console.log('something went wrong', error)
    })
};
saveBtn.addEventListener("click", myFunction);
function myFunction() {
    document.getElementById("saved-list").innerHTML = "hey";
}
clearBtn.addEventListener("click", clearHistory)
function clearHistory() {
    document.getElementById("saved-list").innerHTML = ""
}
function displayFinder(data) {
}
function loadListofBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(function (response) { return response.json() })
        .then(data => console.log(data));
}
function getDog() {
    fetch(`https://dog.ceo/api/${userInput}/image/random`)
        .then(function (response) { return response.json() })
        .then(data => console.log(data));
    console.log(userInput);
}
searchBtn.addEventListener('click', function(){
    var userInput = document.getElementById("breedInput").value;
    fetch(`https://dog.ceo/api/breed/${userInput}/images`)
        .then(res => res.json())
        .then(result => {
            console.log(result)
            image.setAttribute( "src", result.message[0])
        })
        .catch(err=>console.log(err))
})

$('.addToFavBtn').on('click', event => {
    var storeName = $(event.target).parents()[1].firstElementChild.innerHTML;
  
    var favorites = localStorage.getItem("favorites");
    if (!favorites){
      localStorage.setItem("favorites", JSON.stringify({stores:[0]}));
      favorites = JSON.parse(localStorage.getItem("favorites"));
    }else{
      favorites = JSON.parse(favorites);
    }
    
    favorites.stores.push(storeName);
  
    localStorage.setItem("favorites", JSON.stringify(favorites));
  
  });