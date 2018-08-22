import React from 'react';

const Status = props => (
    <span className='rounded text-uppercase fs-5 px-2 pt-2 pb-1 bg-primary text-white' >
        {props.name}
    </span>
);

export default Status;