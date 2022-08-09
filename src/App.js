import { useState, useEffect } from 'react'
import PokemonList from './PokemonList'
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState(['bulbasaur'])

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((res) => {
      setPokemon(res.data)
    })
  }, [])

  return <PokemonList pokemon={pokemon} />

}

export default App
