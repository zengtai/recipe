import Head from "next/head";
import Image from "next/image";
import Aside from "../components/Aside";
import List from "../components/list/List";
import Pagination from "../components/list/Pagination";

export default function Home() {
  return (
    <>
      <Head>
        <title>Recipe Guru</title>
        <meta name="description" content="Recipe for Every Day" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container flex gap-6">
        <Aside />
        <div className="flex grow flex-col bg-white">
          <div className="grow">
            <List />
          </div>
          <Pagination />
        </div>
      </div>
    </>
  );
}
