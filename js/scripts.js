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
        button.addEventListener('click', showDetails (pokemon));
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        pokemonItem.appendChild(button);
        pokemonList.appendChild(pokemonItem);
    }

    function showDetails (pokemon) {
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

/* forEach function that writes the following string to DOM "_____ is _____ tall. */
pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon)
});
    