import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Form as RouterForm, redirect } from 'react-router-dom';
import { createStudent } from '../data/studentService';

export async function action({ request, params }) {
    const formData = await request.formData();

    const email = formData.get('email');
    const fullname = formData.get('fullname');

    console.log(email, fullname);

    const student = await createStudent(email, fullname);
    return redirect(`/student/${student.id}`);
}

const StudentForm = () => {
    return (
        <div className="container mt-3">
            <RouterForm method="post">
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <Form.Control placeholder="email" name="email" />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Full name</InputGroup.Text>
                    <Form.Control placeholder="Full name" name="fullname" />
                </InputGroup>
                <Button type="submit">Submit</Button>
            </RouterForm>
        </div>
    );
};

export default StudentForm;
