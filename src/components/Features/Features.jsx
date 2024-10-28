import React from 'react';

const Features = ({feature}) => {
    return (
        <div className='text-left list-disc ml-6'>
            <li>{feature}</li>
        </div>
    );
};

export default Features;