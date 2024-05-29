/* IIFE */
let pokemonRepository = (function () {
    /* Create repository, define API */
    let repository = [];
    let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    /* getAll function: returns repository */
    function getAll () {
        return repository;
    };

    /* Loadlist function fires immediately via the function outside the IIFE. Pulls data from pokemon API and creates a pokemon object with name
    and details url. Fires add function. */
    function loadList() {
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
        listPokemon.classList.add('list-group-item');
        let button = document.createElement('button')
        button.innerText = pokemon.name 
        button.classList.add('btn');
        button.classList.add('btn-primary');
        button.setAttribute("data-toggle", "modal");
        button.setAttribute('data-target','#exampleModal');
        listPokemon.appendChild(button);
        pokemonList.appendChild(listPokemon);
        button.addEventListener("click", function () {
            loadDetails(pokemon);
          });
        }

    /* loadDetails takes a pokemon object, fetches/parses JSON pokemon metadata from the profile URL, 
       and creates four new objects for bio details. Includes a catch function to log any errors. */
    function loadDetails(pokemon) {
    let bioImgUrl, bioHeight, bioWeight;

    let url = pokemon.detailsUrl;
    return fetch(url).then(function (response) {
        return response.json();
    }).then(function (detail) {
        bioImgUrl = detail.sprites.front_default;
        bioHeight = detail.height;
        bioWeight = detail.weight;
        return { bioImgUrl, bioHeight, bioWeight };
    }).catch(function (e) {
        console.error(e);
    }).then(function () {
        if (bioImgUrl && bioHeight && bioWeight) {
            let displayImage = bioImgUrl;
            let displayHeight = bioHeight;
            let displayWeight = bioWeight;
            let modalTitle = document.querySelector('.modal-title');
            modalTitle.innerText = pokemon.name;
            let modalBody = document.querySelector('.modal-body');
            // set the modal's body to include an image of the pokemon (with an alt for screenreaders) along with height and weight
            modalBody.innerHTML = '<img alt="' + pokemon.name + '" src="' + displayImage + '"></img><br>' + 'Height: ' + displayHeight + '<br>' + 'Weight: ' + displayWeight;
        }
    });
};


    /* returns key/value pairs for external access to repository functions s */
    return {
        getAll: getAll,
        add: add,
        loadList: loadList,
        loadDetails: loadDetails,
    };
}());

/* calls loadList function on pokemonRepository, load list triggers the add function */
pokemonRepository.loadList().then (function() {
    pokemonRepository.getAll();
});
    