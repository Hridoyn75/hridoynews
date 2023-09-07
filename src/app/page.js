import Card from '@/components/card'
import Image from 'next/image'

export default async function Home() {

  const response = await fetch("https://studynews.onrender.com/posts", 
  { cache: 'no-store' });

  const data = await response.json();

  data.reverse();

  return (
    <>
      <h1 className=' text-[#ff5724] text-4xl text-center pb-3 pt-5'>Simple News App</h1>
      <div className=' flex flero flex-wrap p-2 md:px-10'>
      {
        data.map((post, index)=>{
          return(
            <Card 
            key={index}
            url={post.id}
            photo={post.photo}
            title={post.title}
            content={post.content}
             />
          )
        })
      }
      </div>

    </>
  )
}
