import { useState } from 'react';
import './styles.scss';
import {
  string, arrayOf, shape, number,
} from 'prop-types';

function Card({
  id, name, type, base, gen, url, evolution, levels, talents, pokemonetymo,
}) {
  // eslint-disable-next-line no-shadow
  function getColorForType(type) {
    switch (type) {
      case 'Plante':
        return 'rgb(35,149,2)';
      case 'Poison':
        return 'rgb(158,0,255)';
      case 'Feu':
        return 'rgb(149, 27, 27)';
      case 'Eau':
        return 'rgb(0,142,255)';
      case 'Normal':
        return 'rgb(153,153,153)';
      case 'Insecte':
        return 'rgb(109, 255, 0)';
      case 'Vol':
        return 'rgb(215,215,215)';
      case 'Fée':
        return 'rgb(192,52,196)';
      case 'Electrik':
        return 'rgb(251,255,96)';
      case 'Sol':
        return 'rgb(129,68,46)';
      case 'Combat':
        return 'rgb(87, 87, 87)';
      case 'Psy':
        return 'url(/backSolimg/psy.png';
      case 'Acier':
        return 'rgb(67,70,75)';
      case 'Roche':
        return 'rgb(90,77,65)';
      case 'Glace':
        return 'rgb(185,232,234)';
      case 'Spectre':
        return 'rgb(241, 241, 243)';
      case 'Dragon':
        return 'rgb(255,127,80)';
      case 'Ténèbres':
        return 'rgb(50, 50, 50)';
      default:
        return 'gray'; // Couleur par défaut si aucune combinaisons existantes
    }
  }

  function getBackGroundColor(types) {
    if (types.length === 1) {
      return getColorForType(types[0]);
    } if (types.length === 2) {
      // Plante TYPE
      if (types.includes('Plante') && types.includes('Poison')) {
        return 'linear-gradient(60deg, rgba(35,149,2,1) 0%, rgba(158,0,255,1) 100%)';
      }
      if (types.includes('Plante') && types.includes('Psy')) {
        return 'linear-gradient(60deg, rgba(35,149,2,1) 0%, rgba(98,89,129,1) 100%)';
      }
      if (types.includes('Plante') && types.includes('Vol')) {
        return 'linear-gradient(60deg, rgba(35,149,2,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Plante') && types.includes('Ténèbres')) {
        return 'linear-gradient(60deg, rgba(35,149,2,1) 0%, rgba(50, 50, 50,1) 100%)';
      }
      if (types.includes('Plante') && types.includes('Combat')) {
        return 'linear-gradient(60deg, rgba(35,149,2,1) 0%, rgba(87,87,87,1) 100%)';
      }
      if (types.includes('Plante') && types.includes('Sol')) {
        return 'linear-gradient(60deg, rgba(35,149,2,1) 0%, rgba(129,68,46,1) 100%)';
      }
      if (types.includes('Plante') && types.includes('Glace')) {
        return 'linear-gradient(60deg, rgba(35,149,2,1) 0%, rgba(185,232,234,1) 100%)';
      }
      if (types.includes('Plante') && types.includes('Fée')) {
        return 'linear-gradient(60deg, rgba(35,149,2,1) 0%, rgba(192,52,196,1) 100%)';
      }
      if (types.includes('Plante') && types.includes('Acier')) {
        return 'linear-gradient(60deg, rgba(35,149,2,1) 0%, rgba(67,70,75,1) 100%)';
      }

      // Combat TYPE
      if (types.includes('Combat') && types.includes('Psy')) {
        return 'linear-gradient(60deg, rgba(87,87,87,1) 0%, rgba(98,89,129,1) 100%)';
      }
      if (types.includes('Combat') && types.includes('Acier')) {
        return 'linear-gradient(60deg, rgba(87,87,87,1) 0%, rgba(67,70,75,1) 100%)';
      }
      if (types.includes('Combat') && types.includes('Vol')) {
        return 'linear-gradient(60deg, rgba(87,87,87,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Combat') && types.includes('Glace')) {
        return 'linear-gradient(60deg, rgba(87,87,87,1) 0%, rgba(185,232,234,1) 100%)';
      }
      if (types.includes('Combat') && types.includes('Spectre')) {
        return 'linear-gradient(60deg, rgba(87,87,87,1) 0%, rgba(241, 241, 243,1) 100%)';
      }

      // Feu TYPE
      if (types.includes('Feu') && types.includes('Vol')) {
        return 'linear-gradient(60deg, rgba(149,27,27,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Feu') && types.includes('Roche')) {
        return 'linear-gradient(60deg, rgba(149,27,27,1) 0%, rgba(90,77,65,1) 100%)';
      }
      if (types.includes('Feu') && types.includes('Combat')) {
        return 'linear-gradient(60deg, rgba(149,27,27,1) 0%, rgba(87,87,87,1) 100%)';
      }
      if (types.includes('Feu') && types.includes('Sol')) {
        return 'linear-gradient(60deg, rgba(149,27,27,1) 0%, rgba(129,68,46,1) 100%)';
      }
      if (types.includes('Feu') && types.includes('Psy')) {
        return 'linear-gradient(60deg, rgba(149,27,27,1) 0%, rgba(98,89,129,1) 100%)';
      }
      if (types.includes('Feu') && types.includes('Acier')) {
        return 'linear-gradient(60deg, rgba(149,27,27,1) 0%, rgba(67,70,75,1) 100%)';
      }
      if (types.includes('Feu') && types.includes('Eau')) {
        return 'linear-gradient(60deg, rgba(149,27,27,1) 0%, rgba(0,142,255,1) 100%)';
      }

      // Insecte TYPE
      if (types.includes('Insecte') && types.includes('Vol')) {
        return 'linear-gradient(60deg, rgba(177,179,176,1) 0%, rgba(109, 255, 0, 1) 100%)';
      }
      if (types.includes('Insecte') && types.includes('Poison')) {
        return 'linear-gradient(60deg, rgba(106,0,255,1) 0%, rgba(109, 255, 0, 1) 100%)';
      }
      if (types.includes('Insecte') && types.includes('Fée')) {
        return 'linear-gradient(60deg, rgba(109, 255, 0, 1) 0%, rgba(192,52,196,1)  100%)';
      }
      if (types.includes('Insecte') && types.includes('Plante')) {
        return 'linear-gradient(60deg, rgba(109, 255, 0, 1) 0%, rgba(35,149,2,1) 100%)';
      }
      if (types.includes('Insecte') && types.includes('Acier')) {
        return 'linear-gradient(60deg, rgba(109, 255, 0, 1) 0%, rgba(67,70,75,1) 100%)';
      }
      if (types.includes('Insecte') && types.includes('Roche')) {
        return 'linear-gradient(60deg, rgba(109, 255, 0, 1) 0%, rgba(90,77,65,1) 100%)';
      }
      if (types.includes('Insecte') && types.includes('Combat')) {
        return 'linear-gradient(60deg, rgba(109, 255, 0, 1) 0%, rgba(87,87,87,1) 100%)';
      }
      if (types.includes('Insecte') && types.includes('Eau')) {
        return 'linear-gradient(60deg, rgba(109, 255, 0, 1) 0%, rgba(0,142,255,1) 100%)';
      }
      if (types.includes('Insecte') && types.includes('Sol')) {
        return 'linear-gradient(60deg, rgba(109, 255, 0, 1) 0%, rgba(129,68,46,1) 100%)';
      }
      if (types.includes('Insecte') && types.includes('Spectre')) {
        return 'linear-gradient(60deg, rgba(109, 255, 0, 1) 0%, rgba(241, 241, 243,1) 100%)';
      }
      if (types.includes('Insecte') && types.includes('Electrik')) {
        return 'linear-gradient(60deg, rgba(109, 255, 0, 1) 0%, rgba(251,255,96,1) 100%)';
      }
      if (types.includes('Insecte') && types.includes('Feu')) {
        return 'linear-gradient(60deg, rgba(109, 255, 0, 1) 0%, rgba(149,27,27,1) 100%)';
      }

      // NORMAL TYPE
      if (types.includes('Normal') && types.includes('Vol')) {
        return 'linear-gradient(60deg, rgba(153,153,153,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Normal') && types.includes('Psy')) {
        return 'linear-gradient(60deg, rgba(153,153,153,1) 0%, rgba(98,89,129,1) 100%)';
      }
      if (types.includes('Normal') && types.includes('Fée')) {
        return 'linear-gradient(60deg, rgba(153,153,153,1) 0%, rgba(192,52,196,1)  100%)';
      }
      if (types.includes('Normal') && types.includes('Eau')) {
        return 'linear-gradient(60deg, rgba(153,153,153,1) 0%, rgba(0,142,255,1)  100%)';
      }
      if (types.includes('Normal') && types.includes('Plante')) {
        return 'linear-gradient(60deg, rgba(153,153,153,1) 0%, rgba(35,149,2,1) 100%)';
      }
      if (types.includes('Normal') && types.includes('Sol')) {
        return 'linear-gradient(60deg, rgba(153,153,153,1) 0%, rgba(106,0,255,1) 100%)';
      }
      if (types.includes('Normal') && types.includes('Electrik')) {
        return 'linear-gradient(60deg, rgba(153,153,153,1) 0%, rgba(251,255,96,1) 100%)';
      }
      if (types.includes('Normal') && types.includes('Combat')) {
        return 'linear-gradient(60deg, rgba(153,153,153,1) 0%, rgba(87,87,87,1) 100%)';
      }
      if (types.includes('Normal') && types.includes('Dragon')) {
        return 'linear-gradient(60deg, rgba(153,153,153,1) 0%, rgba(255,127,80,1) 100%)';
      }

      // POISON TYPE
      if (types.includes('Poison') && types.includes('Vol')) {
        return 'linear-gradient(60deg, rgba(158,0,255,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Poison') && types.includes('Sol')) {
        return 'linear-gradient(60deg, rgba(158,0,255,1) 0%, rgba(106,0,255,1) 100%)';
      }
      if (types.includes('Poison') && types.includes('Ténèbres')) {
        return 'linear-gradient(60deg, rgba(158,0,255,1) 0%, rgba(50, 50, 50,1) 100%)';
      }
      if (types.includes('Poison') && types.includes('Combat')) {
        return 'linear-gradient(60deg, rgba(158,0,255,1) 0%, rgba(87,87,87,1) 100%)';
      }
      if (types.includes('Poison') && types.includes('Dragon')) {
        return 'linear-gradient(60deg, rgba(158,0,255,1) 0%, rgba(255,127,80,1)  100%)';
      }
      if (types.includes('Poison') && types.includes('Feu')) {
        return 'linear-gradient(60deg, rgba(158,0,255,1) 0%, rgba(149,27,27,1)  100%)';
      }

      // EAU TYPE
      if (types.includes('Eau') && types.includes('Combat')) {
        return 'linear-gradient(60deg, rgba(0,142,255,1) 0%, rgba(87,87,87,1) 100%)';
      }
      if (types.includes('Eau') && types.includes('Poison')) {
        return 'linear-gradient(60deg, rgba(0,142,255,1) 0%, rgba(158,0,255,1) 100%)';
      }
      if (types.includes('Eau') && types.includes('Psy')) {
        return 'linear-gradient(60deg, rgba(0,142,255,1) 0%, rgba(98,89,129,1) 100%)';
      }
      if (types.includes('Eau') && types.includes('Electrik')) {
        return 'linear-gradient(60deg, rgba(0,142,255,1) 0%, rgba(251,255,96,1) 100%)';
      }
      if (types.includes('Eau') && types.includes('Fée')) {
        return 'linear-gradient(60deg, rgba(0,142,255,1) 0%, rgba(192,52,196,1) 100%)';
      }
      if (types.includes('Eau') && types.includes('Sol')) {
        return 'linear-gradient(60deg, rgba(0,142,255,1) 0%, rgba(129,68,46,1) 100%)';
      }
      if (types.includes('Eau') && types.includes('Glace')) {
        return 'linear-gradient(60deg, rgba(0,142,255,1) 0%, rgba(185,232,234,1) 100%)';
      }
      if (types.includes('Eau') && types.includes('Vol')) {
        return 'linear-gradient(60deg, rgba(0,142,255,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Eau') && types.includes('Dragon')) {
        return 'linear-gradient(60deg, rgba(0,142,255,1) 0%, rgba(255,127,80,1) 100%)';
      }
      if (types.includes('Eau') && types.includes('Plante')) {
        return 'linear-gradient(60deg, rgba(0,142,255,1) 0%, rgba(35,149,2,1) 100%)';
      }
      if (types.includes('Eau') && types.includes('Ténèbres')) {
        return 'linear-gradient(60deg, rgba(0,142,255,1) 0%, rgba(50, 50, 50,1) 100%)';
      }
      if (types.includes('Eau') && types.includes('Acier')) {
        return 'linear-gradient(60deg, rgba(0,142,255,1) 0%, rgba(67,70,75,1) 100%)';
      }
      if (types.includes('Eau') && types.includes('Spectre')) {
        return 'linear-gradient(60deg, rgba(0,142,255,1) 0%, rgba(241, 241, 243,1) 100%)';
      }

      // ROCHE TYPE
      if (types.includes('Roche') && types.includes('Sol')) {
        return 'linear-gradient(60deg, rgba(90,77,65,1) 0%, rgba(129,68,46,1) 100%)';
      }
      if (types.includes('Roche') && types.includes('Eau')) {
        return 'linear-gradient(60deg, rgba(90,77,65,1) 0%, rgba(0,142,255,1) 100%)';
      }
      if (types.includes('Roche') && types.includes('Vol')) {
        return 'linear-gradient(60deg, rgba(90,77,65,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Roche') && types.includes('Psy')) {
        return 'linear-gradient(60deg, rgba(90,77,65,1) 0%, rgba(98,89,129,1) 100%)';
      }
      if (types.includes('Roche') && types.includes('Plante')) {
        return 'linear-gradient(60deg, rgba(90,77,65,1) 0%, rgba(35,149,2,1) 100%)';
      }
      if (types.includes('Roche') && types.includes('Combat')) {
        return 'linear-gradient(60deg, rgba(90,77,65,1) 0%, rgba(87,87,87,1) 100%)';
      }
      if (types.includes('Roche') && types.includes('Fée')) {
        return 'linear-gradient(60deg, rgba(90,77,65,1) 0%, rgba(192,52,196,1) 100%)';
      }
      if (types.includes('Roche') && types.includes('Poison')) {
        return 'linear-gradient(60deg, rgba(90,77,65,1) 0%, rgba(158,0,255,1) 100%)';
      }

      // ELECTRIK TYPE
      if (types.includes('Electrik') && types.includes('Acier')) {
        return 'linear-gradient(60deg, rgba(251,255,96,1) 0%, rgba(67,70,75,1) 100%)';
      }
      if (types.includes('Electrik') && types.includes('Vol')) {
        return 'linear-gradient(60deg, rgba(251,255,96,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Electrik') && types.includes('Spectre')) {
        return 'linear-gradient(60deg, rgba(251,255,96,1) 0%, rgba(241, 241, 243,1) 100%)';
      }
      if (types.includes('Electrik') && types.includes('Fée')) {
        return 'linear-gradient(60deg, rgba(251,255,96,1) 0%, rgba(192,52,196,1) 100%)';
      }

      // Spectre TYPE
      if (types.includes('Spectre') && types.includes('Poison')) {
        return 'linear-gradient(60deg, rgba(241, 241, 243,1) 0%, rgba(158,0,255,1) 100%)';
      }
      if (types.includes('Spectre') && types.includes('Vol')) {
        return 'linear-gradient(60deg, rgba(241, 241, 243,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Spectre') && types.includes('Feu')) {
        return 'linear-gradient(60deg, rgba(241, 241, 243,1) 0%, rgba(149,27,27,1) 100%)';
      }
      if (types.includes('Spectre') && types.includes('Dragon')) {
        return 'linear-gradient(60deg, rgba(241, 241, 243,1) 0%, rgba(255,127,80,1) 100%)';
      }
      if (types.includes('Spectre') && types.includes('Plante')) {
        return 'linear-gradient(60deg, rgba(241, 241, 243,1) 0%, rgba(35,149,2,1) 100%)';
      }
      if (types.includes('Spectre') && types.includes('Fée')) {
        return 'linear-gradient(60deg, rgba(241, 241, 243,1) 0%, rgba(192,52,196,1) 100%)';
      }

      // Sol TYPE
      if (types.includes('Sol') && types.includes('Vol')) {
        return 'linear-gradient(60deg, rgba(129,68,46,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Sol') && types.includes('Dragon')) {
        return 'linear-gradient(60deg, rgba(129,68,46,1) 0%, rgba(255,127,80,1) 100%)';
      }
      if (types.includes('Sol') && types.includes('Psy')) {
        return 'linear-gradient(60deg, rgba(129,68,46,1) 0%, rgba(98,89,129,1) 100%)';
      }
      if (types.includes('Sol') && types.includes('Ténèbres')) {
        return 'linear-gradient(60deg, rgba(129,68,46,1) 0%, rgba(50, 50, 50,1) 100%)';
      }
      if (types.includes('Sol') && types.includes('Electrik')) {
        return 'linear-gradient(60deg, rgba(129,68,46,1) 0%, rgba(251,255,96,1) 100%)';
      }
      if (types.includes('Sol') && types.includes('Spectre')) {
        return 'linear-gradient(60deg, rgba(129,68,46,1) 0%, rgba(241, 241, 243,1) 100%)';
      }

      // Glace TYPE
      if (types.includes('Glace') && types.includes('Psy')) {
        return 'linear-gradient(60deg, rgba(185,232,234,1) 0%, rgba(98,89,129,1) 100%)';
      }
      if (types.includes('Glace') && types.includes('Vol')) {
        return 'linear-gradient(60deg, rgba(185,232,234,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Glace') && types.includes('Sol')) {
        return 'linear-gradient(60deg, rgba(185,232,234,1) 0%, rgba(129,68,46,1) 100%)';
      }
      if (types.includes('Glace') && types.includes('Spectre')) {
        return 'linear-gradient(60deg, rgba(185,232,234,1) 0%, rgba(241, 241, 243,1) 100%)';
      }

      // Fée TYPE
      if (types.includes('Fée') && types.includes('Vol')) {
        return 'linear-gradient(60deg, rgba(192,52,196,1) 0%, rgba(215,215,215,1) 100%)';
      }

      // PSY TYPE
      if (types.includes('Psy') && types.includes('Vol')) {
        return 'linear-gradient(60deg, rgba(98,89,129,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Psy') && types.includes('Fée')) {
        return 'linear-gradient(60deg, rgba(98,89,129,1) 0%, rgba(192,52,196,1) 100%)';
      }
      if (types.includes('Psy') && types.includes('Spectre')) {
        return 'linear-gradient(60deg, rgba(98,89,129,1) 0%, rgba(241, 241, 243,1) 100%)';
      }

      // Ténèbres TYPE
      if (types.includes('Ténèbres') && types.includes('Vol')) {
        return 'linear-gradient(60deg, rgba(50, 50, 50,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Ténèbres') && types.includes('Glace')) {
        return 'linear-gradient(60deg, rgba(50, 50, 50,1) 0%, rgba(185,232,234,1) 100%)';
      }
      if (types.includes('Ténèbres') && types.includes('Feu')) {
        return 'linear-gradient(60deg, rgba(50, 50, 50,1) 0%, rgba(149,27,27,1) 100%)';
      }
      if (types.includes('Ténèbres') && types.includes('Spectre')) {
        return 'linear-gradient(60deg, rgba(50, 50, 50,1) 0%, rgba(241, 241, 243,1) 100%)';
      }
      if (types.includes('Ténèbres') && types.includes('Combat')) {
        return 'linear-gradient(60deg, rgba(50, 50, 50,1) 0%, rgba(87,87,87,1) 100%)';
      }
      if (types.includes('Ténèbres') && types.includes('Acier')) {
        return 'linear-gradient(60deg, rgba(50, 50, 50,1) 0%, rgba(67,70,75,1) 100%)';
      }
      if (types.includes('Ténèbres') && types.includes('Dragon')) {
        return 'linear-gradient(60deg, rgba(50, 50, 50,1) 0%, rgba(255,127,80,1) 100%)';
      }
      if (types.includes('Ténèbres') && types.includes('Psy')) {
        return 'linear-gradient(60deg, rgba(50, 50, 50,1) 0%, rgba(98,89,129,1) 100%)';
      }

      // DRAGON TYPE
      if (types.includes('Dragon') && types.includes('Vol')) {
        return 'linear-gradient(60deg, rgba(255,127,80,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Dragon') && types.includes('Psy')) {
        return 'linear-gradient(60deg, rgba(255,127,80,1) 0%, rgba(98,89,129,1) 100%)';
      }
      if (types.includes('Dragon') && types.includes('Feu')) {
        return 'linear-gradient(60deg, rgba(255,127,80,1) 0%, rgba(149,27,27,1) 100%)';
      }
      if (types.includes('Dragon') && types.includes('Electrik')) {
        return 'linear-gradient(60deg, rgba(255,127,80,1) 0%, rgba(251,255,96,1) 100%)';
      }
      if (types.includes('Dragon') && types.includes('Glace')) {
        return 'linear-gradient(60deg, rgba(255,127,80,1) 0%, rgba(185,232,234,1) 100%)';
      }
      if (types.includes('Dragon') && types.includes('Combat')) {
        return 'linear-gradient(60deg, rgba(255,127,80,1) 0%, rgba(87,87,87,1) 100%)';
      }

      // Acier TYPE
      if (types.includes('Acier') && types.includes('Sol')) {
        return 'linear-gradient(60deg, rgba(67,70,75,1) 0%, rgba(129,68,46,1) 100%)';
      }
      if (types.includes('Acier') && types.includes('Vol')) {
        return 'linear-gradient(60deg, rgba(67,70,75,1) 0%, rgba(215,215,215,1) 100%)';
      }
      if (types.includes('Acier') && types.includes('Fée')) {
        return 'linear-gradient(60deg, rgba(67,70,75,1) 0%, rgba(192,52,196,1) 100%)';
      }
      if (types.includes('Acier') && types.includes('Roche')) {
        return 'linear-gradient(60deg, rgba(67,70,75,1) 0%, rgba(90,77,65,1) 100%)';
      }
      if (types.includes('Acier') && types.includes('Psy')) {
        return 'linear-gradient(60deg, rgba(67,70,75,1) 0%, rgba(98,89,129,1) 100%)';
      }
      if (types.includes('Acier') && types.includes('Dragon')) {
        return 'linear-gradient(60deg, rgba(67,70,75,1) 0%, rgba(255,127,80,1) 100%)';
      }
    }
    return 'gray'; // Couleur par défaut si le nombre de types est incorrect
  }
  const backGroundColor = getBackGroundColor(type);

  // Pour la gestion de l'affichage du front ou back de la carte avec les usestate
  const [showBack, setShowBack] = useState(false);
  const handleClick = () => {
    setShowBack(!showBack);
  };
  // eslint-disable-next-line no-console
  return (
    <div
      className={`card ${showBack ? 'card-flipped' : ''}`}
      style={{ background: backGroundColor }}
      onClick={handleClick}
    >
      {showBack ? (
        <div className="card-content">
          <p className="card-type-p">Les différentes évolution de ce pokemon</p>
          <p className="card-type-p">{evolution.namevo1}</p>
          <img className="card-img-evol" src={evolution.evo1} alt="Pokemon de base" />
          <p className="card-type-p">Niveau : {levels.lvl1} ▼</p>
          <p className="card-type-p">{evolution.namevo2}</p>
          <img className="card-img-evol" src={evolution.evo2} alt="Évolution 2" />
          <p className="card-type-p">Niveau : {levels.lvl2} ▼</p>
          <p className="card-type-p">{evolution.namevo3}</p>
          <img className="card-img-evol" src={evolution.evo3} alt="Évolution 3" />
          <p className="card-type-p">Les Talents: </p>
          <p className="card-type-p">{talents.talent1} : {talents.description1}</p>
          <p className="card-type-p">{talents.talent2} : {talents.description2}</p>
          <p className="card-type-p">{pokemonetymo}</p>
        </div>
      ) : (
        <>
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
        </>
      )}
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
  evolution: shape({
    nameevo1: string.isRequired,
    nameevo2: string.isRequired,
    nameevo3: string.isRequired,
    evo1: string.isRequired,
    evo2: string.isRequired,
    evo3: string.isRequired,
  }).isRequired,
  levels: shape({
    lvl1: number.isRequired,
    lvl2: number.isRequired,
  }).isRequired,
  talents: shape({
    talent1: string.isRequired,
    description1: string.isRequired,
    talent2: string.isRequired,
    description2: string.isRequired,
  }).isRequired,
  pokemonetymo: string.isRequired,
};

export default Card;
