import React from 'react';

export default function ProjectSkill({ skill }) {
    return (
        <div className='m-2'>
            <label className='border-2 w-fit p-2.5 rounded-lg bg-white border-white'>
                {skill}
            </label>
        </div>
    );
}
