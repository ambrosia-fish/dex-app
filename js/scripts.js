let pokemonRepository = (function () {
    let repository = [];

        }
    ]

    function addListItem(pokemon){
        let pokemonList = document.querySelector('.pokemon-list');
        let pokemonItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        pokemonItem.appendChild(button);
        pokemonList.appendChild(pokemonItem);
        button.addEventListener("click", function () {
            showDetails(pokemon);
          });
    }

    function showDetails (pokemon){
        console.log(pokemon.name)
    }

    return {
        getAll: function() {
            return pokemonData;
        },
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
    