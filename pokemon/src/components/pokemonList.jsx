import { useEffect, useState } from 'react';
import PokemonCard from './pokemonCard';
import styles from './pokemonList.module.css';

function PokemonList() {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100', { headers: { 'Content-Type': 'application/json' } })
            .then((res) => res.json())
            .then((data) => {
                const newPokemons = [];
                data.results.forEach((pokemon) => {
                    fetch(pokemon.url)
                        .then((res) => res.json())
                        .then((data) => newPokemons.push(data));
                });
                setPokemons(newPokemons);
            })
            .finally(setLoading(false));
    }, []);

    if (loading) return 'Loading...';

    return (
        <div className={styles.pokemonList}>
            {pokemons.map((pokemon, index) => {
                if (index === 0) return console.log(pokemon);
                return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
            })}
        </div>
    );
}

export default PokemonList;
