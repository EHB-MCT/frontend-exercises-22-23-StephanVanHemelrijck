import './App.css';
import Header from './components/header';
import PokemonList from './components/pokemonList';

function App() {
    return (
        <div className="App">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
            <Header />
            <PokemonList />
        </div>
    );
}

export default App;
