import React from 'react'


// max-w-[1584px] mx-auto
function Container({ children }) {
  return (
    <div className='max-w-[1584px] mx-auto px-2.5 h-full'>{children}</div>
  )
}

export default Container