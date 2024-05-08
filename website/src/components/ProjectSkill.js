import React from 'react'

export default function ProjectSkill({skill}) {
  return (
    <div>
      <label className='border-2 w-fit p-2.5 rounded-lg bg-white border-white mx-4'>
        {skill}
      </label>
    </div>
  )
}
