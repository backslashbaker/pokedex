import { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import axios from 'axios';
import './App.css';
import './SearchBar';
import SearchBar from './SearchBar';

function App() {
  const [pokemon, setPokemon] = useState('');
  const [loading, setLoading] = useState(false);
  const [pokemonData, setPokemonData] = useState(null);

  function getAPI() {
    setLoading(true);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((res) => {
      console.log(res.data);
      setPokemonData(res.data);
      setLoading(false);
    }
}
  // useEffect(() => {
  //   console.log('THIS IS A POKEMON!!!!', typeof pokemon);
  //   setLoading(true);
  //   axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((res) => {
  //     console.log(res.data);
  //     setPokemonData(res.data);
  //     setLoading(false);
  //   });
  // }, [pokemon]);
  return (
    <div>
      <SearchBar onSubmit={setPokemon} />
      {loading && <div>Loading...</div>}
      {!loading && pokemonData && <PokemonList pokemon={pokemonData}/>}
      {/* {!loading && pokemonData ? (
        <PokemonList pokemon={pokemonData} />
      ) : (
        <div>Loading...</div>
      )} */}
      {/* {loading ? <div>Loading...</div> : <PokemonList pokemon={pokemonData}/>} */}
    </div>
  );
  // if (loading) {
  //   return <div>Loading...</div>;
  // } else {
  //   // return <PokemonList pokemon={pokemonData} />;
  //   // return <SearchBar onSubmit={setPokemon} />;
  // }
}

export default App;
