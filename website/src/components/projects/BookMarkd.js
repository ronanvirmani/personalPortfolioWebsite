import React from 'react'
import bookmarkImage from './bookmark.png'
import ProjectSkill from '../ProjectSkill'

export default function BookMarkd() {
  return (
    <div className='items-center text-center my-6 mx-24'>
                <div className='flex flex-row'>
                    <a className='w-1/2 hover:border-purple hover:border-2 hover:rounded-xl'
                    href="https://book-markd.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img src={bookmarkImage} alt="Preview" 
                        className="w-11/12 h-auto my-8 ml-10 rounded-xl border-2 border-white" />
                    </a>
                    <div className='w-1/2 flex flex-col my-12'>
                        <a href='https://github.com/ronanvirmani/BookMarkd' 
                         target="_blank" rel="noopener noreferrer">
                            <h2 className='text-2xl font-bold hover:text-purple'>
                                Book Mark'd
                            </h2>
                        </a>
                        
                        <p className='text-lg mt-6 px-4'>
                            Book Mark'd is a web application that allows users to search for books using the Google Books API. 
                            The user can then save books to their reading list and remove them as they please. 
                            The application is built using React and Supabase.
                        </p>
                        
                        <div className='flex flex-row my-10 items-center justify-center'>
                            <ProjectSkill skill='React' />
                            <ProjectSkill skill='Supabase' />
                            <ProjectSkill skill='Tailwind CSS' />
                        </div>
                    </div>
                </div>
            </div>
  )
}
