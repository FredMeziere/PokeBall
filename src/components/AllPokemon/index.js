import { useState } from 'react';
import './styles.scss';
import Cards from './Cards';
import pokeData from '../../../public/data/pokedex.json';

function AllPokemon() {
  const [searchText, setSearchText] = useState('');
  const [resultData, setResultData] = useState(pokeData);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    // eslint-disable-next-line no-use-before-define
    filterData(event.target.value);
  };

  // eslint-disable-next-line no-shadow
  const filterData = (searchText) => {
    const filteredData = pokeData.filter((pokemon) => {
      const { name, type } = pokemon;
      const lowercaseSearchText = searchText.toLowerCase();
      const lowercaseName = name.french.toLowerCase();
      const lowercaseTypes = type.map((pokemonType) => pokemonType.toLowerCase());
      return lowercaseName.includes(lowercaseSearchText) || lowercaseTypes.includes(lowercaseSearchText);
    });
    setResultData(filteredData);
  };

  return (
    <div className="allpokemon">
      <h2 className="allpokemon-h2">La liste des pokemon</h2>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Search by type or name"
        />
      </div>
      <Cards datas={resultData} />
    </div>
  );
}

export default AllPokemon;
