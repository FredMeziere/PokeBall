import './styles.scss';

function Header() {
  return (
    <div className="header">
      <img className="header-img" src="../logo/pokelogo.png" alt="Logo Pokedex" />
      <h1 className="header-h1">La bible des Pokémon est ici !</h1>
      <p className="header-p">Disclamer : Ce site est uniquement à but de montrer mes savoir-faire de développeur web. Il n'est pas à 100% fiable, des raccourcis sur les évolutions ont été effectués. Il s'agit d'un site "de travail toute la data viens de https://www.pokepedia.fr/Foretress, ajoutée dans un fichier json"</p>
    </div>
  );
}

export default Header;
