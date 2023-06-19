import './styles.scss';
import {
  string, arrayOf, shape, number,
} from 'prop-types';

function Card({
  id, name, type, base,
}) {
  // eslint-disable-next-line no-shadow
  function getColorForType(type) {
    switch (type) {
      case 'Grass':
        return 'green';
      case 'Poison':
        return 'purple';
      case 'Fire':
        return 'rgb(149, 27, 27)';
      case 'Water':
        return 'blue';
      case 'Normal':
        return 'grey';
      case 'Bug':
        return 'rgb(136, 255, 0)';
      default:
        return 'gray'; // Couleur par défaut si le type n'est pas reconnu
    }
  }

  function getBackgroundColor(types) {
    if (types.length === 1) {
      return getColorForType(types[0]);
    } if (types.length === 2) {
      if (types.includes('Grass') && types.includes('Poison')) {
        return 'linear-gradient(315deg, rgba(158,0,255,1) 0%, rgba(35,149,2,1) 100%)';
      }
      if (types.includes('Fire') && types.includes('Flying')) {
        return 'linear-gradient(315deg, rgba(177,179,176,1) 0%, rgba(184,24,57,1) 100%)';
      }
    }
    return 'gray'; // Couleur par défaut si le nombre de types est incorrect
  }

  const backgroundColor = getBackgroundColor(type);
  const imagePath = `/images/${String(id).padStart(2, '0')}.png`;

  return (
    <div className="card" style={{ background: backgroundColor }}>
      <img className="card-img" src={imagePath} alt={name.french} />
      <p className="card-name">{name.french}</p>
      <p className="card-type">{type.join(', ')}</p>
      <div className="card-stats">
        <p className="card-hp">HP: {base.HP}</p>
        <p className="card-att">Attack: {base.Attack}</p>
        <p className="card-def">Defense: {base.Defense}</p>
        <p className="card-spa">Sp. Attack: {base['Sp. Attack']}</p>
        <p className="card-spd">Sp. Defense: {base['Sp. Defense']}</p>
        <p className="card-speed">Speed: {base.Speed}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: number.isRequired,
  name: shape({
    english: string.isRequired,
    french: string.isRequired,
  }).isRequired,
  type: arrayOf(string).isRequired,
  base: shape({
    HP: number.isRequired,
    Attack: number.isRequired,
    Defense: number.isRequired,
    'Sp. Attack': number.isRequired,
    'Sp. Defense': number.isRequired,
    Speed: number.isRequired,
  }).isRequired,
};

export default Card;
