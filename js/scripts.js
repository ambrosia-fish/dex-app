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

    return {
        getAll: function() {
            return pokemonData;
        },
        add: function(pokemon) {
            pokemonData.push(pokemon);
        }
    };
})();

/* forEach function that writes the following string to DOM "_____ is _____ tall. */
document.write("<p>")
pokemonRepository.getAll().forEach(function(pokemon) {
    document.write(pokemon.name + " is " + pokemon.height + " tall.");
        if (pokemon.height > .6) {
        document.write(" " + "<span class='exclamation'> Whoa that is tall! </span>") }
    document.write("<br>")
})
document.write("</p>")

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