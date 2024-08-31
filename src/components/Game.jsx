import {useState, useEffect} from 'react';
import { getPokemon } from '../pokeapi/retrievePokemon';
import Score from './Score';
import Card from './Card';
import './Game.css';

// May let user select the generation of Pokemon in the future
const REGION = 'kanto';

function Game() {
    const [pokemonData, setPokemonData] = useState([]);
    const [seenPokemon, setSeenPokemon] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await getPokemon(REGION);
            setPokemonData(data);
        })();
    }, []);

    if (pokemonData.length == 0) {
        return <p>Loading...</p>
    }

    function handleNew() {
        setSeenPokemon([...seenPokemon, name]);
    }

    const currPokemon = pokemonData[Math.floor(Math.random() * pokemonData.length)];
    const [name, src] = Object.entries(currPokemon)[0];
    return (
        <div className='game'>
            <Score />

            <Card name={name} src={src} />

            <div className="btns">
                <button>Seen</button>
                <button onClick={handleNew}>New</button>
            </div>
        </div>
    )
}

export default Game;