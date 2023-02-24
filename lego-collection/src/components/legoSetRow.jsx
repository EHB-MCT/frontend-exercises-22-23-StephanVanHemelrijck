import styles from './legoSetRow.module.css';

function LegoSetRow(props) {
    return (
        <tr key={props.legoSet.setId} className={props.legoSet.completed ? styles.completed : ''}>
            <td>{props.legoSet.setId}</td>
            <td>{props.legoSet.name}</td>
            <td>{props.legoSet.parts}</td>
            <td>{props.legoSet.releasedYear}</td>
            <td>{props.legoSet.completed ? 'Yes' : 'No'}</td>
        </tr>
    );
}

export default LegoSetRow;
