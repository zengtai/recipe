import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import RecipeDetail from "../../components/detail/RecipeDetail";

export default function Recipe() {
  return (
    <>
      <Head>
        <title>Recipe Guru</title>
        <meta name="description" content="Recipe for Every Day" />
      </Head>

      <div className="container flex gap-6">
        <div className="flex grow flex-col bg-white">
          <div className="flex grow">
            <div className="grow">
              <div className="flex gap-4">
                <div className="relative h-fit basis-1/5 border-4 border-[#48C0C0]">
                  <Image
                    src={`https://www.recipegirl.com/wp-content/uploads/2008/08/Best-Brownies-Recipe-1-300x300.jpeg`}
                    alt="Title"
                    width={200}
                    height={200}
                    layout={`responsive`}
                  />
                </div>
                <div className="max-w-3xl">
                  <RecipeDetail />
                </div>
              </div>
            </div>
            <div className="basis-1/6">
              <h2 className="mb-4 text-xl font-bold text-[#439C9C]">
                Recommended
              </h2>
              <ul className="grid gap-4">
                <li className="flex gap-4">
                  <div className="relative h-24 w-24 border-4 border-[#48C0C0]">
                    <Image
                      src={`https://www.recipegirl.com/wp-content/uploads/2008/08/Best-Brownies-Recipe-1-300x300.jpeg`}
                      alt="Title"
                      width={200}
                      height={200}
                      layout={`responsive`}
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <h2 className="py-2 font-bold text-[#439C9C]">Title</h2>
                    <Link href={`/`}>
                      <a className="text-sm">Read More...</a>
                    </Link>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="relative h-24 w-24 border-4 border-[#48C0C0]">
                    <Image
                      src={`https://www.recipegirl.com/wp-content/uploads/2008/08/Best-Brownies-Recipe-1-300x300.jpeg`}
                      alt="Title"
                      width={200}
                      height={200}
                      layout={`responsive`}
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <h2 className="py-2 font-bold text-[#439C9C]">Title</h2>
                    <Link href={`/`}>
                      <a className="text-sm">Read More...</a>
                    </Link>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="relative h-24 w-24 border-4 border-[#48C0C0]">
                    <Image
                      src={`https://www.recipegirl.com/wp-content/uploads/2008/08/Best-Brownies-Recipe-1-300x300.jpeg`}
                      alt="Title"
                      width={200}
                      height={200}
                      layout={`responsive`}
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <h2 className="py-2 font-bold text-[#439C9C]">Title</h2>
                    <Link href={`/`}>
                      <a className="text-sm">Read More...</a>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
