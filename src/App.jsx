import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SearchPokemon from './components/SearchPokemon'
import PokemonCard from './components/PokemonCard'

function App() {
  const [pokemonData, setPokemonData] = useState(null)

  return (
    <>
      <SearchPokemon setPokemonData={setPokemonData} />
      <div className='flex justify-center items-center'>
        {' '}
        {/* Add this line */}
        {pokemonData && <PokemonCard pokemonData={pokemonData} />}
      </div>
    </>
  )
}

export default App
