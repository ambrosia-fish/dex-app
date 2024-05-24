/* IIFE */
let pokemonRepository = (function () {
    /* Create repository, define API */
    let repository = [];
    let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    /* getAll function: returns repository */
    function getAll () {
        return repository;
    }

    /* Loadlist function fires immediately via the function outside the IIFE. Pulls data from pokemon API and creates a pokemon object with name
    and details url. Fires add function. */
    function loadList(item) {
        return fetch(apiURL).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url,
                };
                add(pokemon);
            });
        }).catch(function (e){
            console.error(e);
        })
    }

    /* add function: creates button as child of pokemon-list li items. Button event listener to trigger loadDetails function, sends pokemon object*/
    function add (pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listPokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listPokemon.appendChild(button);
        pokemonList.appendChild(listPokemon);
        button.addEventListener("click", function () {
            loadDetails(pokemon)
          });
        }

    /* loadDetails takes a pokemon object, fetches/parses JSON pokemon metadata from the profile URL, 
       and creates four new objects for bio details. Includes a catch function to log any errors. Fires showDetails function. */
    function loadDetails(pokemon) {
        let url = pokemon.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (detail) {
            bioImgUrl = detail.sprites.front_default;
            bioHeight = detail.height;
            bioWeight = detail.weight;
            bioTypes = detail.types;
        }).catch(function (e) {
            console.error(e);
        }).then(function (){
            showDetails(pokemon);
        });
    }

    /* showDetails builds out modal in DOM*/
    function showDetails (pokemon) {
        console.log(pokemon.name + " " + bioImgUrl)
        console.log("Height: " + bioHeight)
        console.log("Weight: " + bioWeight)
        console.log("Type(s): " + bioTypes)
    };    
    
    /* returns key/value pairs for external access to repository functions s */
    return {
        getAll: getAll,
        add: add,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };
}());

/* calls loadList function on pokemonRepository, load list triggers the add function */
pokemonRepository.loadList().then (function() {});
    