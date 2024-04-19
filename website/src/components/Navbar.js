import React from 'react'

export default function Navbar() {
  return (
    <header className='flex justify-end bg-black border-y-4 border-red'>
        <div className='flex'>
            <a href="mailto:ronan.virmani@ufl.edu" className="mr-4">
                <img src="../../public/email-icon.jpeg" alt="Email Logo" className="w-14 h-14"></img>
            </a>
            <a href="https://www.linkedin.com/in/ronan-virmani-uf/" className="mr-4">
                <img  src="https://www.linkedin.com/favicon.ico" alt="LinkedIn Logo" className="w-14 h-14"></img>
            </a>
            <a href="https://github.com/ronanvirmani">
                <img src="https://github.com/github.png" alt="GitHub Logo" className="w-14 h-14"></img>
            </a>
        </div>
    </header>

  )
}

