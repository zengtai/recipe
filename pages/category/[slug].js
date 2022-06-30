import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Category() {
  return (
    <div className={`flex min-h-screen flex-col bg-white`}>
      <Head>
        <title>Recipe Guru</title>
        <meta name="description" content="Recipe for Every Day" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className=" bg-[#439C9C]">
        <nav className="mt-10 flex justify-center bg-[#48C0C0]">
          <div className="container flex gap-8 py-4 text-white">
            <Link href={`/`}>Recipe Guru</Link>
            <ul className="flex gap-8">
              <li>
                <Link href={`/category/1`}>Category 1</Link>
              </li>
              <li>
                <Link href={`/category/2`}>Category 2</Link>
              </li>
              <li>
                <Link href={`/category/3`}>Category 3</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="flex grow justify-center py-6">
        <div className="container flex gap-6">
          <div className="flex grow flex-col bg-white">
            <div className="grow">
              <h1 className="mb-6 text-3xl font-bold text-[#439C9C]">
                Category Title
              </h1>
              <ul className="grid grid-cols-6 gap-4">
                <li className="border-4 border-[#48C0C0]">
                  <div className="relative">
                    <Image
                      src={`https://www.recipegirl.com/wp-content/uploads/2008/08/Best-Brownies-Recipe-1-300x300.jpeg`}
                      alt="Title"
                      width={200}
                      height={200}
                      layout={`responsive`}
                    />
                  </div>
                  <h2 className="p-2 font-bold text-[#439C9C]">Title</h2>
                </li>
                <li className="border-4 border-[#48C0C0]">
                  <div className="relative">
                    <Image
                      src={`https://www.recipegirl.com/wp-content/uploads/2008/08/Best-Brownies-Recipe-1-300x300.jpeg`}
                      alt="Title"
                      width={200}
                      height={200}
                      layout={`responsive`}
                    />
                  </div>
                  <h2 className="p-2 font-bold text-[#439C9C]">Title</h2>
                </li>
                <li className="border-4 border-[#48C0C0]">
                  <div className="relative">
                    <Image
                      src={`https://www.recipegirl.com/wp-content/uploads/2008/08/Best-Brownies-Recipe-1-300x300.jpeg`}
                      alt="Title"
                      width={200}
                      height={200}
                      layout={`responsive`}
                    />
                  </div>
                  <h2 className="p-2 font-bold text-[#439C9C]">Title</h2>
                </li>
                <li className="border-4 border-[#48C0C0]">
                  <div className="relative">
                    <Image
                      src={`https://www.recipegirl.com/wp-content/uploads/2008/08/Best-Brownies-Recipe-1-300x300.jpeg`}
                      alt="Title"
                      width={200}
                      height={200}
                      layout={`responsive`}
                    />
                  </div>
                  <h2 className="p-2 font-bold text-[#439C9C]">Title</h2>
                </li>
                <li className="border-4 border-[#48C0C0]">
                  <div className="relative">
                    <Image
                      src={`https://www.recipegirl.com/wp-content/uploads/2008/08/Best-Brownies-Recipe-1-300x300.jpeg`}
                      alt="Title"
                      width={200}
                      height={200}
                      layout={`responsive`}
                    />
                  </div>
                  <h2 className="p-2 font-bold text-[#439C9C]">Title</h2>
                </li>
                <li className="border-4 border-[#48C0C0]">
                  <div className="relative">
                    <Image
                      src={`https://www.recipegirl.com/wp-content/uploads/2008/08/Best-Brownies-Recipe-1-300x300.jpeg`}
                      alt="Title"
                      width={200}
                      height={200}
                      layout={`responsive`}
                    />
                  </div>
                  <h2 className="p-2 font-bold text-[#439C9C]">Title</h2>
                </li>
                <li className="border-4 border-[#48C0C0]">
                  <div className="relative">
                    <Image
                      src={`https://www.recipegirl.com/wp-content/uploads/2008/08/Best-Brownies-Recipe-1-300x300.jpeg`}
                      alt="Title"
                      width={200}
                      height={200}
                      layout={`responsive`}
                    />
                  </div>
                  <h2 className="p-2 font-bold text-[#439C9C]">Title</h2>
                </li>
                <li className="border-4 border-[#48C0C0]">
                  <div className="relative">
                    <Image
                      src={`https://www.recipegirl.com/wp-content/uploads/2008/08/Best-Brownies-Recipe-1-300x300.jpeg`}
                      alt="Title"
                      width={200}
                      height={200}
                      layout={`responsive`}
                    />
                  </div>
                  <h2 className="p-2 font-bold text-[#439C9C]">Title</h2>
                </li>
                <li className="border-4 border-[#48C0C0]">
                  <div className="relative">
                    <Image
                      src={`https://www.recipegirl.com/wp-content/uploads/2008/08/Best-Brownies-Recipe-1-300x300.jpeg`}
                      alt="Title"
                      width={200}
                      height={200}
                      layout={`responsive`}
                    />
                  </div>
                  <h2 className="p-2 font-bold text-[#439C9C]">Title</h2>
                </li>
                <li className="border-4 border-[#48C0C0]">
                  <div className="relative">
                    <Image
                      src={`https://www.recipegirl.com/wp-content/uploads/2008/08/Best-Brownies-Recipe-1-300x300.jpeg`}
                      alt="Title"
                      width={200}
                      height={200}
                      layout={`responsive`}
                    />
                  </div>
                  <h2 className="p-2 font-bold text-[#439C9C]">Title</h2>
                </li>
              </ul>
            </div>
            <div className="mt-6 flex justify-center gap-8">
              <button className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-50 text-sm uppercase text-slate-400">
                Prev
              </button>
              <ol className="flex items-center gap-4 text-slate-400">
                <li className="flex h-14 w-14 items-center justify-center rounded-full bg-[#48C0C0] text-white">
                  <b>1</b>
                </li>
                <li className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                  <b>2</b>
                </li>
                <li className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                  <b>3</b>
                </li>
                <li>...</li>
                <li className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                  <b>118</b>
                </li>
              </ol>
              <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#B5E4DC] text-sm uppercase text-[#439C9C]">
                Next
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer
        className={`flex flex-col items-center justify-center bg-[#48C0C0] text-sm text-white`}
      >
        <nav className="flex w-full justify-center bg-[#439C9C] py-4">
          <div className="container grid grid-cols-5">
            <dl>
              <dt className="mb-2 font-bold uppercase">Course</dt>
              <dd>Burgers</dd>
              <dd>Burgers</dd>
              <dd>Burgers</dd>
              <dd>Burgers</dd>
            </dl>
            <dl>
              <dt className="mb-2 font-bold uppercase">Cuisine</dt>
              <dd>Burgers</dd>
              <dd>Burgers</dd>
              <dd>Burgers</dd>
              <dd>Burgers</dd>
            </dl>
            <dl>
              <dt className="mb-2 font-bold uppercase">Dietary</dt>
              <dd>Burgers</dd>
              <dd>Burgers</dd>
              <dd>Burgers</dd>
              <dd>Burgers</dd>
            </dl>
            <dl>
              <dt className="mb-2 font-bold uppercase">Method</dt>
              <dd>Burgers</dd>
              <dd>Burgers</dd>
              <dd>Burgers</dd>
              <dd>Burgers</dd>
            </dl>
            <dl>
              <dt className="mb-2 font-bold uppercase">Weigth Watchers</dt>
              <dd>Burgers</dd>
              <dd>Burgers</dd>
              <dd>Burgers</dd>
              <dd>Burgers</dd>
            </dl>
          </div>
        </nav>
        <div className="container py-6">
          Copyright &copy; {new Date().getFullYear()} Recipt Guru. All Rights
          Reserved
        </div>
      </footer>
    </div>
  );
}
