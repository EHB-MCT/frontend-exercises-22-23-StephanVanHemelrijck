import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { getStudent } from '../data/studentService';

export async function loader({ params }) {
    const student = await getStudent(params.id);
    return { student };
}

const Content = () => {
    const { student } = useLoaderData();

    return (
        <div>
            <Card style={{ margin: 0, border: 'none' }}>
                <Card.Body>
                    <h1>{student.name}</h1>
                    <h2>{student.email}</h2>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Content;
