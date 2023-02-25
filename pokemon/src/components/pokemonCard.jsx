import styles from './pokemonCard.module.css';
import PokemonType from './pokemonType';

function PokemonCard(props) {
    let abilities = '';
    props.pokemon.abilities.forEach((ability, index) => {
        abilities += `${ability.ability.name}`;
        if (index !== props.pokemon.abilities.length - 1) abilities += ', ';
    });

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={props.pokemon.sprites.front_default} className="card-img-top" alt={props.pokemon.name} />
            <div className="card-body">
                <h5 className="card-title">{props.pokemon.name}</h5>
                <div className={styles.types}>
                    {props.pokemon.types.map((type, index) => {
                        return <PokemonType key={`${props.pokemon.name}-type-${type.type.name}-${index}`} name={type.type.name} />;
                    })}
                </div>

                <p className="card-text">Abilities: {abilities}</p>
                <p className="card-text">Base Experience: {props.pokemon.base_experience}</p>
            </div>
        </div>
    );
}

export default PokemonCard;
