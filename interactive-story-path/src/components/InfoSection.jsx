import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const InfoSection = ({ title, description, list }) => {
    return (
        <Accordion defaultActiveKey="0" className="mb-3">
            <Accordion.Item eventKey="0">
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>
                    <p>{description}</p>
                    <ul>
                        {list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default InfoSection;
