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
        return 'rgb(35,149,2)';
      case 'Poison':
        return 'rgb(158,0,255)';
      case 'Fire':
        return 'rgb(149, 27, 27)';
      case 'Water':
        return 'rgb(0,142,255)';
      case 'Normal':
        return 'rgb(153,153,153)';
      case 'Bug':
        return 'rgb(136, 255, 0)';
      case 'Flying':
        return 'rgb(215,215,215)';
      case 'Fairy':
        return 'rgb(255,0,245)';
      case 'Electric':
        return 'rgb(251,255,96)';
      case 'Ground':
        return 'rgb(129,68,46)';
      case 'Fighting':
        return 'rgb(87, 87, 87)';
      case 'Psychic':
        return 'url(/backgroundimg/psy.png';
      default:
        return 'gray'; // Couleur par défaut si le type n'est pas reconnu
    }
  }

  function getBackgroundColor(types) {
    if (types.length === 1) {
      return getColorForType(types[0]);
    } if (types.length === 2) {
      if (types.includes('Grass') && types.includes('Poison')) {
        return 'linear-gradient(315deg, rgba(35,149,2,1) 0%, rgba(158,0,255,1) 100%)';
      }
      if (types.includes('Fire') && types.includes('Flying')) {
        return 'linear-gradient(315deg, rgba(149,27,27,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Bug') && types.includes('Flying')) {
        return 'linear-gradient(315deg, rgba(136,255,0,1) 0%, rgba(177,179,176,1) 100%)';
      }
      if (types.includes('Bug') && types.includes('Poison')) {
        return 'linear-gradient(315deg, rgba(136,255,0,1) 0%, rgba(106,0,255,1)  100%)';
      }
      if (types.includes('Bug') && types.includes('Fairy')) {
        return 'linear-gradient(315deg, rgba(136,255,0,1) 0%, rgba(255,0,245,1)  100%)';
      }
      if (types.includes('Bug') && types.includes('Grass')) {
        return 'linear-gradient(315deg, rgba(136,255,0,1) 0%, rgba(35,149,2,1) 100%)';
      }
      if (types.includes('Normal') && types.includes('Flying')) {
        return 'linear-gradient(315deg, rgba(153,153,153,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Poison') && types.includes('Ground')) {
        return 'linear-gradient(315deg, rgba(106,0,255,1) 0%, rgba(129,68,46,1) 100%)';
      }
      if (types.includes('Normal') && types.includes('Fairy')) {
        return 'linear-gradient(315deg, rgba(153,153,153,1) 0%, rgba(255,0,245,1) 100%)';
      }
      if (types.includes('Poison') && types.includes('Flying')) {
        return 'linear-gradient(315deg, rgba(158,0,255,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Water') && types.includes('Fighting')) {
        return 'linear-gradient(315deg, rgba(0,142,255,1) 0%, rgba(87,87,87,1) 100%)';
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
      <p className="card-type">Type: {type.join(', ')}</p>
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
