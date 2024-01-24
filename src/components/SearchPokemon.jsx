import { useState } from 'react'
import axios from 'axios'

function SearchPokemon({ setPokemonData }) {
  const [pokemon, setPokemon] = useState('')

  const searchPokemon = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
      )
      setPokemonData(res.data)
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <form onSubmit={searchPokemon} className="flex items-center justify-center mt-10">
      <input
        type='text'
        placeholder='Search Pokemon'
        value={pokemon}
        onChange={(e) => setPokemon(e.target.value)}
        className="mr-2 py-2 px-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500"
      />
      <button type='submit' className="py-2 px-4 bg-blue-500 text-white rounded-lg focus:outline-none hover:bg-blue-600">Search</button>
    </form>
  )
}

export default SearchPokemon