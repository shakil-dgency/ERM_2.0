import Image from 'next/image'
import React from 'react'

function Tools({data}) {
  return (
    <div className='px-2 py-[100px] lg:py-[150px]'>
        <div className='max-w-[980px] mx-auto flex flex-col items-center px-2.5'>
           <h2 className='text-center text-neutral-950'>{data?.headline}</h2>
           <p className='text-center text-neutral-700 text-[14px] lg:text-[18px] font-[400] mt-4'>{data?.description}</p>
        </div>
        <div className='flex justify-center mt-[50px] lg:mt-[80px]'>
            <Image
                src={data?.image ? process.env.NEXT_PUBLIC_API_URL + data.image.url: '/'}
                alt="Tools"
                width={901}
                height={482}
                className=''
            />
        </div>
    </div>
  )
}

export default Tools