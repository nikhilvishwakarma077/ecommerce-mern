import React from 'react'

const Title = ({text1, text2, description}) => {
  return (
    <div className='w-full p-5  flex flex-col gap-5 items-center'>
      <p className='text-4xl font-semibold'><span className='text-gray-600'>{text1} </span> <span className='text-orange-500'>{text1} </span> <span>---</span> </p>
      <p className='text-sm '>{description}</p>

    </div>
  )
}

export default Title
