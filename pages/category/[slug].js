import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ListItem from "../../components/list/ListItem";
import Pagination from "../../components/list/Pagination";

export default function Category() {
  return (
    <>
      <Head>
        <title>Recipe Guru</title>
        <meta name="description" content="Recipe for Every Day" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container flex gap-6">
        <div className="flex grow flex-col bg-white">
          <div className="grow">
            <h1 className="mb-6 text-3xl font-bold text-[#439C9C]">
              Category Title
            </h1>
            <ul className="grid grid-cols-6 gap-4">
              <ListItem />
            </ul>
          </div>
          <Pagination />
        </div>
      </div>
    </>
  );
}
