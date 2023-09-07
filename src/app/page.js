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
          const date = new Date(post.timestamp);

          const hours = date.getHours() % 12 || 12; // Convert to 12-hour format
          const minutes = String(date.getMinutes()).padStart(2, "0");
          const amPm = date.getHours() >= 12 ? "pm" : "am";

          const options = { month: 'long', day: 'numeric', year: 'numeric' };
          const formattedDate = `${hours}:${minutes} ${amPm}, ${date.toLocaleDateString('en-US', options)}`;
          return(
            <Card 
            key={index}
            url={post.id}
            photo={post.photo}
            title={post.title}
            content={post.content}
            date={formattedDate}
             />
          )
        })
      }
      </div>

    </>
  )
}
