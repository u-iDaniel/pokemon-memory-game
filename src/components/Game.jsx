import {useState, useEffect} from 'react';
import { getPokemon } from '../pokeapi/retrievePokemon';
import Score from './Score';
import Card from './Card';
import './Game.css';

// May let user select the generation of Pokemon in the future
const REGION = 'kanto';

function updateHighScore(score) {
    localStorage.setItem("highScore", score);
}

function getHighScore() {
    const highScore = localStorage.getItem("highScore");
    return highScore ?? 0;
}

function Game() {
    const [pokemonData, setPokemonData] = useState([]);
    const [seenPokemon, setSeenPokemon] = useState([]);
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [isGameOver, setIsGameOver] = useState(false);

    useEffect(() => {
        (async () => {
            const data = await getPokemon(REGION);
            setPokemonData(data);
        })();
    }, []);

    useEffect(() => {
        if (lives <= 0) {
            setIsGameOver(true);
        }
    }, [lives]);

    // Conditional Renderings
    if (pokemonData.length == 0) {
        return <p>Loading...</p>
    }

    if (isGameOver) {
        updateHighScore(score);
        return (
            <div className='game-over'>
              <h2>Game Over!</h2>
              <p>Your final score: {score}</p>
              <button onClick={handleReset}>Play Again</button>
            </div>
          );
    }

    const addUnseen = function addIfPokemonNotSeenBefore() {
        if (!seenPokemon.includes(name)) {
            setSeenPokemon([...seenPokemon, name]);
        }
    }
    
    // Where addUnseen is placed does not matter as
    // seenPokemon array only updates after next render
    function handleSeen() {
        addUnseen();
        const isSeen = seenPokemon.includes(name)
        if (isSeen) {
            setScore((prevScore) => prevScore + 1);
        } else {
            setLives((prevLives) => prevLives - 1);
        }
    }
    
    function handleNew() {
        addUnseen();
        const isNew = !seenPokemon.includes(name)
        if (isNew) {
            setScore((prevScore) => prevScore + 1);
        } else {
            setLives((prevLives) => prevLives - 1);
        }
    }

    function handleReset() {
        // In future if user can change generations then refetch pokemon data
        setSeenPokemon([]);
        setScore(0);
        setLives(3);
        setIsGameOver(false);
    }

    const currPokemon = pokemonData[Math.floor(Math.random() * pokemonData.length)];
    const [name, src] = Object.entries(currPokemon)[0];
    return (
        <div className='game'>
            <Score score={score} lives={lives} highScore={getHighScore()} />

            <Card name={name} src={src} />

            <div className="btns">
                <button onClick={handleSeen}>Seen</button>
                <button onClick={handleNew}>New</button>
            </div>
        </div>
    )
}

export default Game;