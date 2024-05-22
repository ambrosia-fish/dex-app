let pokemonRepository = (function () {
    let repository = [];
    let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function getAll () {
        return repository;
    }

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

    function showDetails (pokemon){
        console.log(pokemon.name)
    }

    
    return {
        getAll: getAll,
        add: add,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    }
})();

pokemonRepository.loadList().then (function() {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.add(pokemon);
    })
});
    