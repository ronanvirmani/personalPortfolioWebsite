import React from 'react'
import ProjectSkill from '../ProjectSkill';
import image from './HH.png'

export default function HobbyHub() {
  return (
    <div className='items-center text-center my-6 mx-24'>
                <div className='flex flex-row'>
                    <div className='w-1/2 flex flex-col my-12'>
                        <a href='https://github.com/LukeSutor/HobbyHub' 
                         target="_blank" rel="noopener noreferrer">
                            <h2 className='text-2xl font-bold hover:text-purple'>
                                HobbyHub
                            </h2>
                        </a>
                        <p className='text-lg mt-6 px-4'>
                            Hobby Hub is a web application that allows users to search for hobbies and activities based on their interests. 
                            The user can then save hobbies to their profile and remove them as they please. Along with this they can
                            add other users as friends and chat with them.
                            The application is built using React and Supabase.
                        </p>
                        <div className='flex flex-row my-10 items-center justify-center'>
                            <ProjectSkill skill='React' />
                            <ProjectSkill skill='Supabase' />
                            <ProjectSkill skill='Tailwind CSS' />
                        </div>
                    </div>
                    <a className='w-1/2 hover:border-purple hover:border-2 hover:rounded-xl'
                    href="https://book-markd.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img src={image} alt="Preview" 
                        className="w-11/12 h-auto my-8 mx-10 rounded-xl border-2 border-white" />
                    </a>
                </div>
            </div>
  )
}
