import Pokedex from 'pokedex-promise-v2';


/**
 * Get the name, description, and sprite of a pokemon via Pokédex number entry.
 * @param pokemonID the numerical ID of pokemon in the national Pokédex.
 * @returns {Promise<{name, sprite, description: string}>}
 */
export async function getPokeData(pokemonID) {

    try {
        const P = new Pokedex();
        const pokemonEntry1 = await P.getPokemonSpeciesByName(pokemonID);
        const pokemonEntry2 = await P.getPokemonByName(pokemonID);
        const pokeName = pokemonEntry1['name'];
        const pokeDescription = pokemonEntry1['flavor_text_entries'].filter(
            (text_entry) => text_entry.language.name === 'en')[0].flavor_text;
        const pokeNumber = pokemonEntry1['pokedex_numbers'].filter(
            (pokedexNumber) => pokedexNumber.pokedex.name === 'national')[0].entry_number;
        const pokeSprite = pokemonEntry2['sprites']['front_default'];

        return (
            {
                name: pokeName,
                number: pokeNumber,
                description: pokeDescription,
                sprite: pokeSprite,
            }
        );
    } catch (e) {
        console.log("Failed to get data.");
    }
}

// getPokeData(12).then((data) => console.log(data));

