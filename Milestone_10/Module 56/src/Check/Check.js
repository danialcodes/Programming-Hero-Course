import React from 'react';
import { useParams } from 'react-router';

const Check = (props) => {
    const param = useParams();
    console.log(param);
    return (
        <div>
            <h1>Check</h1>
        </div>
    );
};

export default Check;