const apiKey = 'sHxGwmiK3oD1A33jienk7QUloE04aUXJcYj9OezNWuwdDq4Auf'
const apiSecret = 'iilHX2WeaB32z0UiDuGCUblsqUZgzMhJPkBEZEUh'

const dogArray = ['It is a myth that dogs are color blind. They can actually see in color, just not as vividly as humans. It is akin to our vision at dusk.', 'If never spayed or neutered, a female dog, her mate, and their puppies could produce over 66,000 dogs in 6 years!',
    'A one year old dog is as mature, physically, as a 15 year old human.', 'An American Animal Hospital Assoc. poll found that 33% of dog owners admit to talking to their dogs on the phone and leaving answering machine messages for them while away.', "Dog's nose prints are as unique as a human's finger prints and can be used to accurately identify them.",
    'Dogs have no sense of “time”.', "Every dog on earth likely descended from a species knows as the Tomarctus, a creature that roamed the earth over 15 million years ago.",];

var saveBtn = document.getElementById("saveDog");;
var clearBtn = document.getElementById("clear");
var searchBtn = document.getElementById("search");
var factBtn = document.getElementById('fact-btn');
var image = document.getElementById("image");
var savedList = document.getElementById("saved-list");

var dogName = $("#dogName");
var dogAge = $("#dogAge");
var dogBreed = $("#dogBreed");
var dogPic = $("#dogPic");
var dogGender = $("#dogGender");
var dogContact = $("#dogContact");
var dogId = $("#dogId");

function renderDog(name, age, breed, pic, gender, contact, id){
    dogName.text(name);
    dogAge.text(age);
    dogBreed.text(breed);
    dogPic.attr("src", pic);
    dogGender.text(gender);
    dogContact.text(contact);
    dogId.text(id);
}



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
        return fetch('https://api.petfinder.com/v2/animals?location=' + userInput + '&page=1&type=dog&limit=1&sort=random', {
        
        //return fetch('https://api.petfinder.com/v2/animals/53169484', {
            headers: {
                'Authorization': data.token_type + ' ' + data.access_token,

                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (response) {
            return response.json();

        }).then(function (data) {
            console.log(userInput, data);
            console.log(data.animals[0].id);

            renderDog(data.animals[0].name, data.animals[0].age, data.animals[0].breeds.primary, data.animals[0].photos[0].medium, data.animals[0].gender, data.animals[0].contact.email, data.animals[0].id);
            //renderDog(data.animal.name, data.animal.age, data.animal.breeds.primary, data.animal.photos[0].medium, data.animal.gender, data.animal.contact.email);


        })

    }).catch(function (error) {
        console.log('something went wrong', error)
    })


});

$(document).on("click", "#clickHistory", function() {

})

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

saveBtn.addEventListener("click", function(){
var idEl = document.getElementById('dogId').innerHTML;
if(idEl == null || idEl == ""){
    window.alert("Must search dog to add to saved list")
} else{
    let dogObj = {
        name: document.getElementById("dogName").innerHTML,
        id: document.getElementById("dogId").innerHTML
    }
    var savedDogsList;
    if(JSON.parse(localStorage.getItem("savedDogs")) == null){
        savedDogsList = [];
    } else{
        savedDogsList = JSON.parse(localStorage.getItem("savedDogs"));
    }
    savedDogsList.push(dogObj);
    localStorage.setItem("savedDogs", JSON.stringify(savedDogsList));
    console.log(savedDogsList);
    
    function renderHistory(){
        for (i=0;i<=savedDogsList.length;i++){
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(savedDogsList[i].name));
            savedList.appendChild(li);
        }
    }
    renderHistory();
}})

clearBtn.addEventListener("click", clearHistory)
function clearHistory() {
    document.getElementById("saved-list").innerHTML = "";
    localStorage.clear();
}