import { useState } from 'react';
import './styles.scss';
import Cards from './Cards';
import pokeDatas from '../../../public/data/pokedex.json';
import pokemonTypes from '../../../public/data/types.json';
import pokeGens from '../../../public/data/gen.json';

function AllPokemon() {
  const [searchText, setSearchText] = useState('');
  const [resultData, setResultData] = useState(pokeDatas);

  // Gestioon du select pour les types
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    // eslint-disable-next-line no-use-before-define
    filterData(event.target.value);
  };
  // Gestioon du select pour les générations
  const handleGenChange = (event) => {
    const selectedGen = parseInt(event.target.value, 10); // Convertir en entier
    if (selectedGen === 0) {
      setResultData(pokeDatas); // Afficher tous les Pokémon si aucune génération n'est sélectionnée
    }
    else {
      const filteredData = pokeDatas.filter((pokemon) => pokemon.gen === selectedGen);
      setResultData(filteredData);
    }
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
        <p className="allpokemon-div-p">Vous retrouverez ici l'ensemble des Pokémon de génération une à neuf, présentés sous forme de carte. Pour plus de réactivité du site, ils sont rangés neuf par neuf. Vous pouvez trier les pokemon par nom, mais aussi par type mais aussi par génération.</p>
        <p className="allpokemon-div-p">Cliquez sur les cartes pour en découvrir un peu plus.</p>
        <p className="allpokemon-div-p">Trouve ton Pokémon plus rapidement grâce à la barre de recherche !</p>
        <input
          className="allpokemon-div-input"
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Choisis le nom de ton Pokémon"
        />
        <select className="allpokemon-div-select" name="type" id="" onChange={handleTypeChange}>
          <option value="">Types</option>
          {pokemonTypes.map((pokemonType) => (
            <option value={pokemonType.french} key={pokemonType.french}>
              {pokemonType.french}
            </option>
          ))}
        </select>
        <select className="allpokemon-div-select" name="gen" id="" onChange={handleGenChange}>
          <option value="0">Générations</option> {/* Valeur 0 pour afficher tous les Pokémon */}
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
