import React from 'react'

function UnderlineWord({ children }) {
  return (
    <span className="text-primary-500 relative inline-block">
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 413 14"
        fill="none"
        className="absolute -bottom-2 left-0 w-full"
      >
        <path
          d="M2.22266 12.1311C32.5774 -6.55895 210.348 6.21491 410.813 12.1311"
          stroke="#FF492C"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </span>
  )
}

export default UnderlineWord