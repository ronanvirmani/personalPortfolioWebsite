import React from 'react'

export default function Skills({skill}) {
  return (
    <div>
      <label className='border-2 w-fit p-2.5 rounded-lg bg-gray-100 border-gray-100 mr-4'>
        {skill}
    </label>
    </div>
  )
}
