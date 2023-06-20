import { useState } from 'react';
import './styles.scss';
import Cards from './Cards';
import pokeData from '../../../public/data/pokedex.json';
import pokemonTypes from '../../../public/data/types.json';

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
      const { name } = pokemon;
      const lowercaseSearchText = searchText.toLowerCase();
      const lowercaseName = name.french.toLowerCase() || name.english.toLowerCase();
      return lowercaseName.includes(lowercaseSearchText);
    });
    setResultData(filteredData);
  };

  const handleTypeChange = (event) => {
    const selectedType = event.target.value;
    if (selectedType === '') {
      setResultData(pokeData);
    }
    else {
      const filteredData = pokeData.filter((pokemon) => pokemon.type.includes(selectedType));
      setResultData(filteredData);
    }
  };

  return (
    <div className="allpokemon">
      <h2 className="allpokemon-h2">La liste des Pokémon</h2>
      <div className="allpokemon-div">
        <p className="allpokemon-div-p">Trouve ton Pokémon plus rapidement grâce à la barre de recherche !</p>
        <input
          className="allpokemon-div-input"
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Écris le nom de ton Pokémon :"
        />
        <select className="allpokemon-div-select" name="type" id="" onChange={handleTypeChange}>
          <option value="">Tous les types</option>
          {pokemonTypes.map((pokemonType) => (
            <option value={pokemonType.english} key={pokemonType.english}>
              {pokemonType.english}
            </option>
          ))}
        </select>
      </div>
      <Cards datas={resultData} />
    </div>
  );
}

export default AllPokemon;
