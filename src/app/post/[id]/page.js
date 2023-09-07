import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ArticlePage = async ({params}) => {
    const response = await fetch("https://studynews.onrender.com/posts", 
    { cache: 'no-store' })

    const data = await response.json()

    const post = data.filter(post=>post.id.indexOf(params.id) !== -1)[0]


  return (
    <>
    <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.content} key="desc" />
        <meta property="og:title" content={post.title} />
        <meta
          property="og:description"
          content={post.content}
        />
      </Head>
        <div className=' w-full max-w-[800px] py-10 px-4 mx-auto'>
            <p className=' mb-5 text-center'>
            <Link href='/'>
                <span className='bg-[#ff5724] px-4 py-2 rounded-md'>Home</span>
            </Link>
            </p>
            <div className=' mx-auto w-10/12'>
            <Image 
            src={post.photo}
            width={1920}
            height={1080}
            alt='Thumbnail'
            className=' object-contain aspect-video rounded' />
            </div>
            <h1 className=' text-[#ff5724] py-5 text-center text-3xl'>{post.title}</h1>
            <p className=' leading-loose text-[#95a6a7]'>{post.content}</p>
        </div>
    </>
  )
}

export default ArticlePage