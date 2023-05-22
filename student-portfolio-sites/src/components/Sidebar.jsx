import { Col, Nav } from 'react-bootstrap';
import { Form, Link, useLoaderData } from 'react-router-dom';
import { createStudent, getStudents } from '../data/studentService';

export async function loader() {
    const students = await getStudents();
    return { students };
}

export async function action() {
    const student = await createStudent('Stephan Van Hemelrijck', 'stephan@email.com');
    return { student };
}

const Sidebar = () => {
    const { students } = useLoaderData();

    return (
        <Col xs={3} style={{ backgroundColor: '#f8f9fa', height: '100%', padding: 0 }}>
            <Nav className="flex-column" style={{ height: '100%' }}>
                <h5 style={{ padding: '20px 10px' }}>Student Portfolios</h5> {/* Title */}
                <Form method="POST">
                    <button
                        className="btn"
                        to={`/newStudent`}
                        style={{
                            padding: '10px',
                            borderTop: '1px solid lightgrey',
                            textDecoration: 'none',
                            color: 'black',
                        }}
                    >
                        New Student (RANDOM)
                    </button>
                </Form>
                <Link
                    to={`/newStudent`}
                    style={{
                        padding: '10px',
                        borderTop: '1px solid lightgrey',
                        textDecoration: 'none',
                        color: 'black',
                    }}
                >
                    New Student (FORM)
                </Link>
                {students.map((student) => (
                    <Link
                        to={`/student/${student.id}`}
                        key={student.id}
                        href={`/student/${student.id}`}
                        style={{
                            padding: '10px',
                            borderTop: '1px solid lightgrey',
                            textDecoration: 'none',
                            color: 'black',
                        }}
                    >
                        {student.name}
                    </Link>
                ))}
            </Nav>
        </Col>
    );
};

export default Sidebar;
