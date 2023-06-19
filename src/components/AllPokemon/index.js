import { useState } from 'react';
import './styles.scss';
import Cards from './Cards';
import pokeData from '../../../public/data/pokedex.json';

function AllPokemon() {
  const [resultData] = useState(pokeData);

  return (
    <div className="allpokemon">
      <h2 className="allpokemon-h2">La liste des pokemon</h2>
      <Cards datas={resultData} />
    </div>
  );
}

export default AllPokemon;
