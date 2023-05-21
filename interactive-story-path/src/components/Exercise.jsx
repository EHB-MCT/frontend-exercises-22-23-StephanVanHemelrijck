import React, { useEffect, useRef, useState } from 'react';
import { Button, FloatingLabel, Form, InputGroup } from 'react-bootstrap';
import ExerciseFeedback from './ExerciseFeedback.jsx';
import Video from './Video.jsx';

const Exercise = ({ ex, clickReset }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [choice, setChoice] = useState('A');
    const [answer, setAnswer] = useState('');
    const [exComplete, setExComplete] = useState(false);
    const textareaRef = useRef(null);

    useEffect(() => {
        setExComplete(false);
    }, [ex]);

    const submitAnswer = () => {
        if (!textareaRef.current.value) textareaRef.current.focus();
        else {
            let newAnswer = {
                email,
                username,
                choice,
                answer: textareaRef.current.value,
            };
            setAnswer(newAnswer);
            setExComplete(true);
        }
    };

    return (
        <>
            {!exComplete ? (
                <div>
                    <h2>{ex.title}</h2>
                    <p>{ex.description}</p>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        <Form.Control placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Full name</InputGroup.Text>
                        <Form.Control placeholder="Full name" onChange={(e) => setUsername(e.target.value)} />
                    </InputGroup>

                    <Video videoId={ex.startVideoId} />

                    <div className="row">
                        <div className="col">
                            <h3>{ex.titleChoiceA}</h3>
                            <Video videoId={ex.videoIdChoiceA} />
                        </div>
                        <div className="col">
                            <h3>{ex.titleChoiceB}</h3>
                            <Video videoId={ex.videoIdChoiceB} />
                        </div>
                    </div>

                    <fieldset>
                        <legend>Which video is the correct choice? Why?</legend>
                        <div key={'inline-radios'} className="mb-3" onChange={(e) => setChoice(e.target.id)}>
                            <Form.Check inline defaultChecked label="A" name="group1" type="radio" id={'A'} />
                            <Form.Check inline default label="B" name="group1" type="radio" id={'B'} />
                        </div>
                    </fieldset>

                    <FloatingLabel controlId="floatingTextarea2" label="Your answer" className="mb-3">
                        <Form.Control ref={textareaRef} as="textarea" placeholder="Your answer..." style={{ height: '100px' }} />
                    </FloatingLabel>

                    <Button variant="primary" onClick={() => submitAnswer()}>
                        Send answer
                    </Button>
                </div>
            ) : (
                <ExerciseFeedback answer={answer} feedbackA={ex.feedbackA} feedbackB={ex.feedbackB} clickReset={clickReset} />
            )}
        </>
    );
};

export default Exercise;
