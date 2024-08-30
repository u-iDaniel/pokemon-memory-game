import pokemonLogo from './assets/International_Pokémon_logo.svg'
import './App.css'

function App() {

  return (
    <>
      <header>
        <h1><img className='logo' src={pokemonLogo} alt="Pokemon Logo" /> Memory Game</h1>
      </header>
      
      <hr />
      <footer>
        <h2>How to play:</h2>
        <p>Random Pokemon will be shown one by one. If you have seen a Pokemon before, click SEEN. Otherwise, click NEW.</p>
      </footer>
    </>
  )
}

export default App
