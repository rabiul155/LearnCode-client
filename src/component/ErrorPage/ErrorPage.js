import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Oops!</h1>
                    <p class="lead">We're sorry, but something went wrong.</p>
                    <hr class="my-4" />
                    <p>Please try again later.</p>
                    <Link to='/' class="btn btn-primary btn-lg" role="button">Go back to homepage</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;