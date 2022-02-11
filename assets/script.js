const apiKey = 'sHxGwmiK3oD1A33jienk7QUloE04aUXJcYj9OezNWuwdDq4Auf'
const apiSecret = 'iilHX2WeaB32z0UiDuGCUblsqUZgzMhJPkBEZEUh'

var dogArray = [];

var saveBtn = document.getElementById("saveDog");;
var clearBtn = document.getElementById("clear");
var searchBtn = document.getElementById("search");





searchBtn.addEventListener("click", function (e) {
    e.preventDefault();
    var userInput = document.getElementById("zipInput").value;
    fetch("https://api.petfinder.com/v2/oauth2/token", {
        method: "POST",
        body: "grant_type=client_credentials&client_id=" + apiKey + "&client_secret=" + apiSecret,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }).then(function (response) {
        return response.json();


    }).then(function (data) {
        console.log('token', data)

        return fetch('https://api.petfinder.com/v2/animals?location=' + userInput + '&page=1&type=dog', {
            headers: {
                'Authorization': data.token_type + ' ' + data.access_token,

                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (response) {
            return response.json();

        }).then(function (data) {
            console.log(userInput, data)
            return `<p>Name: </p> ${data.name}`
            

        })

    }).catch(function (error) {
        console.log('something went wrong', error)
    })


});


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