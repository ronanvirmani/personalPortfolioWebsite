import React from 'react';

export default function Skills({ skill }) {
    return (
        <div className='flex justify-center lg:justify-start'>
            <label className='border-2 w-fit p-2.5 rounded-lg bg-gray-100 border-gray-100'>
                {skill}
            </label>
        </div>
    );
}
