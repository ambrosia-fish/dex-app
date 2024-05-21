let pokemonRepository = (function () {
    let pokemonData = [
        {
            name: 'Bulbasaur', 
            height: .71, 
            type: [
                'Grass',
                'Poison',
            ]  
        },
        {
            name: 'Charmander',
            height: .60,
            type: 'Fire',
        },
        {
            name: 'Squirtle',
            height: .5,
            type: 'Water',

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
        add: function(pokemon) {
            pokemonData.push(pokemon);
        },

        addListItem: addListItem
    }
})();

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon)
});
    