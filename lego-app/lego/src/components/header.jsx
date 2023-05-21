import React from 'react';

import styles from './header.module.css';

const Header = () => {
    return (
        <div className={styles.banner}>
            <img src="https://rebrickable.com/static/img/title.png" alt="logo" />
            <h2>This is a set collector app!</h2>
        </div>
    );
};

export default Header;
