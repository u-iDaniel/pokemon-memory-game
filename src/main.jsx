// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import Pokedex from 'pokedex-promise-v2';
async function retrievePokemon() {
    const P = new Pokedex();
    try {
        const kanto = await P.getPokedexByName("kanto");
        console.log(kanto);
    } catch (e) {
        console.log("Error: ", e);
    }
}
retrievePokemon();