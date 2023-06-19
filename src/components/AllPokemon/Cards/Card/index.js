import './styles.scss';
import { string, arrayOf, shape } from 'prop-types';

function Card({
  name,
  type,
  base,
}) {
  return (
    <div className="card">
      <p className="card-name">{name.french}</p>
      <p className="card-type">{type.join(', ')}</p>
      <div className="card-stats">
        <p className="card-name">HP: {base.HP}</p>
        <p className="card-name">Attack: {base.Attack}</p>
        <p className="card-name">Defense: {base.Defense}</p>
        <p className="card-name">Sp. Attack: {base['Sp. Attack']}</p>
        <p className="card-name">Sp. Defense: {base['Sp. Defense']}</p>
        <p className="card-name">Speed: {base.Speed}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: shape({
    english: string.isRequired,
  }).isRequired,
  type: arrayOf(string).isRequired,
  base: shape({
    HP: string.isRequired,
    Attack: string.isRequired,
    Defense: string.isRequired,
    'Sp. Attack': string.isRequired,
    'Sp. Defense': string.isRequired,
    Speed: string.isRequired,
  }).isRequired,
};

export default Card;
