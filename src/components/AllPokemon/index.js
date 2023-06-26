import { useState } from 'react';
import './styles.scss';
import Cards from './Cards';
import pokeDatas from '../../../public/data/pokedex.json';
import pokemonTypes from '../../../public/data/types.json';
import pokeGens from '../../../public/data/gen.json';

function AllPokemon() {
  const [searchText, setSearchText] = useState('');
  const [resultData, setResultData] = useState(pokeDatas);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    // eslint-disable-next-line no-use-before-define
    filterData(event.target.value);
  };
  // eslint-disable-next-line no-shadow
  const filterData = (searchText) => {
    const filteredData = pokeDatas.filter((pokemon) => {
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
      setResultData(pokeDatas);
    }
    else {
      const filteredData = pokeDatas.filter((pokemon) => pokemon.type.includes(selectedType));
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
          <option value="">Types</option>
          {pokemonTypes.map((pokemonType) => (
            <option value={pokemonType.english} key={pokemonType.english}>
              {pokemonType.english}
            </option>
          ))}
        </select>
        <select className="allpokemon-div-select" name="gen" id="" onChange={handleTypeChange}>
          <option value="">Génération</option>
          {pokeGens.map((pokeGen) => (
            <option value={pokeGen.gen} key={pokeGen.gen}>
              {pokeGen.gen}
            </option>
          ))}
        </select>
      </div>
      <Cards datas={resultData} />
    </div>
  );
}

export default AllPokemon;
