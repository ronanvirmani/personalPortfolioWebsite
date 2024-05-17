import React from 'react';
import ProjectsHeading from '../components/ProjectsHeading';
import BookMarkd from '../components/projects/BookMarkd';
import HobbyHub from '../components/projects/HobbyHub';

export default function Projects() {
    return (
        <div id="projects" className='h-max mb-12 bg-gray-100 justify-center items-center p-4 sm:p-8'>
            <ProjectsHeading />
            <BookMarkd />
            <HobbyHub />
        </div>
    );
}
