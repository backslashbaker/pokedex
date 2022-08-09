import React from 'react'

export default function PokemonList({ pokemon }) {
  console.log(pokemon.types[0])
  return (
    <div>
      {pokemon.id}
      {pokemon.name}
    </div>
  )
}
