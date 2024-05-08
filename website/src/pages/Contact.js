import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Contact() {
    return (
        <div id="contact" className='h-screen mb-12'> 
            <div class="min-h-screen flex items-center justify-center">
                <div class="w-3/4 h-3/5 bg-gray-200 p-8 rounded-lg shadow-lg flex justify-between items-center">
                    <div class="w-1/2">
                        <h1 className='text-4xl font-bold my-10  mx-5 pt-3'>CONTACT</h1>
                        <div className="w-10 h-1.5 bg-purple justfy-center text-center rounded-lg mb-6 mx-5"></div>
                        <ul>
                            <li className="flex items-center m-5">
                                <span className="mr-2">
                                    <EmailIcon />
                                </span>
                                <a href="mailto:ronan.virmani@ufl.edu" className="text-purple hover:underline text-2xl">Email</a>
                            </li>
                            <li className="flex items-center m-5">
                                <span className="mr-2">
                                    <GitHubIcon />
                                </span>
                                <a href="https://github.com/ronanvirmani" className="text-purple hover:underline text-2xl">Github</a>
                            </li>
                            <li class="flex items-center m-5">
                                <span class="mr-2">
                                    <LinkedInIcon />
                                </span>
                                <a href="https://www.linkedin.com/in/ronan-virmani-uf/" className="text-purple hover:underline text-2xl">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                    <div class="w-1/2">
                    </div>
                </div>
            </div>
        </div>

    );
}