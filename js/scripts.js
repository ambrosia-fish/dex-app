let pokemonList = [
    {
        pokemonName: 'Bulbasaur', 
        height: .71, 
        type: [
            'Grass',
            'Poison',
        ]  
    },
    {
        pokemonName: 'Charmander',
        height: .60,
        type: 'Fire',
    },
    {
        pokemonName: 'Squirtle',
        height: .5,
        type: 'Water',

    }
]

// loop that writes following string to DOM "_____ is _____ tall."
for (let i = 0; i < 3; i++) {
    document.write(pokemonList[i].pokemonName + " is " + pokemonList[i].height + " tall.")
    // if the pokemon is taller than 0.7 meters, highlight it with message.
    if (pokemonList[i].height > .7)
        document.write(" Whoa! That is big!")
    // insert line break
    document.write("<br>")
}