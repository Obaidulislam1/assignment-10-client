import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1 className='text-center mt-20'>Error 404 page Not Found</h1>
            <p>Back to <Link to='/'>Home</Link></p>
        </div>
    );
};

export default ErrorPage;