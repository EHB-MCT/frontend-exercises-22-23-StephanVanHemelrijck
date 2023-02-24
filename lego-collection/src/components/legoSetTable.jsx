import { useState } from 'react';
import LegoSetRow from './legoSetRow';
import styles from './legoSetTable.module.css';

function LegoSetTable() {
    let [legoSets, setLegoSets] = useState([
        {
            setId: 10282,
            name: 'Botanical Collection: Bonsai Tree',
            parts: 878,
            releasedYear: 2021,
            completed: false,
        },
        {
            setId: 10292,
            name: 'Friends Apartments',
            parts: 2048,
            releasedYear: 2021,
            completed: true,
        },
        {
            setId: 71040,
            name: 'Disney Castle',
            parts: 4080,
            releasedYear: 2016,
            completed: true,
        },
        {
            setId: 10179,
            name: "Ultimate Collector's Millennium Falcon",
            parts: 5195,
            releasedYear: 2007,
            completed: false,
        },
    ]);

    return (
        <div className={styles.table_container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Parts</th>
                        <th>Released</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {legoSets.map((legoSet, index) => {
                        return <LegoSetRow key={index} legoSet={legoSet} />;
                    })}
                </tbody>
            </table>
            <div className="inputs">
                <input type="text" name="legoSet" id="legoSet" />
                <button
                    onClick={() => {
                        setLegoSets([
                            ...legoSets,
                            {
                                setId: 75810,
                                name: 'Stranger Things: The Upside Down',
                                parts: 2287,
                                releasedYear: 2019,
                                completed: true,
                            },
                        ]);
                    }}
                >
                    Add
                </button>
            </div>
        </div>
    );
}

export default LegoSetTable;
