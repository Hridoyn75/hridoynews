import Card from "@/components/card";
import Link from "next/link";

export default async function Home({ searchParams }) {
  let page = searchParams.page ? searchParams.page : 1;
  if (parseInt(page) < 0 || !page) {
    page = 1;
  }
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/posts?page=" + page,
    {
      cache: "no-store",
    }
  );

  const data = await response.json();

  const PrevPage = parseInt(page) === 1 ? 1 : parseInt(page) - 1;
  const NextPage = parseInt(page) + 1;

  return (
    <>
      <h1 className=" text-[#ff5724] text-3xl text-center pt-5">HridoyNews</h1>
      <div className=" flex flero flex-wrap p-2 md:px-10">
        {data.map((post, index) => {
          const date = new Date(post.timestamp);

          const options = { month: "long", day: "numeric", year: "numeric" };
          const formattedDate = `${date.toLocaleDateString("en-US", options)}`;
          return (
            <Card
              key={index}
              url={post.id}
              photo={post.photo}
              title={post.title}
              content={post.content}
              date={formattedDate}
            />
          );
        })}
      </div>
      <div className=" flex gap-5 w-fit mx-auto mb-16 pt-5">
        <Link
          className=" py-2 px-4 rounded-md bg-orange-600"
          href={"/?page=" + PrevPage}
        >
          Newer
        </Link>
        <Link
          className=" py-2 px-4 rounded-md bg-orange-600"
          href={"/?page=" + NextPage}
        >
          Older
        </Link>
      </div>
      <p className=" text-[#ff5724] text-center py-3">
        HridoyNews - Powered by{" "}
        <a
          className=" text-green-500"
          href="https://www.jugantor.com/"
          target="_blank"
        >
          Jugantor
        </a>
      </p>
    </>
  );
}
