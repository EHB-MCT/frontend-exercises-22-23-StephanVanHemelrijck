import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();

    return (
        <div className="container text-center">
            <h1 className="display-4">{error.status}</h1>
            <p>{error.statusText}</p>
            <a href="/" className="btn btn-primary">
                Go home
            </a>
        </div>
    );
};

export default Error;
