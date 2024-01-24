function PokemonCard({ pokemonData }) {
    if (!pokemonData) return null;
  
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-red-500 border-4 border-yellow-300">
        <img className="w-full" src={pokemonData.sprites.front_default} alt='pokemon image' />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">{pokemonData.name}</div>
          <p className="text-white text-base">
            Abilities: {pokemonData.abilities.map(ability => ability.ability.name).join(', ')}
          </p>
          <p className="text-white text-base">
            Types: {pokemonData.types.map(type => type.type.name).join(', ')}
          </p>
          <p className="text-white text-base">
            Height: {pokemonData.height}
          </p>
          <p className="text-white text-base">
            Weight: {pokemonData.weight}
          </p>
        </div>
      </div>
    );
  }
  
  export default PokemonCard;