import { useState } from 'react';
import {
  arrayOf, shape,
} from 'prop-types';
import Card from './Card';
import './styles.scss';

function Cards({ datas }) {
  const [startIndex, setStartIndex] = useState(0); // Indice de départ pour l'affichage des cartes
  const [endIndex, setEndIndex] = useState(9); // Indice de fin pour l'affichage des cartes

  const showNextCards = () => {
    setStartIndex(endIndex);
    setEndIndex(endIndex + 9);
  };

  const showPreviousCards = () => {
    setEndIndex(startIndex);
    setStartIndex(startIndex - 9);
  };

  const limitedDatas = datas.slice(startIndex, endIndex); // Limiter les données aux indices startIndex et endIndex

  return (
    <div className="cards">
      {startIndex > 0 && (
        <button className="cards-button-up" type="button" onClick={showPreviousCards}>Voir précédentes</button>
      )}
      <div className="cards-all">
        {limitedDatas.map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </div>
      {endIndex < datas.length && (
        <button className="cards-button-down" type="button" onClick={showNextCards}>Voir suivantes</button>
      )}
    </div>
  );
}

export default Cards;

Cards.propTypes = {
  datas: arrayOf(shape()).isRequired,
};
