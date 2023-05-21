import { useState } from 'react';
import legodata from '../data/legodata.json';
import LegoSetRow from './legoSetRow';
import styles from './legoSetTable.module.css';

const LegoSetTable = () => {
    const [legoSets, setLegoSets] = useState(legodata);

    const handleButtonClick = (e) => {
        let newLegoSets = [...legoSets];
        newLegoSets.push({
            set_id: '10282',
            name: 'Botanical Collection - Bonsai Tree',
            year_released: '2021',
            parts: '878',
            complete: true,
            imageURL: 'https://cdn.rebrickable.com/media/thumbs/sets/10282-1/89213.jpg/1000x800p.jpg?1655132902.5771592',
        });
        setLegoSets(newLegoSets);
    };

    return (
        <div className={styles.table_container}>
            <table>
                <thead>
                    <tr>
                        <th>Set ID</th>
                        <th>Name</th>
                        <th>Year Released</th>
                        <th>Parts</th>
                        <th>Complete</th>
                    </tr>
                </thead>
                <tbody>
                    {legoSets.map((set) => {
                        return <LegoSetRow set={set} />;
                    })}
                </tbody>
            </table>
            <button onClick={handleButtonClick}>Add new set</button>
        </div>
    );
};

export default LegoSetTable;
