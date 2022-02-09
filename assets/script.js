const apiKey = "sHxGwmiK3oD1A33jienk7QUloE04aUXJcYj9OezNWuwdDq4Auf";

const apiSecret = "iilHX2WeaB32z0UiDuGCUblsqUZgzMhJPkBEZEUh";
window.FavoriteStarElement = document.registerElement(
    'favorite-star', 
    { prototype: proto }
);
    var saveBtn= document.getElementById("saveDog");

    saveBtn.addEventListener("click",myFunction); 
    function myFunction()
    {
        document.getElementById("saved-list").innerHTML = "hey";
  }

