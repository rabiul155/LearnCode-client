import React from 'react';
import { Link } from 'react-router-dom';

const CourceHeader = ({ course }) => {
    const { name, id } = course
    return (
        <div>
            <Link className=' btn btn-outline-info w-75 m-3'>{name}</Link>
        </div>
    );
};

export default CourceHeader;