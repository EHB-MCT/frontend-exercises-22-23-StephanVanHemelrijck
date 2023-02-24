import styles from './header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <img src="https://rebrickable.com/static/img/title.png?1653201499.8328834" className="App-logo" alt="logo" />
            <h1>Lego Collections</h1>
        </header>
    );
}

export default Header;
