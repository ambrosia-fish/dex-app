/* IIFE */
let pokemonRepository = (function () {
    /* Create repository, define API */
    let repository = [];
    let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    /* getAll function: returns repository */
    function getAll () {
        return repository;
    }

    /* add function: creates button as child of pokemon-list li items. Event listener to trigger modal containing more details.*/
    function add (pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listPokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listPokemon.appendChild(button);
        pokemonList.appendChild(listPokemon);
        button.addEventListener("click", function () {
            showDetails(pokemon);
          });
        }

    /* loadList function: fetches pokemon JSON data from the API, creates a new pokemon object, and calls the add function. 
       Includes a catch function to log any errors.*/
        function loadList() {
        return fetch(apiURL).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e){
            console.error(e);
        })
    }

    /* loadDetails function: takes a pokemon object, fetches/parses JSON pokemon metadata from the profile URL, 
       and adds detailed data to the pokemon object. Includes a catch function to log any errors. */
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.weight = details.weight;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }
    

    /* showDetails function: takes a pokemon object (item) which is passed from add() upon button click, 
       calls loadDetails on the item (pokemon), and then logs the details as a sentence.*/
    function showDetails (item) {
        pokemonRepository.loadDetails (item).then(function () {
            console.log(item.name + " is " + item.height + " meters tall.")
    })};    
    
    /* returns key/value pairs for external access to repository functions s */
    return {
        getAll: getAll,
        add: add,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };
}());

pokemonRepository.loadList().then (function() {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.add(pokemon);
    })
});
/* calls loadList function on pokemonRepository, load list triggers the add function */
pokemonRepository.loadList().then (function() {});
    