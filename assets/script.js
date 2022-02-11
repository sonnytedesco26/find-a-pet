<<<<<<< HEAD
<<<<<<< HEAD
getJSON( )
const apiKey = "sHxGwmiK3oD1A33jienk7QUloE04aUXJcYj9OezNWuwdDq4Auf";


const apiSecret = "iilHX2WeaB32z0UiDuGCUblsqUZgzMhJPkBEZEUh";
    var saveBtn= document.getElementById("saveDog");

    saveBtn.addEventListener("click",myFunction); 
    function myFunction()
    {
        document.getElementById("saved-list").innerHTML = "hey";
  }
 // 7fcb158de0574a55235667aaecc7d0286e5137fc
=======
// window.FavoriteStarElement = document.registerElement(
//     'favorite-star', 
//     { prototype: proto }
// );
=======
const apiKey = 'sHxGwmiK3oD1A33jienk7QUloE04aUXJcYj9OezNWuwdDq4Auf'
const apiSecret = 'iilHX2WeaB32z0UiDuGCUblsqUZgzMhJPkBEZEUh'
>>>>>>> 7059d86e999d38f549c54d79b72ecc176f7ebabe

var dogArray = [];

var saveBtn = document.getElementById("saveDog");;
var clearBtn = document.getElementById("clear");
var searchBtn = document.getElementById("search");




searchBtn.addEventListener("click", function (e) {
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
btn.addEventListener('click', function(){
    fetch("https://dog.ceo/api/${userInput}/image/random")
        .then(res =>) res.json())
        .then(result => {
            console.localStorage(result)
            image.src = result.message
        })
        .catch(err=>console.localStorage(err))

})

)
>>>>>>> 552062d2aff4fd7f1215a2c989b59b62c4df353c
