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
    const [correct, setCorrect] = useState(null);

    useEffect(() => {
        (async () => {
            const data = await getPokemon(REGION);
            setPokemonData(data);
        })();
    }, []);

    if (pokemonData.length == 0) {
        return <p>Loading...</p>
    }

    const addUnseen = function addIfPokemonNotSeenBefore() {
        if (!seenPokemon.includes(name)) {
            setSeenPokemon([...seenPokemon, name]);
        }
    }
    
    function handleSeen() {
        addUnseen();
        setCorrect(seenPokemon.includes(name));
    }
    
    function handleNew() {
        addUnseen();
        setCorrect(!seenPokemon.includes(name));
    }
    
    const currPokemon = pokemonData[Math.floor(Math.random() * pokemonData.length)];
    const [name, src] = Object.entries(currPokemon)[0];
    return (
        <div className='game'>
            <Score correct={correct} />

            <Card name={name} src={src} />

            <div className="btns">
                <button onClick={handleSeen}>Seen</button>
                <button onClick={handleNew}>New</button>
            </div>
        </div>
    )
}

export default Game;