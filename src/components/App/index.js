import AllPokemon from '../AllPokemon';
import Footer from '../Footer';
import Header from '../Header';
import './styles.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <AllPokemon />
      <Footer />
    </div>
  );
}

export default App;
