import React from 'react';

export default function ProjectsHeading() {
    return (
        <div className='flex justify-center'>
            <div className='text-center mt-12'>
                <h1 className='text-4xl font-bold m-9 pt-3'>PROJECTS</h1>
                <div className="w-8 h-1.5 bg-purple mx-auto rounded-lg"></div>
                <p className='text-lg w-full sm:w-3/4 m-8 mx-auto'>
                    Here you will find some of the recent work I have done. If a preview is provided, you can click on the image to view the project, or click on the project name to check out the code.
                </p>
            </div>
        </div>
    );
}
