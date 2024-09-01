import Game from './components/Game';
import pokemonLogo from './assets/International_Pokémon_logo.svg'
import './styles/App.css';

function App() {

  return (
    <>
      <header>
        <h1><img className='logo' src={pokemonLogo} alt="Pokemon Logo" /> Memory Game</h1>
      </header>
      
      <Game />

      <hr />
      <footer>
        <h2>How to play:</h2>
        <p>Random Pokemon will be shown one by one. If you have seen a Pokemon before, click <b>SEEN</b>. Otherwise, click <b>NEW</b>.</p>
      </footer>
    </>
  )
}

export default App
