import Pokedex from 'pokedex-promise-v2';

async function retrievePokemon(region) {
    const P = new Pokedex();
    try {
        const regionPokedex = await P.getPokedexByName(region);
        const regionPokemon = regionPokedex.pokemon_entries;
        return regionPokemon;
    } catch (e) {
        console.log("Error: ", e);
    }
}

export const getPokemon = async function getPokemonNamesAndImages(region) {
    const regionPokemon = await retrievePokemon(region);
    const pokemonNamesImages = regionPokemon.map((pokemon) => {
        const name = pokemon.pokemon_species.name;
        return {
            [name]: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`
        }
    })
    return pokemonNamesImages;
}