import React from 'react';

export default function PokemonList({ pokemon }) {
  // console.log(pokemon.types?.[0].type.name);
  console.log(pokemon)

  return (
    <div>
      {pokemon.id}
      {pokemon.name}
      {pokemon.types?.[0].type.name}
    </div>
  );
}
