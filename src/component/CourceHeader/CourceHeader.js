import React from 'react';
import { Link } from 'react-router-dom';

const CourceHeader = ({ course }) => {
    const { name, id } = course
    return (
        <div>
            <Link to={`/cource/${id}`} className=' btn btn-outline-info w-75 m-3 ms-md-5'>{name}</Link>
        </div>
    );
};

export default CourceHeader;