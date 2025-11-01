"use client"
import React from 'react'
import UnderlineWord from './UnderlineWord';

function UnderlineHeadline({ text, text_light }) {
     const parts = text?.split(/'([^']+)'/g); // split and keep words inside quotes
  return (
     <h2 className={`${text_light? "text-neutral-50":"text-neutral-950"} pt-3`}>
      {parts?.map((part, i) =>
        i % 2 === 1 ? (
          <UnderlineWord key={i}>{part}</UnderlineWord>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </h2>
  )
}

export default UnderlineHeadline