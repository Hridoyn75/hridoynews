import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({photo, title, content, url, date}) => {
    const pattern = /\/(\d+)\/[^/]*$/;

    // Use the `match` method to find the ID in the URL
    const match = url.match(pattern);
    const id = match[1];
  return (
    <div className=' p-2 w-full md:w-1/3 lg:w-1/4'> 
        <Link href={'/post/' + id}>
        <div className=' p-3 hover:border-yellow-400 rounded border border-transparent'>
            <div className=' max-w-full rounded overflow-hidden'>
            <Image 
            priority
            src={photo}
            alt="Feature Photo"
            width={1920}
            height={1080}
            className=' hover:scale-125 transition-all duration-500 object-contain aspect-video rounded'
             />
            </div>
             <h2 className=' py-2  line-clamp-2 text-xl'>{title}</h2>
             <p className=' pb-1'>{date}</p>
             <p className=' text-[#8c8c8c] line-clamp-3'>
                {content}
             </p>
        </div>
        </Link>
    </div>
  )
}

export default Card