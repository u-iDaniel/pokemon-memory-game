import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { getPokemon } from './pokeapi/retrievePokemon.js';
getPokemon('kanto')
.then((response) => console.log(response));