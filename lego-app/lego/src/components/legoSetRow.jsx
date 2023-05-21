import React from 'react';

const LegoSetRow = ({ set }) => {
    return (
        <tr key={set.set_id}>
            <td>{set.set_id}</td>
            <td>{set.name}</td>
            <td>{set.year_released}</td>
            <td>{set.parts}</td>
            <td>{set.complete ? 'Yes' : 'No'}</td>
        </tr>
    );
};

export default LegoSetRow;
