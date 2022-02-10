const apiKey = "sHxGwmiK3oD1A33jienk7QUloE04aUXJcYj9OezNWuwdDq4Auf";
const apiSecret = "iilHX2WeaB32z0UiDuGCUblsqUZgzMhJPkBEZEUh";



fetch("https://api.petfinder.com/v2/oauth2/token", {
    method: "POST",
    body:
        "grant_type=client_credentials&client_id=" + apiKey + "&client_secret=" + apiSecret,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
})


var saveBtn = document.getElementById("saveDog");

saveBtn.addEventListener("click", myFunction);
function myFunction() {
    document.getElementById("saved-list").innerHTML = "hey";
}

var clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click", clearHistory)
function clearHistory() {
    document.getElementById("saved-list").innerHTML = "";
}
