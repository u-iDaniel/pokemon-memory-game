import Pokedex from 'pokedex-promise-v2';

function Game() {
    return (
        <></>
    )
}

async function retrievePokemon() {
    const P = new Pokedex();
    try {
        const kanto = await P.getPokedexByName("kanto");
        console.log(kanto);
    } catch (e) {
        console.log("Error: ", e);
    }
}

export default Game;