import React from 'react'

export default function Experience() {
  return (
    <div className='flex flex-row bg-black text-cream border-y-4 border-red'>
        <p className='w-1/4 text-right px-8 py-6 text-xl'>Course Work: </p>
        <ul className='px-5'>
            <li>Data Structures and Algorithms</li>
            <li>Computer Organization</li>
            <li>Discrete Math</li>
        </ul>
        <ul className='px-5'>
            <li>Intro to Software Engineering</li>
            <li>Intro to Computer Science</li>
        </ul>
        <ul className='px-5'>
            <li>Operating Systems</li>
            <li>Internet Programming</li>
        </ul>
    </div>
  )
}
