//get the json data from the api
fetch("https://rickandmortyapi.com/api/character/")
//convert the json data to a java script object
.then((response) => response.json())
//create Cards that contain the data we just fetched with the function Cards
.then((data) => Cards(data.results));

//create cards that contain data
function Cards(data){
    //get the div where the cards will be displayed
    const cardContainer = document.querySelector("#card-group")
    //log the data that is going to be in the card in the console
    console.log(data)
    //put the data for every character we get from the api in a cardContainer's inner HTML
    data.forEach(character => {
        cardContainer.innerHTML =
            cardContainer.innerHTML + 
            `<div class="card">
            <h2>${character.name}</h2>
            <h4>Status: ${character.status}</h4>
            <h4>Species: ${character.species}</h4>
            <img src=${character.image} class="card-img-top"></img>
            </div>
            <br>
            `;
    })
}