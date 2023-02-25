import '../App.css';
import styles from './pokemonType.module.css';

function PokemonType(props) {
    const classes = `${styles.type} ${props.name}`;
    return (
        <div className={classes}>
            <p className="card-text">{props.name}</p>
        </div>
    );
}

export default PokemonType;
