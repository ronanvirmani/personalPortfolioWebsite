import React from 'react'

export default function Body() {
  return (
    <div className='flex flex-row bg-black items-center'>
      <p className='w-1/2 text-cream px-12 py-12 text-xl text-center'>
        Welcome. My name is Ronan Virmani, I'm a Computer Science
        student at the Unversity of Florida based in Orlando, FL. I'm passionate about
        software development and I'm always looking for new opportunities to learn and grow.
      </p>
      <img src='https://i.imgur.com/1zv3Z9V.jpg' alt='Ronan Virmani'
       className='w-1/2 px-8 py-12'></img>
    </div>
  )
}
