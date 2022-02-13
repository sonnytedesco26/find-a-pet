const apiKey = 'sHxGwmiK3oD1A33jienk7QUloE04aUXJcYj9OezNWuwdDq4Auf'
const apiSecret = 'iilHX2WeaB32z0UiDuGCUblsqUZgzMhJPkBEZEUh'

const dogArray = ['It is a myth that dogs are color blind. They can actually see in color, just not as vividly as humans. It is akin to our vision at dusk.', 'If never spayed or neutered, a female dog, her mate, and their puppies could produce over 66,000 dogs in 6 years!',
    'A one year old dog is as mature, physically, as a 15 year old human.', 'An American Animal Hospital Assoc. poll found that 33% of dog owners admit to talking to their dogs on the phone and leaving answering machine messages for them while away.', "Dog's nose prints are as unique as a human's finger prints and can be used to accurately identify them.",
    'Dogs have no sense of “time”.', "Every dog on earth likely descended from a species knows as the Tomarctus, a creature that roamed the earth over 15 million years ago.",];

var saveBtn = document.getElementById("saveDog");;
var clearBtn = document.getElementById("clear");
var searchBtn = document.getElementById("search");
var factBtn = document.getElementById('fact-btn');
var image = document.getElementById("image")

var dogName = document.getElementById("dogName");
var dogAge = document.getElementById("dogAge");
var dogBreed = document.getElementById("dogBreed");
var dogPic = document.getElementById("dogPic");
var dogGender = document.getElementById("dogGender");
var dogContact = document.getElementById("dogContact");






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
            console.log(data.animals[0].name)


        })

    }).catch(function (error) {
        console.log('something went wrong', error)
    })


});

factBtn.addEventListener('click', createFact);
function createFact() {
    document.getElementById("dogfact").innerHTML = 
        dogArray[Math.floor(Math.random() * dogArray.length)];
    fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(res => res.json())
        .then(result => {
            (image.src = result.message)
            
        })
        .catch(err => console.log(err))
}

saveBtn.addEventListener("click", myFunction);
function myFunction() {
    document.getElementById("saved-list").innerHTML = "hey";
}

clearBtn.addEventListener("click", clearHistory)
function clearHistory() {
    document.getElementById("saved-list").innerHTML = "";
}



function displayFinder(data) {

}

// function loadListofBreeds() {
//     fetch("https://dog.ceo/api/breeds/list/all")

//         .then(function (response) { return response.json() })
//         .then(data => console.log(data));
// }


