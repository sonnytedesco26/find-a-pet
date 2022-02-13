const apiSecret = 'iilHX2WeaB32z0UiDuGCUblsqUZgzMhJPkBEZEUh'
const apiKey = 'sHxGwmiK3oD1A33jienk7QUloE04aUXJcYj9OezNWuwdDq4Auf'
var dogArray = [];
var saveBtn = document.getElementById("saveDog");;
var clearBtn = document.getElementById("clear");
var searchBtn = document.getElementById("search");
var image = document.getElementById("image")
// change button funtion 
function picturetest(e){
    e.preventDefault();
    var userInput = document.getElementById("breedInput").value;
    // fetch(`https://dog.ceo/api/breed/${userInput}/images`)
    //     .then(function (response) { return response.json() })
    //     .then(data => console.log(data));
    // console.log(userInput);
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
        return fetch('https://api.petfinder.com/v2/animals?location=' + userInput ,{
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
searchBtn.addEventListener('click', function(e){
     picturetest(e)
    // var userInput = document.getElementById("breedInput").value;
    // fetch(`https://dog.ceo/api/breed/${userInput}/images`)
    //     .then(res => res.json())
    //     .then(result => {
    //         console.log(result)
    //         image.setAttribute( "src", result.message[0])
    //     })
    //     .catch(err=>console.log(err))
})

$('.addToFavBtn').on('click', event => {
  var storeName = $(event.target).parents()[1].firstElementChild.innerHTML;

  var favorites = localStorage.getItem("favorites");
  if (!favorites){
    localStorage.setItem("favorites", JSON.stringify({stores:[]}));
    favorites = JSON.parse(localStorage.getItem("favorites"));
  }else{
    favorites = JSON.parse(favorites);
  }
  
  favorites.stores.push(storeName);

  localStorage.setItem("favorites", JSON.stringify(favorites));

//   var todos =JASON.parse(localStorage.getItem("todos")) || []
//   var list = $("#list")
//   funtion appendTodo(todos){
// //$.each(todos, funtion(i, todo){
//   var le = $("<li>")
//       li.text(todo.title)
//       list.append(li)
      
//       funtion appenTodo()todos{
//           var li = $("<li>")
//               li.text(todo)
//               li.attr("data-index", i)
//               list,
//               .append(li)
//       }

//       list.on("click", "li", funtion(e){
//           var clickedItem = $(e.target)
//           todos.splice(click.attr("datda-index") 1)
//           localStorage.setIyem("todos", JSOM.strinify(todos))

//           clickedItem.remove()
          
//           $("submit-btn").on("lick", funtion)
//           todo.push("#todo-input").val())
//           localStorage.setItem("todos", JSON.strinify(todos))
//           appendTodo(todo)
//       }
// } 
});