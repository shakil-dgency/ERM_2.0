import React from 'react'


// max-w-[1584px] mx-auto
function Container({ children,carusel }) {
  return (
    <div className={`${carusel?"md:px-2.5":"px-2.5"} max-w-[1584px] mx-auto h-full`}>{children}</div>
  )
}

export default Container