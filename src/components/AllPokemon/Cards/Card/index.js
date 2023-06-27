import './styles.scss';
import {
  string, arrayOf, shape, number,
} from 'prop-types';

function Card({
  id, name, type, base, gen, url,
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
        return 'rgb(109, 255, 0)';
      case 'Flying':
        return 'rgb(215,215,215)';
      case 'Fairy':
        return 'rgb(192,52,196)';
      case 'Electric':
        return 'rgb(251,255,96)';
      case 'Ground':
        return 'rgb(129,68,46)';
      case 'Fighting':
        return 'rgb(87, 87, 87)';
      case 'Psychic':
        return 'url(/backgroundimg/psy.png';
      case 'Steel':
        return 'rgb(67,70,75)';
      case 'Rock':
        return 'rgb(90,77,65)';
      case 'Ice':
        return 'rgb(185,232,234)';
      case 'Ghost':
        return 'rgb(241, 241, 243)';
      case 'Dragon':
        return 'rgb(255,127,80)';
      case 'Dark':
        return 'rgb(50, 50, 50)';
      default:
        return 'gray'; // Couleur par défaut si aucune combinaisons existantes
    }
  }

  function getBackgroundColor(types) {
    if (types.length === 1) {
      return getColorForType(types[0]);
    } if (types.length === 2) {
      // GRASS TYPE
      if (types.includes('Grass') && types.includes('Poison')) {
        return 'linear-gradient(60deg, rgba(35,149,2,1) 0%, rgba(158,0,255,1) 100%)';
      }
      if (types.includes('Grass') && types.includes('Psychic')) {
        return 'linear-gradient(60deg, rgba(35,149,2,1) 0%, rgba(98,89,129,1) 100%)';
      }
      if (types.includes('Grass') && types.includes('Flying')) {
        return 'linear-gradient(60deg, rgba(35,149,2,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Grass') && types.includes('Dark')) {
        return 'linear-gradient(60deg, rgba(35,149,2,1) 0%, rgba(50, 50, 50,1) 100%)';
      }
      if (types.includes('Grass') && types.includes('Fighting')) {
        return 'linear-gradient(60deg, rgba(35,149,2,1) 0%, rgba(87,87,87,1) 100%)';
      }
      if (types.includes('Grass') && types.includes('Ground')) {
        return 'linear-gradient(60deg, rgba(35,149,2,1) 0%, rgba(129,68,46,1) 100%)';
      }
      if (types.includes('Grass') && types.includes('Ice')) {
        return 'linear-gradient(60deg, rgba(35,149,2,1) 0%, rgba(185,232,234,1) 100%)';
      }
      if (types.includes('Grass') && types.includes('Fairy')) {
        return 'linear-gradient(60deg, rgba(35,149,2,1) 0%, rgba(192,52,196,1) 100%)';
      }
      if (types.includes('Grass') && types.includes('Steel')) {
        return 'linear-gradient(60deg, rgba(35,149,2,1) 0%, rgba(67,70,75,1) 100%)';
      }

      // FIGHTING TYPE
      if (types.includes('Fighting') && types.includes('Psychic')) {
        return 'linear-gradient(60deg, rgba(87,87,87,1) 0%, rgba(98,89,129,1) 100%)';
      }
      if (types.includes('Fighting') && types.includes('Steel')) {
        return 'linear-gradient(60deg, rgba(87,87,87,1) 0%, rgba(67,70,75,1) 100%)';
      }
      if (types.includes('Fighting') && types.includes('Flying')) {
        return 'linear-gradient(60deg, rgba(87,87,87,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Fighting') && types.includes('Ice')) {
        return 'linear-gradient(60deg, rgba(87,87,87,1) 0%, rgba(185,232,234,1) 100%)';
      }
      if (types.includes('Fighting') && types.includes('Ghost')) {
        return 'linear-gradient(60deg, rgba(87,87,87,1) 0%, rgba(241, 241, 243,1) 100%)';
      }

      // FIRE TYPE
      if (types.includes('Fire') && types.includes('Flying')) {
        return 'linear-gradient(60deg, rgba(149,27,27,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Fire') && types.includes('Rock')) {
        return 'linear-gradient(60deg, rgba(149,27,27,1) 0%, rgba(90,77,65,1) 100%)';
      }
      if (types.includes('Fire') && types.includes('Fighting')) {
        return 'linear-gradient(60deg, rgba(149,27,27,1) 0%, rgba(87,87,87,1) 100%)';
      }
      if (types.includes('Fire') && types.includes('Ground')) {
        return 'linear-gradient(60deg, rgba(149,27,27,1) 0%, rgba(129,68,46,1) 100%)';
      }
      if (types.includes('Fire') && types.includes('Psychic')) {
        return 'linear-gradient(60deg, rgba(149,27,27,1) 0%, rgba(98,89,129,1) 100%)';
      }
      if (types.includes('Fire') && types.includes('Steel')) {
        return 'linear-gradient(60deg, rgba(149,27,27,1) 0%, rgba(67,70,75,1) 100%)';
      }
      if (types.includes('Fire') && types.includes('Water')) {
        return 'linear-gradient(60deg, rgba(149,27,27,1) 0%, rgba(0,142,255,1) 100%)';
      }

      // BUG TYPE
      if (types.includes('Bug') && types.includes('Flying')) {
        return 'linear-gradient(60deg, rgba(177,179,176,1) 0%, rgba(109, 255, 0, 1) 100%)';
      }
      if (types.includes('Bug') && types.includes('Poison')) {
        return 'linear-gradient(60deg, rgba(106,0,255,1) 0%, rgba(109, 255, 0, 1) 100%)';
      }
      if (types.includes('Bug') && types.includes('Fairy')) {
        return 'linear-gradient(60deg, rgba(109, 255, 0, 1) 0%, rgba(192,52,196,1)  100%)';
      }
      if (types.includes('Bug') && types.includes('Grass')) {
        return 'linear-gradient(60deg, rgba(109, 255, 0, 1) 0%, rgba(35,149,2,1) 100%)';
      }
      if (types.includes('Bug') && types.includes('Steel')) {
        return 'linear-gradient(60deg, rgba(109, 255, 0, 1) 0%, rgba(67,70,75,1) 100%)';
      }
      if (types.includes('Bug') && types.includes('Rock')) {
        return 'linear-gradient(60deg, rgba(109, 255, 0, 1) 0%, rgba(90,77,65,1) 100%)';
      }
      if (types.includes('Bug') && types.includes('Fighting')) {
        return 'linear-gradient(60deg, rgba(109, 255, 0, 1) 0%, rgba(87,87,87,1) 100%)';
      }
      if (types.includes('Bug') && types.includes('Water')) {
        return 'linear-gradient(60deg, rgba(109, 255, 0, 1) 0%, rgba(0,142,255,1) 100%)';
      }
      if (types.includes('Bug') && types.includes('Ground')) {
        return 'linear-gradient(60deg, rgba(109, 255, 0, 1) 0%, rgba(129,68,46,1) 100%)';
      }
      if (types.includes('Bug') && types.includes('Ghost')) {
        return 'linear-gradient(60deg, rgba(109, 255, 0, 1) 0%, rgba(241, 241, 243,1) 100%)';
      }
      if (types.includes('Bug') && types.includes('Electric')) {
        return 'linear-gradient(60deg, rgba(109, 255, 0, 1) 0%, rgba(251,255,96,1) 100%)';
      }
      if (types.includes('Bug') && types.includes('Fire')) {
        return 'linear-gradient(60deg, rgba(109, 255, 0, 1) 0%, rgba(149,27,27,1) 100%)';
      }

      // NORMAL TYPE
      if (types.includes('Normal') && types.includes('Flying')) {
        return 'linear-gradient(60deg, rgba(153,153,153,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Normal') && types.includes('Psychic')) {
        return 'linear-gradient(60deg, rgba(153,153,153,1) 0%, rgba(98,89,129,1) 100%)';
      }
      if (types.includes('Normal') && types.includes('Fairy')) {
        return 'linear-gradient(60deg, rgba(153,153,153,1) 0%, rgba(192,52,196,1)  100%)';
      }
      if (types.includes('Normal') && types.includes('Water')) {
        return 'linear-gradient(60deg, rgba(153,153,153,1) 0%, rgba(0,142,255,1)  100%)';
      }
      if (types.includes('Normal') && types.includes('Grass')) {
        return 'linear-gradient(60deg, rgba(153,153,153,1) 0%, rgba(35,149,2,1) 100%)';
      }
      if (types.includes('Normal') && types.includes('Ground')) {
        return 'linear-gradient(60deg, rgba(153,153,153,1) 0%, rgba(106,0,255,1) 100%)';
      }
      if (types.includes('Normal') && types.includes('Electric')) {
        return 'linear-gradient(60deg, rgba(153,153,153,1) 0%, rgba(251,255,96,1) 100%)';
      }
      if (types.includes('Normal') && types.includes('Fighting')) {
        return 'linear-gradient(60deg, rgba(153,153,153,1) 0%, rgba(87,87,87,1) 100%)';
      }
      if (types.includes('Normal') && types.includes('Dragon')) {
        return 'linear-gradient(60deg, rgba(153,153,153,1) 0%, rgba(255,127,80,1) 100%)';
      }

      // POISON TYPE
      if (types.includes('Poison') && types.includes('Flying')) {
        return 'linear-gradient(60deg, rgba(158,0,255,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Poison') && types.includes('Ground')) {
        return 'linear-gradient(60deg, rgba(158,0,255,1) 0%, rgba(106,0,255,1) 100%)';
      }
      if (types.includes('Poison') && types.includes('Dark')) {
        return 'linear-gradient(60deg, rgba(158,0,255,1) 0%, rgba(50, 50, 50,1) 100%)';
      }
      if (types.includes('Poison') && types.includes('Fighting')) {
        return 'linear-gradient(60deg, rgba(158,0,255,1) 0%, rgba(87,87,87,1) 100%)';
      }
      if (types.includes('Poison') && types.includes('Dragon')) {
        return 'linear-gradient(60deg, rgba(158,0,255,1) 0%, rgba(255,127,80,1)  100%)';
      }
      if (types.includes('Poison') && types.includes('Fire')) {
        return 'linear-gradient(60deg, rgba(158,0,255,1) 0%, rgba(149,27,27,1)  100%)';
      }

      // WATER TYPE
      if (types.includes('Water') && types.includes('Fighting')) {
        return 'linear-gradient(60deg, rgba(0,142,255,1) 0%, rgba(87,87,87,1) 100%)';
      }
      if (types.includes('Water') && types.includes('Poison')) {
        return 'linear-gradient(60deg, rgba(0,142,255,1) 0%, rgba(158,0,255,1) 100%)';
      }
      if (types.includes('Water') && types.includes('Psychic')) {
        return 'linear-gradient(60deg, rgba(0,142,255,1) 0%, rgba(98,89,129,1) 100%)';
      }
      if (types.includes('Water') && types.includes('Electric')) {
        return 'linear-gradient(60deg, rgba(0,142,255,1) 0%, rgba(251,255,96,1) 100%)';
      }
      if (types.includes('Water') && types.includes('Fairy')) {
        return 'linear-gradient(60deg, rgba(0,142,255,1) 0%, rgba(192,52,196,1) 100%)';
      }
      if (types.includes('Water') && types.includes('Ground')) {
        return 'linear-gradient(60deg, rgba(0,142,255,1) 0%, rgba(129,68,46,1) 100%)';
      }
      if (types.includes('Water') && types.includes('Ice')) {
        return 'linear-gradient(60deg, rgba(0,142,255,1) 0%, rgba(185,232,234,1) 100%)';
      }
      if (types.includes('Water') && types.includes('Flying')) {
        return 'linear-gradient(60deg, rgba(0,142,255,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Water') && types.includes('Dragon')) {
        return 'linear-gradient(60deg, rgba(0,142,255,1) 0%, rgba(255,127,80,1) 100%)';
      }
      if (types.includes('Water') && types.includes('Grass')) {
        return 'linear-gradient(60deg, rgba(0,142,255,1) 0%, rgba(35,149,2,1) 100%)';
      }
      if (types.includes('Water') && types.includes('Dark')) {
        return 'linear-gradient(60deg, rgba(0,142,255,1) 0%, rgba(50, 50, 50,1) 100%)';
      }
      if (types.includes('Water') && types.includes('Steel')) {
        return 'linear-gradient(60deg, rgba(0,142,255,1) 0%, rgba(67,70,75,1) 100%)';
      }
      if (types.includes('Water') && types.includes('Ghost')) {
        return 'linear-gradient(60deg, rgba(0,142,255,1) 0%, rgba(241, 241, 243,1) 100%)';
      }

      // ROCK TYPE
      if (types.includes('Rock') && types.includes('Ground')) {
        return 'linear-gradient(60deg, rgba(90,77,65,1) 0%, rgba(129,68,46,1) 100%)';
      }
      if (types.includes('Rock') && types.includes('Water')) {
        return 'linear-gradient(60deg, rgba(90,77,65,1) 0%, rgba(0,142,255,1) 100%)';
      }
      if (types.includes('Rock') && types.includes('Flying')) {
        return 'linear-gradient(60deg, rgba(90,77,65,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Rock') && types.includes('Psychic')) {
        return 'linear-gradient(60deg, rgba(90,77,65,1) 0%, rgba(98,89,129,1) 100%)';
      }
      if (types.includes('Rock') && types.includes('Grass')) {
        return 'linear-gradient(60deg, rgba(90,77,65,1) 0%, rgba(35,149,2,1) 100%)';
      }
      if (types.includes('Rock') && types.includes('Fighting')) {
        return 'linear-gradient(60deg, rgba(90,77,65,1) 0%, rgba(87,87,87,1) 100%)';
      }
      if (types.includes('Rock') && types.includes('Fairy')) {
        return 'linear-gradient(60deg, rgba(90,77,65,1) 0%, rgba(192,52,196,1) 100%)';
      }
      if (types.includes('Rock') && types.includes('Poison')) {
        return 'linear-gradient(60deg, rgba(90,77,65,1) 0%, rgba(158,0,255,1) 100%)';
      }

      // ELECTRIC TYPE
      if (types.includes('Electric') && types.includes('Steel')) {
        return 'linear-gradient(60deg, rgba(251,255,96,1) 0%, rgba(67,70,75,1) 100%)';
      }
      if (types.includes('Electric') && types.includes('Flying')) {
        return 'linear-gradient(60deg, rgba(251,255,96,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Electric') && types.includes('Ghost')) {
        return 'linear-gradient(60deg, rgba(251,255,96,1) 0%, rgba(241, 241, 243,1) 100%)';
      }
      if (types.includes('Electric') && types.includes('Fairy')) {
        return 'linear-gradient(60deg, rgba(251,255,96,1) 0%, rgba(192,52,196,1) 100%)';
      }

      // GHOST TYPE
      if (types.includes('Ghost') && types.includes('Poison')) {
        return 'linear-gradient(60deg, rgba(241, 241, 243,1) 0%, rgba(158,0,255,1) 100%)';
      }
      if (types.includes('Ghost') && types.includes('Flying')) {
        return 'linear-gradient(60deg, rgba(241, 241, 243,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Ghost') && types.includes('Fire')) {
        return 'linear-gradient(60deg, rgba(241, 241, 243,1) 0%, rgba(149,27,27,1) 100%)';
      }
      if (types.includes('Ghost') && types.includes('Dragon')) {
        return 'linear-gradient(60deg, rgba(241, 241, 243,1) 0%, rgba(255,127,80,1) 100%)';
      }
      if (types.includes('Ghost') && types.includes('Grass')) {
        return 'linear-gradient(60deg, rgba(241, 241, 243,1) 0%, rgba(35,149,2,1) 100%)';
      }
      if (types.includes('Ghost') && types.includes('Fairy')) {
        return 'linear-gradient(60deg, rgba(241, 241, 243,1) 0%, rgba(192,52,196,1) 100%)';
      }

      // GROUND TYPE
      if (types.includes('Ground') && types.includes('Flying')) {
        return 'linear-gradient(60deg, rgba(129,68,46,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Ground') && types.includes('Dragon')) {
        return 'linear-gradient(60deg, rgba(129,68,46,1) 0%, rgba(255,127,80,1) 100%)';
      }
      if (types.includes('Ground') && types.includes('Psychic')) {
        return 'linear-gradient(60deg, rgba(129,68,46,1) 0%, rgba(98,89,129,1) 100%)';
      }
      if (types.includes('Ground') && types.includes('Dark')) {
        return 'linear-gradient(60deg, rgba(129,68,46,1) 0%, rgba(50, 50, 50,1) 100%)';
      }
      if (types.includes('Ground') && types.includes('Electric')) {
        return 'linear-gradient(60deg, rgba(129,68,46,1) 0%, rgba(251,255,96,1) 100%)';
      }
      if (types.includes('Ground') && types.includes('Ghost')) {
        return 'linear-gradient(60deg, rgba(129,68,46,1) 0%, rgba(241, 241, 243,1) 100%)';
      }

      // ICE TYPE
      if (types.includes('Ice') && types.includes('Psychic')) {
        return 'linear-gradient(60deg, rgba(185,232,234,1) 0%, rgba(98,89,129,1) 100%)';
      }
      if (types.includes('Ice') && types.includes('Flying')) {
        return 'linear-gradient(60deg, rgba(185,232,234,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Ice') && types.includes('Ground')) {
        return 'linear-gradient(60deg, rgba(185,232,234,1) 0%, rgba(129,68,46,1) 100%)';
      }
      if (types.includes('Ice') && types.includes('Ghost')) {
        return 'linear-gradient(60deg, rgba(185,232,234,1) 0%, rgba(241, 241, 243,1) 100%)';
      }

      // FAIRY TYPE
      if (types.includes('Fairy') && types.includes('Flying')) {
        return 'linear-gradient(60deg, rgba(192,52,196,1) 0%, rgba(215,215,215,1) 100%)';
      }

      // PSYCHIC TYPE
      if (types.includes('Psychic') && types.includes('Flying')) {
        return 'linear-gradient(60deg, rgba(98,89,129,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Psychic') && types.includes('Fairy')) {
        return 'linear-gradient(60deg, rgba(98,89,129,1) 0%, rgba(192,52,196,1) 100%)';
      }
      if (types.includes('Psychic') && types.includes('Ghost')) {
        return 'linear-gradient(60deg, rgba(98,89,129,1) 0%, rgba(241, 241, 243,1) 100%)';
      }

      // DARK TYPE
      if (types.includes('Dark') && types.includes('Flying')) {
        return 'linear-gradient(60deg, rgba(50, 50, 50,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Dark') && types.includes('Ice')) {
        return 'linear-gradient(60deg, rgba(50, 50, 50,1) 0%, rgba(185,232,234,1) 100%)';
      }
      if (types.includes('Dark') && types.includes('Fire')) {
        return 'linear-gradient(60deg, rgba(50, 50, 50,1) 0%, rgba(149,27,27,1) 100%)';
      }
      if (types.includes('Dark') && types.includes('Ghost')) {
        return 'linear-gradient(60deg, rgba(50, 50, 50,1) 0%, rgba(241, 241, 243,1) 100%)';
      }
      if (types.includes('Dark') && types.includes('Fighting')) {
        return 'linear-gradient(60deg, rgba(50, 50, 50,1) 0%, rgba(87,87,87,1) 100%)';
      }
      if (types.includes('Dark') && types.includes('Steel')) {
        return 'linear-gradient(60deg, rgba(50, 50, 50,1) 0%, rgba(67,70,75,1) 100%)';
      }
      if (types.includes('Dark') && types.includes('Dragon')) {
        return 'linear-gradient(60deg, rgba(50, 50, 50,1) 0%, rgba(255,127,80,1) 100%)';
      }
      if (types.includes('Dark') && types.includes('Psychic')) {
        return 'linear-gradient(60deg, rgba(50, 50, 50,1) 0%, rgba(98,89,129,1) 100%)';
      }

      // DRAGON TYPE
      if (types.includes('Dragon') && types.includes('Flying')) {
        return 'linear-gradient(60deg, rgba(255,127,80,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Dragon') && types.includes('Psychic')) {
        return 'linear-gradient(60deg, rgba(255,127,80,1) 0%, rgba(98,89,129,1) 100%)';
      }
      if (types.includes('Dragon') && types.includes('Fire')) {
        return 'linear-gradient(60deg, rgba(255,127,80,1) 0%, rgba(149,27,27,1) 100%)';
      }
      if (types.includes('Dragon') && types.includes('Electric')) {
        return 'linear-gradient(60deg, rgba(255,127,80,1) 0%, rgba(251,255,96,1) 100%)';
      }
      if (types.includes('Dragon') && types.includes('Ice')) {
        return 'linear-gradient(60deg, rgba(255,127,80,1) 0%, rgba(185,232,234,1) 100%)';
      }
      if (types.includes('Dragon') && types.includes('Fighting')) {
        return 'linear-gradient(60deg, rgba(255,127,80,1) 0%, rgba(87,87,87,1) 100%)';
      }

      // STEEL TYPE
      if (types.includes('Steel') && types.includes('Ground')) {
        return 'linear-gradient(60deg, rgba(67,70,75,1) 0%, rgba(129,68,46,1) 100%)';
      }
      if (types.includes('Steel') && types.includes('Flying')) {
        return 'linear-gradient(60deg, rgba(67,70,75,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Steel') && types.includes('Fairy')) {
        return 'linear-gradient(60deg, rgba(67,70,75,1) 0%, rgba(192,52,196,1) 100%)';
      }
      if (types.includes('Steel') && types.includes('Rock')) {
        return 'linear-gradient(60deg, rgba(67,70,75,1) 0%, rgba(90,77,65,1) 100%)';
      }
      if (types.includes('Steel') && types.includes('Psychic')) {
        return 'linear-gradient(60deg, rgba(67,70,75,1) 0%, rgba(98,89,129,1) 100%)';
      }
      if (types.includes('Steel') && types.includes('Dragon')) {
        return 'linear-gradient(60deg, rgba(67,70,75,1) 0%, rgba(255,127,80,1) 100%)';
      }
    }
    return 'gray'; // Couleur par défaut si le nombre de types est incorrect
  }

  const backgroundColor = getBackgroundColor(type);

  return (
    <div className="card" style={{ background: backgroundColor }}>
      <p className="card-name">{name.french} #{id}</p>
      <img className="card-img" src={url} alt={name.french} />
      <p className="card-type">Pokémon de génération {gen}</p>
      <p className="card-type">Type: {type.join(' / ')}</p>
      <div className="card-stat">
        {Object.entries(base).map(([statName, statValue]) => {
          let width;

          if (statValue > 0 && statValue <= 10) {
            width = statValue * 5;
          }
          else if (statValue >= 11 && statValue <= 20) {
            width = statValue * 3.8;
          }
          else if (statValue >= 21 && statValue <= 30) {
            width = statValue * 3.2;
          }
          else if (statValue >= 31 && statValue <= 50) {
            width = statValue * 2.3;
          }
          else if (statValue >= 51 && statValue <= 110) {
            width = statValue * 2.2;
          }
          else if (statValue >= 111 && statValue <= 160) {
            width = statValue * 2.1;
          }
          else {
            width = statValue * 1.6;
          }

          return (
            <div className="card-stat-bar" key={statName}>
              <span className="card-stat-bar-statvalue">{statValue}</span>
              <div className="card-stat-bar-fill" style={{ width: `${width}px` }}>
                <span className="card-stat-bar-statname">{statName}:</span>
              </div>
            </div>
          );
        })}
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
  gen: number.isRequired,
  url: string.isRequired,
};

export default Card;
