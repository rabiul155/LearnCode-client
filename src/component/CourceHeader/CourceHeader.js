import React from 'react';
import { Link } from 'react-router-dom';

const CourceHeader = ({ course }) => {
    const { name, _id } = course
    return (
        <div>
            <Link to={`/cource/${_id}`} className=' btn btn-outline-info w-75  my-3 ms-5'>{name}</Link>
        </div>
    );
};

export default CourceHeader;