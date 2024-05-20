let pokemonRepository = (function () {
    let pokemonList = [
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

    return {
        getAll: function() {
            return pokemonList;
        },
        add: function(pokemon) {
            pokemonList.push(pokemon);
        }
    };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
    document.write(pokemon.name + " is " + pokemon.height + " tall.");
        if (pokemon.height > .6)
        document.write(" " + "Whoa that is tall!")
    document.write("<br>")
})

/* Traditional for loop that writes following string to DOM "_____ is _____ tall." 
for (let i = 0; i < 3; i++) {
    document.write("<p>")
    document.write(pokemonList[i].pokemonName + " is " + pokemonList[i].height + " tall.")
    // if the pokemon is taller than 0.7 meters, highlight it with message.
    if (pokemonList[i].height > .7)
        document.write(" Whoa! That is big!")
    // insert line break
    document.write("<br>")
    document.write("</p>")
}
*/